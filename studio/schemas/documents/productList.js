import { FaList } from 'react-icons/fa'

export default {
  name: 'productList',
  type: 'document',
  title: 'Product list',
  icon: FaList,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'products',
      type: 'array',
      title: 'Products',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      validation: Rule => Rule.required()
    }
  ],

  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'List',
        icon: FaList
      }
    }
  }
}
