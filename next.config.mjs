import million from 'million/compiler';
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  }
}

const millionConfig = {
  auto: true,
  // if you're using RSC:
  // auto: { rsc: true },
}
export default million.next(nextConfig, millionConfig);
