import React from 'react';
import { NextPage } from 'next';
import { pageQuery } from '../../../queries/query';
import { pageRenderer } from '../../../components/RenderPageComponent';

type ContentProps = {
    content: any;
    title: string;
    openGraphImage: any;
};

type SecondaryPageProps = {
    page: ContentProps;
    config: any;
};

const SecondaryPage: NextPage<SecondaryPageProps> = ({ page }: SecondaryPageProps) => {
    if (!page || !page.content) {
        return <div>Ingen data for</div>;
    }
    const { content } = page;
    return content && content.map((c: any) => pageRenderer(c));
};

SecondaryPage.getInitialProps = async ({ sanityClient, query }: any) => {
    let slug: string = '';
    if (!query) {
        console.error('no query');
        return;
    }
    slug = `${query.page}/${query.secondaryPage}`;
    return await sanityClient.fetch(pageQuery, { slug });
};

export default SecondaryPage;
