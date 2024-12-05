import { defineField, defineType} from 'sanity'

export const homePage = defineType({
  type: "document",
  name: "homePage",
  title: "Home page",
  fields: [
    defineField({
      type: "array",
      name: "heroSection",
      title: "Hero Section",
      description: "This field changes the components of the hero section",
      of: [{ type: 'object', name: 'section', fields: [
        {
          name: 'title',
          type: 'string',
        },
       {
        name: 'subTitle',
        type: 'string',
       },
       {
        name: 'paragraph',
        type: 'string',

       },
       {
        name: 'buttonText',
        type: 'string'
       },
       {
        name: 'backgroundImage',
        type: 'image'
       }
      ]}],
    }),
    defineField({
      type: "array",
      name: "sponsorsSection",
      title: "Sponsors section",
      of: [{ type: "image" }],
    }),
    defineField({
      type: "array",
      name: "availableSportsSection",
      title: "Available sports section",
      of: [{ type: "image" }],
    }),
  ],
});


