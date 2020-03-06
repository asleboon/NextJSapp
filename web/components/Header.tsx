import React from 'react';
import { Flex, Box, Image } from '@chakra-ui/core';
import { urlFor } from './Hero';
import Link from 'next/link';
import styled from 'styled-components';

const Anchor = styled.a`
    color: #4ba529;
    font-size: 1.2em;
    font-weight: 700;
    text-transform: capitalize;
    margin: 0 10px;
    cursor: pointer;
`;

// TODO: proper types
export type HeaderProps = {
    primaryNavigation: any;
    secondaryNavigation: any;
    logo: any;
};

const Header: React.FC<HeaderProps> = ({ primaryNavigation, secondaryNavigation, logo }) => {
    return (
        <>
            <div style={{ backgroundColor: '#4BA529', width: '100%', height: 15 }} />
            <Flex
                justify="flex-start"
                align="center"
                width="100%"
                height="5vh"
                backgroundColor="white"
            >
                <Flex p={2}>
                    {primaryNavigation &&
                        primaryNavigation.map((nav: any) => (
                            <Link key={nav._id} href={`/${nav.slug.current}`}>
                                <Anchor>{nav.page.title}</Anchor>
                            </Link>
                        ))}
                </Flex>
                <Image
                    style={{ margin: '0 auto' }}
                    width="64px"
                    height="64px"
                    src={urlFor(logo).url() || ''}
                />
                <Flex p={2}>
                    {secondaryNavigation &&
                        secondaryNavigation.map((nav: any) => (
                            <Link key={nav._id} href={`/${nav.slug.current}`}>
                                <Anchor>{nav.page.title}</Anchor>
                            </Link>
                        ))}
                </Flex>
            </Flex>
        </>
    );
};

export default Header;
