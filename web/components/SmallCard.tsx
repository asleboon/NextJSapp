import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BlockContent from '@sanity/block-content-to-react';
import { urlFor } from './RenderContent';
import { ThemeType } from '../utils/theme';
import Link from 'next/link';

const SmallCardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 350px;
  width: 240px;
  border-radius: 3px;
  box-shadow:0 8px 16px 0 rgba(0,0,0,0.30);
  margin: 0 25px;
  color: ${(p: ThemeType) => p.theme.text.primary};
  outline: ${(p: ThemeType) => `2px solid ${p.theme.bg.outline}`};
  background-color: ${(p: ThemeType) => p.theme.bg.card};
`;

const SmallCardTitle = styled.div`
  font-weight: 600;
  font-size: 1.2em;
`;

const SmallCardButton = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  border-radius: 3px;
  width: 100%;
  text-align: center;
  color: ${(p: ThemeType) => p.theme.text.primary};
  background-color: ${(p: ThemeType) => p.theme.bg.button};
  :hover{
    background-color: ${(p: ThemeType) => p.theme.bg.button2};
    cursor: pointer;
  }
`;

const SmallCardImage = styled.img`
  max-width: 100%;
  height: 150px;
`;

const TextContentContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px;
  height: 100%;
`;

const variants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: 300,
  },
};

const SmallCard = ({ card }: any) => {
  const { cta, heading, image, label, text } = card;
  const imageUrl = urlFor(image).url();
  return (
    <SmallCardContainer
      variants={variants}
    >
      {imageUrl && <SmallCardImage src={imageUrl} />}
      <TextContentContainer>
        <SmallCardTitle>{heading}</SmallCardTitle>
        <BlockContent blocks={text} />
        {
          cta.route ? (
            <Link href={`/${cta.route.slug.current}`} >
              <SmallCardButton whileTap={{ scale: 0.97 }}>{cta.title}</SmallCardButton>
            </Link>
          ) : (<SmallCardButton whileTap={{ scale: 0.97 }}>{cta.title}</SmallCardButton>)
        }
      </TextContentContainer>
    </SmallCardContainer>
  )
}

export default SmallCard;
;;
