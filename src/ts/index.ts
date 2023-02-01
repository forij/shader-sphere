import { Renderer, Program, Color, Orbit, Mesh, Camera, Vec3, Transform, Plane, Sphere, Box, Geometry} from 'ogl-typescript';
import vertex from '../shaders/vert.glsl';
import fragment from '../shaders/frag.glsl';

const renderer = new Renderer({ dpr: 2 });
const gl = renderer.gl;
document.body.appendChild(gl.canvas);
gl.clearColor(0, 0, 0, 0);

const camera = new Camera(gl, { fov: 35 });
camera.position.set(0, 1, 7);
camera.lookAt([0, 0, 0]);


const controls = new Orbit(camera, {
    target: new Vec3(0, 0, 0),
});

function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
}
window.addEventListener('resize', resize, false);
resize();

const scene = new Transform();

const program = new Program(gl, {
    vertex,
    fragment,
    transparent: true,
    uniforms: {
        uTime: { value: 0 },
    },
});


const N = 1000;
const vertexArray = new Float32Array(N * 3);

const inc = Math.PI * (3 - Math.sqrt(5))
const off = 2 / N

for(let i = 0; i < N; i++){
    const y = i * off - 1 + (off / 2);
    const r = Math.sqrt(1 - y*y);
    const phi = i * inc;

    const z = Math.sin(phi) * r;
    
    if(z < 0){
        continue;
    }

    vertexArray[3 * i + 0] = Math.cos(phi) * r;
    vertexArray[3 * i + 1] = y;
    vertexArray[3 * i + 2] = Math.sin(phi) * r;
}

const geometry = new Geometry(gl, {
    position: { size: 3, data: vertexArray },
});
const geometryMesh = new Mesh(gl, { mode: gl.POINTS, geometry, program });

geometryMesh.setParent(scene);

requestAnimationFrame(update);
function update(t: number) {
    requestAnimationFrame(update);  
    controls.update();
    
    renderer.render({ scene, camera });

    program.uniforms.uTime.value = t * 0.001;
}