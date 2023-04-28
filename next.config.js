/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js','.jsx','.ts','.tsx']
      }
    }
  }
}

module.exports = nextConfig
