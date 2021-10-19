import Document, { Html, Head, Main, NextScript } from 'next/document'
import Title from 'next/head'
import { ColorModeScript } from "@chakra-ui/react"
import theme from '../styles/index'
import React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="shortcut icon" href="/assets/images/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet" />

          <Title>Fitness Landing</Title>
        </Head>
        <body>
         <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
