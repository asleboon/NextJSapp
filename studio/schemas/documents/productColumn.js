import { MdViewColumn } from 'react-icons/md'

export default {
  name: 'productColumn',
  type: 'document',
  title: 'Product column',
  icon: MdViewColumn,
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
        subtitle: 'List'
      }
    }
  }
}
