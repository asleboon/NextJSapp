import React from 'react';
import Link from 'next/link';
import { Flex, Image, Text, Button, Box } from '@chakra-ui/core';
import { urlFor } from './Hero';
import { motion } from 'framer-motion';
import BlockContent from '@sanity/block-content-to-react';
import { serializers } from '../utils/serializer';

type ImageAndTextCardProps = {
    title: string;
    image: any;
    text: any;
    buttonTextPrimary: string;
    buttonTextSecondary: string;
    internalPrimary: any;
    internalSecondary: any;
    alt: string;
    isInColumnContainer: boolean;
};

const ImageAndTextCard: React.FC<ImageAndTextCardProps> = ({
    title,
    image,
    text,
    buttonTextPrimary,
    buttonTextSecondary,
    internalPrimary,
    internalSecondary,
    alt,
    isInColumnContainer,
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Flex
                width="100%"
                h={isInColumnContainer ? [300, 300, 400, 650] : 400}
                maxW="63rem"
                m="1rem"
                direction={isInColumnContainer ? ['row', 'row', 'row', 'column'] : 'row'}
                style={{
                    boxShadow:
                        '0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)',
                }}
            >
                <Image
                    width={isInColumnContainer ? ['50%', '50%', '50%', '100%'] : '50%'}
                    height={isInColumnContainer ? ['auto', 'auto', 'auto', '40%'] : 'auto'}
                    src={
                        urlFor(image)
                            .height(400)
                            .width(400)
                            .url() || ''
                    }
                    alt={alt}
                />
                <Flex
                    width={isInColumnContainer ? ['50%', '50%', '50%', '100%'] : '50%'}
                    height="100%"
                    direction="column"
                    align="center"
                    justify="space-between"
                    p={1}
                >
                    <Text fontSize={['1.5rem', '1.5rem', '1.5rem', '1.5rem']} fontWeight={700}>
                        {title}
                    </Text>
                    <Box>
                        <BlockContent blocks={text} serializers={serializers} />
                    </Box>
                    <Flex width="100%" justify="center">
                        {buttonTextPrimary && internalPrimary && (
                            <Link href={`/${internalPrimary.slug.current}`}>
                                <Button
                                    variantColor="teal"
                                    maxW={isInColumnContainer ? 135 : ''}
                                    m={1}
                                    style={{
                                        display: 'block',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    {buttonTextPrimary}
                                </Button>
                            </Link>
                        )}
                        {buttonTextSecondary && (
                            <Button
                                variant="outline"
                                variantColor="teal"
                                maxW={isInColumnContainer ? 135 : ''}
                                m={1}
                                style={{
                                    display: 'block',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {buttonTextSecondary}
                            </Button>
                        )}
                    </Flex>
                </Flex>
            </Flex>
        </motion.div>
    );
};

export default ImageAndTextCard;
