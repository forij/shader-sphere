precision highp float;

attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
varying vec3 pos3;
uniform float uTime;
uniform sampler2D nTex;

void main() {
    pos3 = position;

    float speed = 0.03;

    vec2 uvNoise = pos3.xy * 0.05;
    uvNoise.y += uTime * speed;
    uvNoise.x += uTime * speed;
    float noiseValue = texture2D(nTex, mod(uvNoise,1.0)).r;

    noiseValue = pow(noiseValue, 1.0 + pos3.z * 2.0);

    // if(!(1.0 < length(pos3) && length(pos3) < 1.0)){
    pos3 = normalize(pos3) * (1.0 - noiseValue);
    pos3.z -= noiseValue * 0.5;

    float t = uTime * 0.01;
    float uTimeNoise = texture2D(nTex, vec2(t, t)).r;

    // pos3 *= mod(uTimeNoise,1.0);
    // }

    float len = length(pos3);
    
    // len is 0.5..1
    // rescale to 0.9..1
    // len = (len - 0.5) * 0.2 + 0.9;
    pos3 = normalize(pos3) * len * ( 2.0 - noiseValue * 0.1 );

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos3, 1.0);
    gl_PointSize = 10.0;
}