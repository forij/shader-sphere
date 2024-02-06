attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
varying vec3 pos3;
uniform float uTime;

uniform float speed; // 0.3
uniform float noiseForce; // 0.5
uniform float noiseScale; // 0.3


uniform sampler2D nTex;
uniform sampler2D nTex2;


void main() {
    pos3 = position;

    vec2 uvNoise = pos3.xy * noiseScale;
    uvNoise.x += uTime * speed;
    pos3.z += texture2D(nTex, mod(uvNoise,1.0)).r * noiseForce;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos3, 1.0);
    gl_PointSize = 3.0;
}