uniform float u_time;
uniform float audioVal;
uniform vec3 color;
uniform vec3 noiseOffset;

varying vec3 vColor;

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
    pos.xyz *= noiseData + .5;
    pos.x -= noiseVal * noiseOffset.x;
    pos.y += noiseVal * noiseOffset.y;
    // pos.z += sin(u_time) * 50.0;
	
	gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );

}