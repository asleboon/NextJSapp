export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fieldsets: [
    {
      title: 'Metadata',
      name: 'metadata',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      title: 'Price',
      name: 'price',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      title: 'Content',
      name: 'content',
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      fieldset: 'metadata'
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
      fieldset: 'metadata'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      fieldset: 'metadata'
    },
    {
      name: 'openGraphImage',
      title: 'Open Graph Image',
      type: 'image',
      fieldset: 'metadata',
      options: {
        hotspot: true,
        isHighlighted: true
      }
    },
    {
      name: 'name',
      title: 'Product name',
      type: 'string',
      fieldset: 'content'
    },
    {
      name: 'productImages',
      title: 'Product images',
      type: 'array',
      of: [
        {
          type: 'image'
        }
      ],
      validations: Rule =>
        Rule.required()
          .min(1)
          .max(5),
      fieldset: 'content'
    },
    {
      name: 'description',
      title: 'Product description',
      type: 'portableText',
      fieldset: 'content'
    },
    {
      name: 'fullPrice',
      title: 'Full price',
      type: 'number',
      fieldset: 'price'
    },
    {
      name: 'fullPriceDescription',
      title: 'Full price description',
      type: 'string',
      fieldset: 'price'
    },
    {
      name: 'installmentPrice',
      title: 'Installment Price',
      type: 'number',
      fieldset: 'price'
    },
    {
      name: 'installmentPriceDescription',
      title: 'Installment price description',
      type: 'string',
      fieldset: 'price'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage'
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Product',
        media
      }
    }
  }
}
