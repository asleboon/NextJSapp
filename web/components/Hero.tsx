import { Flex, Heading, Image, Text, Box } from '@chakra-ui/core';
import urlBuilder from '@sanity/image-url';
import { sanityClient } from '../client';
import { DarkModeSwitch } from './DarkModeSwitch';
export const urlFor = (source: any) => urlBuilder(sanityClient).image(source);

type HeroProps = {
    backgroundImage: any;
};

export const Hero: React.FC<HeroProps> = ({ backgroundImage }: any) => (
    <Flex
        position="relative"
        width="100%"
        justifyContent="center"
        alignItems="center"
        height="50vh"
        backgroundImage={urlFor(backgroundImage).url() || ''}
        direction={['column', 'column', 'column', 'row']}
    >
        <Image
            width="100%"
            height="100%"
            src={
                urlFor(backgroundImage)
                    .width(1200)
                    .height(480)
                    .url() || ''
            }
        />
    </Flex>
);
