import React from 'react'
import { NextPage } from 'next'
import groq from 'groq'
import { HeroAndCard } from '../../../components/RenderContent'
import RenderSmallCards from '../../../components/RenderSmallCards'

type ContentProps = {
  content: any
  title: string;
  openGraphImage: any
}

type SecondaryPageProps = {
  page: ContentProps;
  config: any
}


const SecondaryPage: NextPage<SecondaryPageProps> = ({ page }) => {
  const { content } = page
  const smallCards = content.filter((c: any) => c._type === "imageSection")
  return (
    <>
      <HeroAndCard content={page.content} />
      <RenderSmallCards cards={smallCards} />
    </>
  )
}

const pageQuery = groq`
*[_type == "route" && slug.current == $slug][0] {
  page-> {
    content[] {
      _type,
      _key,
      backgroundImage,
      heading,
      label,
      text,
      cta {
        route -> {
          slug {
            current
          },
        },
        title
      },
      image,
    },
    title,
    openGraphImage
  }
}
`;

SecondaryPage.getInitialProps = async ({ sanityClient, query }) => {
  let slug: string = '';
  if (query) {
    slug = `${query.page}/${query.secondaryPage}`  // We are on a secondary page
  }
  let result = await sanityClient.fetch(pageQuery, { slug })
  return result
}

export default SecondaryPage;
