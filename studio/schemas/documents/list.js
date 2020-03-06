import { FaList } from 'react-icons/fa'

export default {
  name: 'list',
  type: 'document',
  title: 'List',
  icon: FaList,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Column Section',
      of: [{ type: 'cta' }, { type: 'customCard' }, { type: 'imageAndTextCard' }],
      validation: Rule => Rule.required().min(2)
    }
  ],

  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Column Card'
      }
    }
  }
}
