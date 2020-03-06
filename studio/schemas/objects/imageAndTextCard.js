export default {
  type: 'object',
  name: 'imageAndTextCard',
  title: 'Image And Text',
  validation: Rule =>
    Rule.custom((fields = {}) => !fields.route || !fields.link || 'Only one link type is allowed'),
  fieldsets: [
    {
      title: 'Image Details',
      name: 'imageDetails'
    },
    {
      title: 'Buttons',
      name: 'buttons'
    }
  ],
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
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      fieldset: 'imageDetails'
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt tag',
      fieldset: 'imageDetails'
    },
    {
      name: 'buttonTextPrimary',
      type: 'string',
      title: 'Primary button text',
      fieldset: 'buttons'
    },
    {
      name: 'externalPrimary',
      type: 'link',
      title: 'External link',
      fieldset: 'buttons'
    },
    {
      name: 'internalPrimary',
      type: 'internalLink',
      title: 'Internal link',
      fieldset: 'buttons'
    },
    {
      name: 'buttonTextSecondary',
      type: 'string',
      title: 'Secondary button text',
      fieldset: 'buttons'
    },
    {
      name: 'externalSecondary',
      type: 'link',
      title: 'External link',
      fieldset: 'buttons'
    },
    {
      name: 'internalSecondary',
      type: 'internalLink',
      title: 'Internal link',
      fieldset: 'buttons'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Image & Text',
        media
      }
    }
  }
}
