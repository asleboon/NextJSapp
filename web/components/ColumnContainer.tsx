import React from 'react';
import { Box } from '@chakra-ui/core';
import { renderer } from './RenderContent';

type ColumnContainerProps = {
    title: string;
    columnContent: any;
};

const ColumnContainer: React.FC<ColumnContainerProps> = ({ title, columnContent }) => {
    // pass in true to renderer to tell that this is a columnContainer

    return (
        <Box
            display={['block', 'block', 'block', 'flex']}
            maxWidth="65rem"
            m="auto"
            boxSizing="border-box"
        >
            {columnContent && columnContent.map((c: any) => renderer(c, true))}
        </Box>
    );
};

export default ColumnContainer;
