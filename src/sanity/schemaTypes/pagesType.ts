import { defineField, defineType } from "sanity";

export const pages = defineType({
  type: "document",
  name: "pages",
  title: "Pages",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Page name",
      description: "This field is the page reference name",
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "slug",
      description: "This field is the slug reference name to the route page",
      options: {source: 'name'},
    }),
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


