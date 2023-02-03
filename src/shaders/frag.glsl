precision highp float;
uniform float uTime;
varying vec3 pos3;

void main() {
    gl_FragColor.rgb = 0.5 + vec3(0.5, 0.5, 0.5);
    gl_FragColor.a = 1.0;
}