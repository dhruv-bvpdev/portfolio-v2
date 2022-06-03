export default {
  name: 'works-thumbnail',
  title: 'Works-Thumbnail',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image'
    },
    {
      name: 'path',
      title: 'Path',
      type: 'reference',
      to: { type: 'works' }
    }
  ]
}
