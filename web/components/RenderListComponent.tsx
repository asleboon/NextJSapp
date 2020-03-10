import React from 'react';
import { Hero } from './Hero';
import { CTA } from './CTA';
import CustomCard from './CustomCard';
import ColumnContainer from './ColumnContainer';
import ImageAndTextCard from './ImageAndTextCard';
import { motion } from 'framer-motion';

type RenderContentProps = {
    listContent: any;
};

export const listRenderer = (listContent: any, isInColumnContainer = false) => {
    console.log(listContent);
    switch (listContent._type) {
        case 'hero':
            return <Hero key={listContent._key} backgroundImage={listContent.backgroundImage} />;
        case 'cta':
            return (
                <CTA
                    key={listContent._key}
                    title={listContent.title}
                    url={listContent.route.slug.current || ''}
                />
            );
        case 'customCard':
            return (
                <CustomCard
                    key={listContent._key}
                    title={listContent.title}
                    text={listContent.text}
                />
            );
        case 'columnContainer':
            return (
                <ColumnContainer
                    key={listContent._key}
                    columnContent={listContent.columnContent}
                    title={listContent.title}
                />
            );
        case 'imageAndTextCard':
            return (
                <ImageAndTextCard
                    key={listContent._key}
                    title={listContent.title}
                    image={listContent.image}
                    alt={listContent.image}
                    text={listContent.text}
                    buttonTextPrimary={listContent.buttonTextPrimary}
                    buttonTextSecondary={listContent.buttonTextSecondary}
                    internalPrimary={listContent.internalPrimary}
                    internalSecondary={listContent.internalSecondary}
                    isInColumnContainer={isInColumnContainer}
                />
            );
        default:
            return null;
    }
};

const RenderList: React.FC<RenderContentProps> = ({ listContent }) => {
    return (
        <motion.div style={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {listContent && listContent.map((c: any) => listRenderer(c))}
        </motion.div>
    );
};

export default RenderList;
