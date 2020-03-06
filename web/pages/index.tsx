import React from 'react';
import { NextPage } from 'next';
import { withTheme } from 'emotion-theming';

import RenderContent from '../components/RenderContent';
import Layout from '../components/Layout';

type HomePageProps = {
    config: HomePageConfigProps;
};

type HomePageConfigProps = {
    frontPage: FrontPageProps;
    title: string;
};

type FrontPageProps = {
    content: any;
    description: string;
    openGraphImage: any;
};

const HomePage: NextPage<HomePageProps> = ({ config }) => {
    if (!config || !config.frontPage) {
        return <div>Ingen data for</div>;
    }
    const { content } = config.frontPage;
    return (
        <>
            <RenderContent content={content} />
        </>
    );
};

export default withTheme(HomePage);
