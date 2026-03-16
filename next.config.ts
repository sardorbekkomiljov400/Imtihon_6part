import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* boshqa sozlamalar bo'lsa shu yerda qoladi */
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);