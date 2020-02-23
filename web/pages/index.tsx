import React from 'react'
import { NextPage } from 'next'
import { HeroAndCard } from '../components/RenderContent'
import RenderSmallCards from '../components/RenderSmallCards'
import BigAssCard from '../components/BigAssCard'

type HomePageProps = {
  config: HomePageConfigProps;
}


type HomePageConfigProps = {
  frontpage: FrontPageProps;
  title: string;
}

type FrontPageProps = {
  content: any;
  description: string;
  openGraphImage: any;
}


//TODO: Should pass content into a renderContent component.

const HomePage: NextPage<HomePageProps> = ({ config }) => {
  const { content } = config.frontpage
  const smallCards = content.filter((c: any) => c._type === "imageSection")
  return (
    <>
      <HeroAndCard content={content} />
      <RenderSmallCards cards={smallCards} />
      <BigAssCard />
    </>
  )
}

export default HomePage
