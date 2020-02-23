import React, { useEffect } from 'react'
import SmallCard from './SmallCard'
import styled from 'styled-components'
import { ThemeType } from '../utils/theme'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const CardsContainer = styled.div`
  width: 100%;
  padding-top: 250px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p: ThemeType) => p.theme.bg.primary};
`

const AnimationContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`

// animations

/**
 * All content: animation starts when component is scrolled into view.
 * Add whileHover and whileTap animations.
 * Add different list views for small cards and animate it.
 */

const variants = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07
    }
  },
}

const RenderSmallCards = ({ cards }: any) => {
  console.log('cards', cards)
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  return (
    <CardsContainer>
      <AnimationContainer
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
      >
        {
          cards && cards.map((card: any) => <SmallCard key={card._key} card={card} />)
        }
      </AnimationContainer>
    </CardsContainer>
  )
}

export default RenderSmallCards
