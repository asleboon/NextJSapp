import React from 'react';
import { Box } from '@chakra-ui/core';
import { pageRenderer } from './RenderPageComponent';

type ColumnContainerProps = {
    title: string;
    columnContent: any;
};

const ColumnContainer: React.FC<ColumnContainerProps> = ({ title, columnContent }) => {
    return (
        <Box
            display={['block', 'block', 'block', 'flex']}
            maxWidth="65rem"
            m="auto"
            boxSizing="border-box"
        >
            {columnContent && columnContent.map((c: any) => pageRenderer(c, true))}
        </Box>
    );
};

export default ColumnContainer;
