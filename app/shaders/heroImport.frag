#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
#define TWO_PI 6.28318530718

// uniform vec2 u_res;
// uniform float u_time;
uniform sampler2D refl_texture;

varying vec3 vColor;
varying float v_time;
varying vec3 vPos;
varying float vAudioVal;
varying vec2 v_res;

void main() {
	vec2 st = gl_FragCoord.xy/v_res.xy;
    vec2 origSt = st;

    vec3 reflColor = texture2D(refl_texture, st).rgb;
    vec3 reflColorInv = texture2D(refl_texture, vec2(st.x, 1.0 - st.y)).rgb;

    // vec3 finalColor = mix(reflColorInv, reflColor, vAudioVal);
    vec3 finalColor = mix(vColor, reflColor, .2);
    
    gl_FragColor = vec4(finalColor, .75);
}