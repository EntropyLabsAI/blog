import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script defer src="https://umami-production-fb91.up.railway.app/script.js" data-website-id="d815d931-f0bd-42fe-8895-8469b7c13912"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
