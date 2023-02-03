import { Renderer, Program, Color, Orbit, Mesh, Camera, Vec3, Transform, Plane, Sphere, Box, Geometry, OGLRenderingContext, Texture } from 'ogl-typescript';
import vertex from '../shaders/vert.glsl';
import fragment from '../shaders/frag.glsl';

import noiseImgSrc from '../assets/T_Noise_03.png';

class App {
    public renderer: Renderer;
    public gl: OGLRenderingContext;

    public camera: Camera;
    public orbitControls: any;

    public sphereShader?: Program;
    public scene: Transform;

    public noiseTex: Texture;

    async init() {
        this.renderer = new Renderer({dpr: 4});
        this.gl = this.renderer.gl;
        document.body.appendChild(this.gl.canvas);
        this.gl.clearColor(0, 0, 0, 0);

        this.initCamera();


        window.addEventListener('resize', this.onResize.bind(this), false);
        this.onResize();

        this.scene = new Transform();

        this.noiseTex = await this.createTexture( noiseImgSrc );

        const sphere = this.createCircle();

        sphere.setParent(this.scene);
    }

    public initCamera() {
        this.camera = new Camera(this.gl, { fov: 35 });
        this.camera.position.set(0, 1, 7);
        this.camera.lookAt([0, 0, 0]);

        // @ts-ignore
        this.orbitControls = new Orbit(this.camera, {
            target: new Vec3(0, 0, 0),
        });
    }

    public onResize() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.perspective({ aspect: this.gl.canvas.width / this.gl.canvas.height });
    }

    public createSphereShader() {
        console.log(this.noiseTex);

        return new Program(this.gl, {
            vertex,
            fragment,
            transparent: true,
            uniforms: {
                uTime: { value: 0 },
                nTex: { value: this.noiseTex }
            },
        });
    }

    public update(t: number) {
        this.orbitControls.update();

        this.renderer.render({
            scene: this.scene,
            camera: this.camera
        });

        if (this.sphereShader) {
            this.sphereShader.uniforms.uTime.value = t * 0.001;
        }
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

    public createCircle(){
        if (!this.sphereShader) {
            this.sphereShader = this.createSphereShader();
        }

        const N = 50000;

        const inc = Math.PI * (3 - Math.sqrt(5))
        const off = 2 / N

        const vertexList = [];

        for (let i = 0; i < N; i++) {
            const phi = 2 * Math.PI * Math.random();
            const distance = 0.5 + Math.random() * 0.5;

            const x = Math.cos(phi) * distance; 
            const y = Math.sin(phi) * distance;
            const z = Math.random();

            vertexList.push(
                x,
                y,
                z
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

const app = new App();
app.init();

requestAnimationFrame(update);
function update(t: number){
    requestAnimationFrame(update);
    app.update(t);
}