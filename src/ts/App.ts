import { Renderer, Program, Color, Orbit, Mesh, Camera, Vec3, Transform, Plane, Sphere, Box, Geometry, OGLRenderingContext, Texture } from 'ogl-typescript';
import vertex from '../shaders/vert.glsl';
import fragment from '../shaders/frag.glsl';

import noiseImgSrc from '../assets/T_Noise_03.png';

import TweakPanel from './TweakPanel';
import config from './config';

enum AppStatus{
    INIT,
    READY,
}

class App {
    public renderer: Renderer;
    public gl: OGLRenderingContext;

    public camera: Camera;
    public orbitControls: any;

    public sphereShader?: Program;
    public scene: Transform;

    public noiseTex: Texture;

    private tweakPanel: TweakPanel;

    private status: AppStatus = AppStatus.INIT;

    async init() {
        this.renderer = new Renderer({dpr: 3});

        this.gl = this.renderer.gl;
        document.body.appendChild(this.gl.canvas);
        this.gl.clearColor(0, 0, 0, 0);

        this.initCamera();

        window.addEventListener('resize', this.onResize.bind(this), false);
        this.onResize();

        this.scene = new Transform();

        this.noiseTex = await this.createTexture( noiseImgSrc );

        const sphere = this.createSphere();

        sphere.setParent(this.scene);

        this.tweakPanel = new TweakPanel();
        this.tweakPanel.init(config);

        this.updateConfigUniforms = this.updateConfigUniforms.bind(this);

        this.tweakPanel.onChange(this.updateConfigUniforms)

        this.status = AppStatus.READY;
    }

    public updateConfigUniforms(){
        if(!this.sphereShader){
            return;
        }

        this.sphereShader.uniforms.speed.value = config['speed'];
        this.sphereShader.uniforms.noiseForce.value = config['noiseForce'];
        this.sphereShader.uniforms.noiseScale.value = config['noiseScale'];
    }

    public initCamera() {
        this.camera = new Camera(this.gl, { fov: 35 });
        this.camera.position.set(0, 1, 7);
        this.camera.lookAt([0, 0, 0]);

        // @ts-ignore
        this.orbitControls = new Orbit(this.camera, {
            element: this.gl.canvas,
            target: new Vec3(0, 0, 0),
        });
    }

    public onResize() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.perspective({ aspect: this.gl.canvas.width / this.gl.canvas.height });
    }

    public createSphereShader() {
        return new Program(this.gl, {
            vertex,
            fragment,
            transparent: true,
            uniforms: {
                uTime: { value: 0 },

                // conifg params
                speed: { value: config['speed'] },
                noiseForce: { value: config['noiseForce'] },
                noiseScale: { value: config['noiseScale'] },

                nTex: { value: this.noiseTex }
            },
        });
    }

    public update(t: number) {
        if(this.status === AppStatus.INIT || !this.sphereShader){
            return;
        }
        
        this.tweakPanel.tickStart();

        this.orbitControls.update();

        this.renderer.render({
            scene: this.scene,
            camera: this.camera
        });

        this.sphereShader.uniforms.uTime.value = t * 0.001;


        this.tweakPanel.tickEnd();
    }

    public createTexture(src: string){
        const texture = new Texture(this.gl);
        const img = new Image();
        const res = new Promise<Texture>(res => {
            img.onload = () => {
                texture.image = img;
                res(texture);
            };
        });
        img.src = src;
        
        return res;
    }

    public createSphere() {
        if (!this.sphereShader) {
            this.sphereShader = this.createSphereShader();
        }

        const N = 50000;

        const inc = Math.PI * (3 - Math.sqrt(5))
        const off = 2 / N

        const vertexList = [];

        for (let i = 0; i < N; i++) {
            const y = i * off - 1 + (off / 2);
            const r2 = 1 - y * y;

            const r = Math.sqrt(r2);
            const phi = i * inc;

            const z = Math.sin(phi) * r;

            if (z < 0) {
                continue;
            }

            vertexList.push(
                Math.cos(phi) * r,
                y,
                Math.sin(phi) * r
            );
        }

        const vertexArray = new Float32Array(vertexList.length);
        vertexList.forEach((val: number, index: number) => vertexArray[index] = val);

        const geometry = new Geometry(this.gl, {
            position: { size: 3, data: vertexArray },
        });
        const geometryMesh = new Mesh(this.gl, {
            mode: this.gl.POINTS,
            geometry,
            program: this.sphereShader
        });

        return geometryMesh;
    }
}

export default App;