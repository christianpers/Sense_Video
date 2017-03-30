#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
#define TWO_PI 6.28318530718

uniform vec2 u_res;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D uTexture;
uniform sampler2D uTwitterTexture;
uniform float audio_deep;
uniform float audio_high;
uniform vec2 grid;

uniform float boxOneTexture;
uniform float boxOneScale;
uniform float boxOneRotDegree;
uniform float boxOneCoeff;

uniform float boxTwoTexture;
uniform float boxTwoScale;
uniform float boxTwoRotDegree;
uniform float boxTwoCoeff;

uniform float boxThreeTexture;
uniform float boxThreeScale;
uniform float boxThreeRotDegree;
uniform float boxThreeCoeff;

uniform float boxFourTexture;
uniform float boxFourScale;
uniform float boxFourRotDegree;
uniform float boxFourCoeff;

uniform float boxFiveTexture;
uniform float boxFiveScale;
uniform float boxFiveRotDegree;
uniform float boxFiveCoeff;

uniform float boxSixTexture;
uniform float boxSixScale;
uniform float boxSixRotDegree;
uniform float boxSixCoeff;

uniform float boxSevenTexture;
uniform float boxSevenScale;
uniform float boxSevenRotDegree;
uniform float boxSevenCoeff;

uniform float boxEightTexture;
uniform float boxEightScale;
uniform float boxEightRotDegree;
uniform float boxEightCoeff;

uniform float boxNineTexture;
uniform float boxNineScale;
uniform float boxNineRotDegree;
uniform float boxNineCoeff;


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
    // mouse.y -= 1.0;

    vec3 textureColor = texture2D( uTexture, st ).rgb;

    st *= grid;

    vec2 fractSt = fract(st);

    vec2 intSt = floor(st);

    if (intSt.x == 0.0 && intSt.y == 0.0) {
        fractSt = rotate2D(fractSt, boxOneRotDegree * PI);
    }

    if (intSt.x == 0.0 && intSt.y == 1.0) {
        fractSt = rotate2D(fractSt, boxTwoRotDegree * PI);
    }

    if (intSt.x == 0.0 && intSt.y == 2.0) {
        fractSt = rotate2D(fractSt, boxThreeRotDegree * PI);
    }


    if (intSt.x == 1.0 && intSt.y == 0.0) {
        fractSt = rotate2D(fractSt, boxFourRotDegree * PI);
    }

    if (intSt.x == 1.0 && intSt.y == 1.0) {
        fractSt = rotate2D(fractSt, boxFiveRotDegree * PI);
    }

    if (intSt.x == 1.0 && intSt.y == 2.0) {
        fractSt = rotate2D(fractSt, boxSixRotDegree * PI);
    }


    if (intSt.x == 2.0 && intSt.y == 0.0) {
        fractSt = rotate2D(fractSt, boxSevenRotDegree * PI);
    }

    if (intSt.x == 2.0 && intSt.y == 1.0) {
        fractSt = rotate2D(fractSt, boxEightRotDegree * PI);
    }

    if (intSt.x == 2.0 && intSt.y == 2.0) {
        fractSt = rotate2D(fractSt, boxNineRotDegree * PI);
    }

    textureColor = texture2D( uTexture,fractSt ).rgb;
    

    // st.x *= u_res.x/u_res.y;

    // vec3 color = vec3(0.0);

    // // Cell positions
    // vec2 point[5];
    // point[0] = vec2(0.83,0.75);
    // point[1] = vec2(0.60 + abs(cos(u_time *PI)/10.0),0.07 + abs(sin(u_time *PI)/.8));
    // point[2] = vec2(0.28 + sin(u_time *PI)/2.0,0.64 + cos(u_time *PI/3.0));
    // point[3] =  vec2(0.31 + sin(u_time *PI)/1.5,0.26 + sin(u_time *PI/.5));
    // point[4] = vec2(abs(sin(u_time *PI)/1.0), abs(sin(u_time *PI)/1.0));
    
    // float m_dist = 1.0;  // minimun distance

    // // Iterate through the points positions
    // for (int i = 0; i < 5; i++) {
    //     float dist = distance(st, point[i]);
        
    //     // Keep the closer distance
    //     m_dist = min(m_dist, dist);
    // }
    
    // // Draw the min distance (distance field)
    // color += m_dist;

    // color += textureColor;

    // color *= hsb2rgb(vec3(1.0, .5, max(.7, audio_high)));

    
    vec3 color = textureColor;

    
    gl_FragColor = vec4(color,1.0);
}