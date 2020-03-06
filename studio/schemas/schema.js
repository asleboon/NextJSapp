// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'
import column from './documents/column'
import seo from './documents/seo'

// Object types
import cta from './objects/cta'
import figure from './objects/figure'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'

// Landing page sections
import hero from './objects/hero'
import customCard from './objects/customCard'
import imageAndTextCard from './objects/imageAndTextCard'
import product from './documents/product'
import list from './documents/list'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'asleTech',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    page,
    route,
    siteConfig,
    column,
    list,
    customCard,
    cta,
    figure,
    hero,
    internalLink,
    link,
    portableText,
    seo,
    imageAndTextCard,
    product
  ])
})
