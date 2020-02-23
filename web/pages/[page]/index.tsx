import React from 'react'
import { NextPage } from 'next'
import groq from 'groq'
import { sanityClient } from '../../client'
import { HeroAndCard } from '../../components/RenderContent'
import RenderSmallCards from '../../components/RenderSmallCards'


type PageProps = {
  page: any;
  config: any
}


const Page: NextPage<PageProps> = ({ page, config }) => {
  const { content } = page
  console.log(content)
  const smallCards = content.filter((c: any) => c._type === "imageSection")
  return (
    <>
      <HeroAndCard content={page.content} />
      {

        <RenderSmallCards cards={smallCards} />
      }
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
`

Page.getInitialProps = async ({ asPath }) => {
  let slug: string = ''
  if (asPath) {
    slug = asPath.split('/')[1]
  }
  let result = await sanityClient.fetch(pageQuery, { slug })
  return result
}

export default Page;
