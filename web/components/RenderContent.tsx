import React from 'react'
import urlBuilder from '@sanity/image-url'
import { sanityClient } from '../client'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ThemeType } from '../utils/theme'
import BlockContent from '@sanity/block-content-to-react'

export const urlFor = (source: any) => urlBuilder(sanityClient).image(source)

type ContentProps = {
  content: any;
}

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`

const HeroImageContainer = styled.div`
  height: 600px;
`

const HeroImage = styled.img`
  width: 100%;
  max-height: 600px;
`

const Card = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  padding: 10px;
  bottom: 0;
  left: 50%;
  margin-left: -410px;
  background-color: ${(p: ThemeType) => p.theme.bg.card};
  width: 800px;
  height: 350px;
  border-radius: 3px;
  box-shadow:0 8px 16px 0 rgba(0,0,0,0.30);
`

const CardTitle = styled.h1`
  color: ${(p: ThemeType) => p.theme.text.primary};
  font-size: 3em;
`

const CardText = styled.p`
  color: ${(p: ThemeType) => p.theme.text.primary};
  font-size: 1.2em;
`

export const HeroAndCard: React.FC<ContentProps> = ({ content }) => {
  const hero = content.filter((c: any) => c.backgroundImage);
  const card = content.filter((c: any) => c._type === 'textSection')
  const cardText = card[0].text;
  // facebook recommended size
  const imageUrl = urlFor(hero[0].backgroundImage).width(1200).height(630).url()
  return (
    <Container>
      <HeroImageContainer>
        {
          imageUrl && (
            <HeroImage src={imageUrl} />
          )
        }
      </HeroImageContainer>
      <Card animate={{ opacity: 1, y: 200 }} transition={{ delay: 0.5 }}>
        <CardTitle>{card[0].heading}</CardTitle>
        {
          cardText && cardText.map((text: any) => (
            <CardText key={text}>{text.children[0].text}</CardText>
          ))
        }
      </Card>
    </Container>
  )
}
