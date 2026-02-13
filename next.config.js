/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
  		// const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
		return ([{
			source: '/(.*)',
			headers: [{
				key: 'X-XSS-Protection',
				value: '1; mode=block'
			},{
				key: 'Referrer-Policy',
				value: 'strict-origin-when-cross-origin'
			},
			{
				key: 'content-security-policy',
				// value: `default-src 'none'; script-src 'self' 'nonce-${nonce}' 'strict-dynamic'; style-src 'self' 'nonce-${nonce}' fonts.googleapis.com 'unsafe-inline'; img-src 'self'; frame-ancestors 'none'; font-src 'self' fonts.gstatic.com fonts.googleapis.com; connect-src 'self'; upgrade-insecure-requests;`
				value: `default-src 'none'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com 'unsafe-inline'; img-src 'self'; frame-ancestors 'none'; font-src 'self' fonts.gstatic.com fonts.googleapis.com; connect-src 'self'; upgrade-insecure-requests;`
			},//{
			// 	key: 'x-nonce',
			// 	value: nonce
			// }
			]
		}])
	},
	poweredByHeader: false
}

module.exports = nextConfig