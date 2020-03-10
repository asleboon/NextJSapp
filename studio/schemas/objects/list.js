import { FaList } from 'react-icons/fa'

export default {
  name: 'list',
  type: 'object',
  title: 'List',
  icon: FaList,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'listContent',
      type: 'array',
      title: 'List items',
      of: [{ type: 'cta' }, { type: 'customCard' }, { type: 'imageAndTextCard' }],
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
