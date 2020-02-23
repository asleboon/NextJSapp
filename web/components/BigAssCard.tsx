import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { ThemeType } from '../utils/theme';

const CardContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  background-color: ${(p: ThemeType) => p.theme.bg.primary};
  color: ${(p: ThemeType) => p.theme.text.primary};
`

const BigCard = styled(motion.div)`
  width: 825px;
  height: 300px;
  background-color: ${(p: ThemeType) => p.theme.bg.card};
  border-radius: 3px;
  box-shadow:0 8px 16px 0 rgba(0,0,0,0.30);
  padding: 10px;
`

const variants = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07
    }
  },
}

const variants2 = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: 300,
  },
}


const BigAssCard = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <CardContainer ref={ref} initial="hidden" variants={variants} animate={controls}>
      <BigCard variants={variants2}>
        <h1>Title</h1>
        <p>Dette innholdet kommer ikke fra Sanity</p>
      </BigCard>
    </CardContainer>
  )
}

export default BigAssCard
