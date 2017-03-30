#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
#define TWO_PI 6.28318530718

uniform vec2 u_res;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D uTexture;

void main() {
	vec2 st = gl_FragCoord.xy/u_res.xy;
    vec2 origSt = st;
    
    vec3 textureColor = texture2D( uTexture, st ).rgb;
    
    gl_FragColor = vec4(textureColor,1.0);
}