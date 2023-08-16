import { Html, Head, Main, NextScript } from 'next/document'
// import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>AI Tool - Tailwind CSS Template for AI Tools</title>
      <link rel="icon" href="favicon.ico"/>
      <link href="style.css" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
