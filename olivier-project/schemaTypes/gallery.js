import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'name',
      type: 'string',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
   
  ],
  preview: {
    select: {
      asset: 'asset',
      altText: 'asset.altText',
      originalFilename: 'asset.originalFilename',
    },
    prepare ({ asset, altText, originalFilename }) {
      return {
        title: altText || originalFilename,
        media: {
          ...asset,
          _type: 'reference',
        },
      };
    },
  },
});