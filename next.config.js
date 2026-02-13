/** @type {import('next').NextConfig} */
const nextConfig = {
	// async headers() {
	// 	return [{
	// 		source: '/(.*)',
	// 		headers: [{
	// 			key: 'Content-Security-Policy',
	// 			value: 'default-src \'none\'; script-src \'self\'; style-src \'self\' fonts.googleapis.com \'unsafe-inline\'; img-src \'self\'; frame-ancestors \'none\'; font-src \'self\' fonts.gstatic.com fonts.googleapis.com; connect-src \'self\'; upgrade-insecure-requests;'
	// 		}]
	// 	}]
	// },
	poweredByHeader: false
}

module.exports = nextConfig