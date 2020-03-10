import React from 'react';
import { Hero } from './Hero';
import { CTA } from './CTA';
import CustomCard from './CustomCard';
import ColumnContainer from './ColumnContainer';
import ImageAndTextCard from './ImageAndTextCard';
import { motion } from 'framer-motion';
import { listRenderer } from './RenderListComponent';

type RenderContentProps = {
    content: any;
};

export const pageRenderer = (content: any, isInColumnContainer = false) => {
    console.log(content);
    switch (content._type) {
        case 'hero':
            return <Hero key={content._key} backgroundImage={content.backgroundImage} />;
        case 'cta':
            return (
                <CTA
                    key={content._key}
                    title={content.title}
                    url={content.route.slug.current || ''}
                />
            );
        case 'customCard':
            return <CustomCard key={content._key} title={content.title} text={content.text} />;
        case 'columnContainer':
            return (
                <ColumnContainer
                    key={content._key}
                    columnContent={content.columnContent}
                    title={content.title}
                />
            );
        case 'imageAndTextCard':
            return (
                <ImageAndTextCard
                    key={content._key}
                    title={content.title}
                    image={content.image}
                    alt={content.image}
                    text={content.text}
                    buttonTextPrimary={content.buttonTextPrimary}
                    buttonTextSecondary={content.buttonTextSecondary}
                    internalPrimary={content.internalPrimary}
                    internalSecondary={content.internalSecondary}
                    isInColumnContainer={isInColumnContainer}
                />
            );
        case 'list':
            console.log('asdfasdfs', content);
            return content.listContent.map((c: any) => listRenderer(c));
        default:
            return null;
    }
};

const RenderContent: React.FC<RenderContentProps> = ({ content }) => {
    return (
        <motion.div style={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {content && content.map((c: any) => pageRenderer(c))}
        </motion.div>
    );
};

export default RenderContent;
