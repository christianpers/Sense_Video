#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
#define TWO_PI 6.28318530718

// #define dirt_purple vec3(240.0/255.0, 125.0/255.0, 192.0/255.0);
// #define deep_blue_sea vec3(161.0/255.0, 214.0/255.0, 252.0/255.0);

uniform vec2 u_res;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D uTexture;
uniform float audio_deep;
uniform float audio_high;

// 2D Random
float random (in vec2 st) { 
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}

// 2D Noise based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners porcentages
    return mix(a, b, u.x) + 
            (c - a)* u.y * (1.0 - u.x) + 
            (d - b) * u.x * u.y;
}

vec2 rotate2D (vec2 _st, float _angle) {
    _st -= 0.5;
    _st =  mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle)) * _st;
    _st += 0.5;
    return _st;
}

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

float circle(in vec2 _st, in float _radius, float _radiusBlur){
    vec2 dist = _st-vec2(0.5);
  return 1.-smoothstep(_radius-(_radius*_radiusBlur),
                         _radius+(_radius*_radiusBlur),
                         dot(dist,dist)*4.0);
}

float box(in vec2 _st){

  vec2 bl = smoothstep(vec2(0.0), vec2(.0),_st);       // bottom-left
  vec2 tr = smoothstep(vec2(0.0), vec2(.0),1.0-_st);   // top-right
  // color = vec3(bl.x * bl.y * tr.x * tr.y);
  return bl.x * bl.y * tr.x * tr.y;
}

// YUV to RGB matrix
mat3 yuv2rgb = mat3(1.0, 0.0, 1.13983, 
                    1.0, -0.39465, -0.58060, 
                    1.0, 2.03211, 0.0);

// RGB to YUV matrix
mat3 rgb2yuv = mat3(0.2126, 0.7152, 0.0722,
                    -0.09991, -0.33609, 0.43600, 
                    0.615, -0.5586, -0.05639);

mat2 scale(vec2 _scale){
    return mat2(_scale.x,0.0,
                0.0,_scale.y);
}

void main() {
	  vec2 st = gl_FragCoord.xy/u_res.xy;
    vec2 origSt = st;
    
    vec2 mouse = u_mouse.xy / u_res.xy;

    vec3 textureColor = texture2D( uTexture, st ).rgb;

    vec2 pos = vec2(st * abs(sin(u_time / 10.0)) * 10.0);

    // Use the noise function
    float n = noise(pos);

    st *= vec2(1.0, floor(u_res.y/2.0));

    vec2 fractSt = fract(st);

    vec2 intSt = floor(st);

    float lineStep = step(1.0,mod(st.y,2.0));

    lineStep *= -.1 + audio_high * .04;
    // lineStep *= .01;


    // fractSt.x += lineStep;

    // origSt -= vec2(0.5);
    // origSt = scale( vec2(n/.5)) * origSt;
    // origSt += vec2(0.5);

    // vec3 color = vec3(circle(fractSt,0.1, .05));
    vec3 color = vec3(box(fractSt));

    vec2 rotatedOrigSt = rotate2D(origSt, 0.0 * PI);

    vec3 textureColorStep = texture2D( uTexture, vec2(rotatedOrigSt.x += lineStep , rotatedOrigSt.y)).rgb;
    //vec3 textureColorStep = texture2D( uTexture, vec2(rotatedOrigSt.x , rotatedOrigSt.y)).rgb;
    vec3 textureColorFucked = texture2D( uTexture, origSt).rgb;

    
    // color = textureColor;
    // vec3 fractTextureColor = texture2D( uTexture, fractSt ).rgb;

    // vec3 finalTextureColor = mix(fractTextureColor, textureColor, vec3(abs(cos(u_time * PI / 10.0))));

    // color *= mix(color, finalTextureColor, vec3(n));

    // color = textureColor;
    color = mix(textureColor, textureColorStep, vec3(audio_high/8.0, audio_high/8.0, audio_high/8.0) );
    // color *= mix(textureColorFucked, textureColor, vec3(n));

    
    gl_FragColor = vec4(color,1.0);
}