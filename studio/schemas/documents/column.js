import { MdViewColumn } from 'react-icons/md'

export default {
  name: 'column',
  type: 'document',
  title: 'Column',
  icon: MdViewColumn,
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
      validation: Rule =>
        Rule.required()
          .min(2)
          .max(3)
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
