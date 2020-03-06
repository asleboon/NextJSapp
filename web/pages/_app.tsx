import React from 'react';
import BaseApp, { AppContext, AppInitialProps } from 'next/app';
import { sanityClient } from '../client';
import Head from 'next/head';
import { CSSReset, ThemeProvider, ColorModeProvider } from '@chakra-ui/core';
import theme from '../utils/theme';
import { siteConfigQuery } from '../queries/query';
import './../utils/prism.css';
import './../utils/global.css';
import Layout from '../components/Layout';

class App extends BaseApp {
    static async getInitialProps({ Component, ctx }: AppContext): Promise<AppInitialProps> {
        ctx.sanityClient = sanityClient;

        let pageProps: any = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        // Add site config from sanity
        try {
            const config = await sanityClient.fetch(siteConfigQuery);
            if (!config) {
                return { pageProps };
            }
            if (config && pageProps) {
                pageProps.config = config;
            }
            return { pageProps };
        } catch (error) {
            return { pageProps };
        }
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>AsleTech</title>
                </Head>
                <ThemeProvider theme={theme}>
                    <CSSReset />
                    <ColorModeProvider>
                        <Layout config={pageProps.config}>
                            <Component {...pageProps} />
                        </Layout>
                    </ColorModeProvider>
                </ThemeProvider>
            </>
        );
    }
}

export default App;
