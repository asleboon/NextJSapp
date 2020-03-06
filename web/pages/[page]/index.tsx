import React from 'react';
import { NextPage } from 'next';
import { pageQuery } from '../../queries/query';
import { renderer } from '../../components/RenderContent';

type ContentProps = {
    content: any;
    title: string;
    openGraphImage: any;
};

type PageProps = {
    page: ContentProps | undefined;
};

const Page: NextPage<PageProps> = ({ page }: PageProps) => {
    if (!page || !page.content) {
        return <div>{`Ingen data for denne siden`}</div>;
    }
    const { content } = page;
    return content && content.map((c: any) => renderer(c));
};

// TODO: add try catch

Page.getInitialProps = async ({ sanityClient, query }) => {
    let slug: string = '';
    if (!query || !query.page) {
        return {};
    }
    slug = `${query.page}`;
    const pageProps = await sanityClient.fetch(pageQuery, { slug });
    return pageProps;
};

export default Page;
