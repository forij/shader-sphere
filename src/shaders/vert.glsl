precision highp float;

attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
varying vec3 pos3;
uniform float uTime;
uniform sampler2D nTex;
uniform sampler2D nTex2;

void main() {
    pos3 = position;

    float speed = 0.07;

    vec2 uvNoise = pos3.xy * 0.5;
    uvNoise.y += uTime * speed;
    uvNoise.x += uTime * speed;
    pos3.z *= 1.0 + texture2D(nTex, mod(uvNoise,1.0)).r * 0.5;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos3, 1.0);
    gl_PointSize = 5.0;
}