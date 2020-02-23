import React from 'react'
import BaseApp, { AppContext, AppInitialProps } from 'next/app'
import { sanityClient } from '../client'
import Head from 'next/head';
import groq from 'groq'
import Providers from '../components/Providers';
import { GlobalStyle } from '../utils/global';

const siteConfigQuery = groq`
  *[_id == "global-config"][0] {
    title,
    frontpage -> {
      content[] {
        _type,
        _key,
        backgroundImage,
        heading,
        label,
        text,
        cta {
      		route -> {
        		slug {
        			current
      			},
      		},
        	title
      	},
        image,
      },
    	description,
      openGraphImage,
    }
  }
`

class App extends BaseApp {
  static async getInitialProps({ Component, ctx }: AppContext): Promise<AppInitialProps> {
    ctx.sanityClient = sanityClient;
    let pageProps: any = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Add site config from sanity
    return sanityClient.fetch(siteConfigQuery).then((config: any) => {
      if (!config) {
        return { pageProps }
      }
      if (config && pageProps) {
        pageProps.config = config
      }

      return { pageProps }
    })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Lyse</title>
        </Head>
        <GlobalStyle />
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </>
    )
  }
}

export default App
