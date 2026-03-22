import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const nextConfig = {
  turbopack: {
    root: path.resolve(__dirname), // absolute path
  },
};

export default createNextIntlPlugin()(nextConfig);