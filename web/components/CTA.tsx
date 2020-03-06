import Link from 'next/link';
import { Flex, Box, Text } from '@chakra-ui/core';

type CTAProps = {
    title: string;
    url: string;
};

export const CTA: React.FC<CTAProps> = ({ title, url }) => {
    return (
        <Flex width="100%" align="center" justify="center" style={{ cursor: 'pointer' }}>
            <Flex
                align="center"
                justify="center"
                width="100%"
                maxW="63rem"
                h={85}
                m="1rem"
                style={{
                    boxShadow:
                        '0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)',
                }}
            >
                <Link href={`/${url}`}>
                    <Text fontSize={25} fontWeight={600}>
                        {title}
                    </Text>
                </Link>
            </Flex>
        </Flex>
    );
};
