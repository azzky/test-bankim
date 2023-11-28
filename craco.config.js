const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      "@components": path.resolve(__dirname, 'src/components'),
      "@apis": path.resolve(__dirname, 'src/apis'),
      "@pages": path.resolve(__dirname, 'src/pages'),
      "@utils": path.resolve(__dirname, 'src/utils'),
      "@styles": path.resolve(__dirname, 'src/styles')
    },
  },
};