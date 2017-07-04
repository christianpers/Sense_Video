attribute float extra;

uniform float u_time;
uniform float audioVal;
uniform vec3 color;
uniform vec3 noiseOffset;
uniform vec2 u_mouse;
uniform vec2 u_res;

varying vec3 vColor;
varying float v_time;
varying vec3 vPos;
varying float vAudioVal;
varying vec2 v_res;

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


void main() {

	vec2 midPos = u_res / 2.0;

	vec2 invMouse = abs(u_mouse - u_res);

	vec2 mousePos = (invMouse - midPos) / midPos;
	vec2 normalizedMousePos = 600.0 * vec2(mousePos.x, mousePos.y);

	// transform normal to camera space and normalize it
    vec3 n = normalize(normalMatrix * normal);

    vec3 l_dir = vec3(0.0, 2.0, 0.0);
 
    // compute the intensity as the dot product
    // the max prevents negative intensity values
    float intensity = max(dot(n, l_dir), 0.0);
 
    // Compute the color per vertex
    // DataOut.color = intensity * diffuse;
    vColor = intensity * color;

    float noiseData = noise(vec2(audioVal, audioVal));

    float noiseVal = noise(vec2(u_time));

    vec3 pos = position;
    if (distance(pos.xy, normalizedMousePos) < 200.0) {
    	pos.xz += extra * distance(pos.xy, normalizedMousePos);
	}
    
    

    v_time = u_time;
    vPos = pos;
    vAudioVal = audioVal;

    v_res = u_res;
	
	gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );

}