import { withGluestackUI } from '@gluestack/ui-next-adapter';
export default withGluestackUI({
  reactStrictMode: true,

  /** Everything that ships un-transpiled RN-style JS must be listed here */
  transpilePackages: [
    '@repo/ui',                       // your workspace package
    '@gluestack-ui',            // every scoped sub-package
    'react-native-web',
    'nativewind',
    'react-native-css-interop'
  ],
});