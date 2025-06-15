<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c01cbeb (deploy inicial)
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

module.exports = nextConfig;
=======
module.exports = {
=======
>>>>>>> c01cbeb (deploy inicial)
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
<<<<<<< HEAD
}
>>>>>>> 720475b (Primeiro commit - projeto Social Genius IA)
=======
};

module.exports = nextConfig;
>>>>>>> c01cbeb (deploy inicial)
