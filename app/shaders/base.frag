uniform vec2 u_res;

uniform sampler2D texture_one;
uniform sampler2D texture_two;
uniform sampler2D texture_three;

uniform float u_time;

varying vec3 pos;

vec2 random2( vec2 p ) {
    return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
}


void main() {

	vec3 pos_norm = normalize(pos);

	// float s = .2;
	// float t = .2;
	// float r = 2000.0;

	// float x = r * cos(s) * sin(t);
	// float y = r * sin(s) * sin(t);
	// float z = r * cos(t);


	vec3 targetPoints[4];

	targetPoints[0] = vec3(10.0, 100.0, 200.0);
	targetPoints[1] = vec3(100.0, 1000.0, 10.0);
	targetPoints[2] = vec3(1.0, 10.0, 1000.0);
	targetPoints[3] = vec3(100.0, 300.0, 400.0);


	// vec3 testPoint = vec3(10.0, 10.0, 200.0);

	// vec3 testPointNorm = normalize(testPoint);

	// vec3 point = vec3(x, y, z);

    vec2 coord = vec2(((atan(pos_norm.z, pos_norm.x) + .0001) / 3.14159265 + 1.0) * 0.5, asin(pos_norm.y) / 3.14159265 + 0.5 );

    // Scale 
    vec2 scaledCoord = coord * 20.0;

    vec3 voronoiOne = vec3(.0);
    vec3 voronoiTwo = vec3(.0);


    vec2 i_st = floor(scaledCoord);
    vec2 f_st = fract(scaledCoord);

    // vec2 point = random2(i_st);
    // vec3 spherePoint = vec3(point, 2000.0);
    // vec3 normSpherePoint = normalize(spherePoint);
    // vec2 sphereCoord = vec2(((atan(normSpherePoint.z, normSpherePoint.x) + .0001) / 3.14159265 + 1.0) * 0.5, asin(normSpherePoint.y) / 3.14159265 + 0.5 );


    float m_dist = 5.;  // minimun distance
    vec2 m_point;        // minimum point
    
    for (int j=-1; j<=1; j++ ) {
        for (int i=-1; i<=1; i++ ) {
            vec2 neighbor = vec2(float(i),float(j));
            vec2 point = random2(i_st + neighbor);
            // vec3 spherePoint = vec3(point, 200.0);
            point = 0.5 + 0.5*sin((u_time * 3.0) + 6.2831*point);
            vec2 diff = neighbor + point - f_st;
            float dist = length(diff);

            if( dist < m_dist ) {
                m_dist = dist;
                m_point = point;
            }
        }
    }

    for (int j=-1; j<=1; j++ ) {
        for (int i=-1; i<=1; i++ ) {
            vec2 neighbor = vec2(float(i),float(j));
            vec2 point = random2(i_st * 1.05 + neighbor);
            // vec3 spherePoint = vec3(point, 200.0);
            point = 0.5 + 0.5*sin((u_time * 3.0) + 6.2831*point);
            vec2 diff = neighbor + point - f_st;
            float dist = length(diff);

            if( dist < m_dist ) {
                m_dist = dist;
                m_point = point;
            }
        }
    }

    // Assign a color using the closest point position
    voronoiOne += dot(m_point, vec2(.0, 4.0));
    voronoiTwo += dot(m_point, vec2(.0, 4.0));


    // float m_dist = 1.;  // minimun distance

    // Iterate through the points positions
    // for (int i = 0; i < 4; i++) {

    // 	vec3 targetPointNorm = normalize(targetPoints[i]);

    // 	vec2 spherePoint = vec2(((atan(targetPointNorm.z, targetPointNorm.x) + .0001) / 3.14159265 + 1.0) * 0.5, asin(targetPointNorm.y) / 3.14159265 + 0.5 );

    // 	float dist = distance(coord, spherePoint);
    
    // 	m_dist = min(m_dist, dist);
    // }

    // vec3 color = vec3(.0);

    // color += m_dist;

	vec4 textureColorOne = texture2D( texture_one, coord ).rgba;
	vec4 textureColorTwo = texture2D( texture_two, coord ).rgba;
	vec4 textureColorThree = texture2D( texture_three, coord ).rgba;

	// vec3 invertedColor = vec3(1.0 - color.r, 1.0 - color.g, 1.0 - color.b);

	vec4 finalColorOne = mix(vec4(textureColorOne.rgb/2.0, 1.0), vec4(textureColorTwo.rgb/2.0, 1.0), clamp(1.0 - voronoiOne.r, 0.0, 1.0));
	vec4 finalColorTwo = mix(vec4(textureColorOne.rgb/2.0, 1.0), vec4(textureColorThree.rgb, 1.0), clamp(1.0 - voronoiTwo.r, 0.0, 1.0));

	gl_FragColor = finalColorTwo + finalColorOne;
	// gl_FragColor = vec4(voronoiTwo + voronoiOne, 1.0);

	// gl_FragColor = vec4(1.0 - color.r , 1.0 - color.g, 1.0 - color.b, 1.0);

}

