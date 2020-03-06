export default {
  type: 'object',
  name: 'customCard',
  title: 'Custom Card',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Text'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: `${title}`,
        subtitle: 'Custom Card'
      }
    }
  }
}
