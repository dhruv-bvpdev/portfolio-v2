export default {
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string'
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string'
    },
    {
      name: 'github_link',
      title: 'Github Repo Link',
      type: 'string'
    },
    {
      name: 'platforms',
      title: 'Platforms',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ]
    },
    {
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ]
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    }
  ]
}
