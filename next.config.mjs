import unpluginIcons from 'unplugin-icons/webpack'
import nextIntl from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.plugins.push(
      unpluginIcons({
        compiler: 'jsx',
        jsx: 'react',
      })
    )
    return config
  },
}

const withNextIntl = nextIntl()

export default withNextIntl(nextConfig)