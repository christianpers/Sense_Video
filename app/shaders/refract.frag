uniform sampler2D uTexture;
uniform vec2 u_res;
uniform float u_time;

uniform float refractX;
uniform float refractY;
uniform float refractFreq;


vec4 spline(float x, vec4 c1, vec4 c2, vec4 c3, vec4 c4, vec4 c5, vec4 c6, vec4 c7, vec4 c8, vec4 c9)
{
  float w1, w2, w3, w4, w5, w6, w7, w8, w9;
  w1 = 0.0;
  w2 = 0.0;
  w3 = 0.0;
  w4 = 0.0;
  w5 = 0.0;
  w6 = 0.0;
  w7 = 0.0;
  w8 = 0.0;
  w9 = 0.0;
  float tmp = x * 8.0;
  if (tmp<=1.0) {
    w1 = 1.0 - tmp;
    w2 = tmp;
  }
  else if (tmp<=2.0) {
    tmp = tmp - 1.0;
    w2 = 1.0 - tmp;
    w3 = tmp;
  }
  else if (tmp<=3.0) {
    tmp = tmp - 2.0;
    w3 = 1.0-tmp;
    w4 = tmp;
  }
  else if (tmp<=4.0) {
    tmp = tmp - 3.0;
    w4 = 1.0-tmp;
    w5 = tmp;
  }
  else if (tmp<=5.0) {
    tmp = tmp - 4.0;
    w5 = 1.0-tmp;
    w6 = tmp;
  }
  else if (tmp<=6.0) {
    tmp = tmp - 5.0;
    w6 = 1.0-tmp;
    w7 = tmp;
  }
  else if (tmp<=7.0) {
    tmp = tmp - 6.0;
    w7 = 1.0 - tmp;
    w8 = tmp;
  }
  else 
  {
    //tmp = saturate(tmp - 7.0);
    // http://www.ozone3d.net/blogs/lab/20080709/saturate-function-in-glsl/
    tmp = clamp(tmp - 7.0, 0.0, 1.0);
    w8 = 1.0-tmp;
    w9 = tmp;
  }
  return w1*c1 + w2*c2 + w3*c3 + w4*c4 + w5*c5 + w6*c6 + w7*c7 + w8*c8 + w9*c9;
}


vec2 random2( vec2 p ) {
    return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
}

 
void main() {

	float PixelX = refractX;
	float PixelY = refractY;
	float Freq = refractFreq;

	vec2 st = gl_FragCoord.xy/u_res.xy;

	vec2 uv = st;
	vec3 tc = vec3(1.0, 0.0, 0.0);

	float DeltaX = PixelX / u_res.x;
	float DeltaY = PixelY / u_res.y;
	vec2 ox = vec2(DeltaX,0.0);
	vec2 oy = vec2(0.0,DeltaY);
	vec2 PP = uv - oy;
	vec4 C00 = texture2D(uTexture,PP - ox);
	vec4 C01 = texture2D(uTexture,PP);
	vec4 C02 = texture2D(uTexture,PP + ox);
	PP = uv;
	vec4 C10 = texture2D(uTexture,PP - ox);
	vec4 C11 = texture2D(uTexture,PP);
	vec4 C12 = texture2D(uTexture,PP + ox);
	PP = uv + oy;
	vec4 C20 = texture2D(uTexture,PP - ox);
	vec4 C21 = texture2D(uTexture,PP);
	vec4 C22 = texture2D(uTexture,PP + ox);

	float n = random2(Freq * uv).y;
	n = mod(n, 0.111111)/0.111111;
	vec4 result = spline(n,C00,C01,C02,C10,C11,C12,C20,C21,C22);
	tc = mix(result.rgb, vec3(1.0, 0.0, .8), .1);

	gl_FragColor = vec4(tc, 1.0);

	// gl_FragColor = texture2D(uTexture, st);

}
