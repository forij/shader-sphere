precision highp float;
uniform float uTime;
varying vec3 pos3;

void main() {
    gl_FragColor.rgb = 0.5 + pos3 + vec3(0.2, 0.0, 0.1);
    gl_FragColor.a = 1.0;
}