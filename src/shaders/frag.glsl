precision highp float;
uniform float uTime;
varying vec3 pos3;

void main() {
    gl_FragColor.rgb = 0.5 + vec3(0.5, 0.5, 0.5);
    gl_FragColor.a = 1.0;

    gl_FragColor.r = 70.0 / 255.0;
    gl_FragColor.g = 153.0 / 255.0;
    gl_FragColor.b = 197.0 / 255.0;

    gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.0), pos3.z * 5.0);
}