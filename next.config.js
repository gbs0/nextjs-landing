module.exports = {
  async rewrites() {
    return [
      {
        source: '/home/:index',
        destination: '/home/index.html', // The :path parameter isn't used here so will be automatically passed in the query
      },
      {
        source: '/releases/:index',
        destination: '/releases/index.html',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home/index.html',
        permanent: true
      },
      {
        source: '/contact',
        destination: '/contact/index.html',
        permanent: true
      },
      {
        source: '/releases',
        destination: '/releases/index.html',
        permanent: true
      },
      {
        source: '/projects',
        destination: '/projects/index.html',
        permanent: true
      },
    ]
  }
}