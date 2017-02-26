#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
#define TWO_PI 6.28318530718

uniform vec2 u_res;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y) - 
          smoothstep( pct, pct+0.01, st.y);
}

vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.833,0.224);

vec3 hsb2rgb( in vec3 c ){
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                             6.0)-3.0)-1.0, 
                     0.0, 
                     1.0 );
    rgb = rgb*rgb*(3.0-2.0*rgb);
    return c.z * mix(vec3(1.0), rgb, c.y);
}

void main() {
	vec2 st = gl_FragCoord.xy/u_res.xy;
    vec3 color = vec3(0.0);

    vec2 mouse = u_mouse.xy / u_res.xy;
  
    // Each result will return 1.0 (white) or 0.0 (black).
  	// bottom-left

    vec2 bl = smoothstep(vec2(0.1), max(vec2(.1),vec2(mouse.y/2.0)),st); 
    float pct = bl.x * bl.y;

    // top-right 
    vec2 tr = smoothstep(vec2(0.1), max(vec2(.1),vec2(mouse.y/2.0)),1.0 - st);
    pct *= tr.x * tr.y;
    
    color = vec3(pct); 

    gl_FragColor = vec4(color,1.0);
}