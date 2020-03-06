import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { Flex, Text } from '@chakra-ui/core';
import { serializers } from './../utils/serializer';

type CustomCardProps = {
    title: string;
    text: any;
};

const CustomCard: React.FC<CustomCardProps> = ({ title, text }) => {
    return (
        <Flex width="100%" justify="center" align="center" direction="column">
            <Flex
                align="center"
                justify="center"
                width="100%"
                h={400}
                maxW="63rem"
                m="1rem"
                direction="column"
                style={{
                    boxShadow:
                        '0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)',
                }}
            >
                <Text fontSize={25} fontWeight={700}>
                    {title}
                </Text>
                <BlockContent blocks={text} serializers={serializers} />
            </Flex>
        </Flex>
    );
};

export default CustomCard;
