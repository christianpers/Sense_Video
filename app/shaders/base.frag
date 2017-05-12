uniform vec2 u_res;

uniform sampler2D texture;

varying vec3 pos;


void main() {

	vec3 pos_norm = normalize(pos);

	// float u = 0.5 + atan(pos_norm.z,pos_norm.x)/(2.0*3.14159265);
 //    float v = - 0.5 + asin(pos_norm.y)/3.14159265;

    vec2 coord = vec2(((atan(pos_norm.z, pos_norm.x) + .0001) / 3.14159265 + 1.0) * 0.5, asin(pos_norm.y) / 3.14159265 + 0.5 );

	vec2 st = gl_FragCoord.xy/u_res.xy;

	vec3 textureColor = texture2D( texture, coord ).rgb;

	gl_FragColor = vec4(textureColor, 1.0);

}

