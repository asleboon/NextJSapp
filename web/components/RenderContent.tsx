import React from 'react';
import { Hero } from './Hero';
import { CTA } from './CTA';
import CustomCard from './CustomCard';
import ColumnContainer from './ColumnContainer';
import ImageAndTextCard from './ImageAndTextCard';
import { motion } from 'framer-motion';

type RenderContentProps = {
    content: any;
};

export const renderer = (stuff: any, isInColumnContainer = false) => {
    switch (stuff._type) {
        case 'hero':
            return <Hero key={stuff._key} backgroundImage={stuff.backgroundImage} />;
        case 'cta':
            return (
                <CTA key={stuff._key} title={stuff.title} url={stuff.route.slug.current || ''} />
            );
        case 'customCard':
            return <CustomCard key={stuff._key} title={stuff.title} text={stuff.text} />;
        case 'columnContainer':
            return (
                <ColumnContainer
                    key={stuff._key}
                    columnContent={stuff.columnContent}
                    title={stuff.title}
                />
            );
        case 'imageAndTextCard':
            return (
                <ImageAndTextCard
                    key={stuff._key}
                    title={stuff.title}
                    image={stuff.image}
                    alt={stuff.image}
                    text={stuff.text}
                    buttonTextPrimary={stuff.buttonTextPrimary}
                    buttonTextSecondary={stuff.buttonTextSecondary}
                    internalPrimary={stuff.internalPrimary}
                    internalSecondary={stuff.internalSecondary}
                    isInColumnContainer={isInColumnContainer}
                />
            );
        default:
            return null;
    }
};

const RenderContent: React.FC<RenderContentProps> = ({ content }) => {
    return (
        <motion.div style={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {content && content.map((c: any) => renderer(c))}
        </motion.div>
    );
};

export default RenderContent;
