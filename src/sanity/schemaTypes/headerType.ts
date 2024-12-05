import { defineField, defineType} from 'sanity'

export const headerComponent = defineType({
  type: "document",
  name: "headerComponent",
  title: "Header component",
  fields: [
    defineField({
      type: "image",
      name: "logoImage",
      title: "Logo",
      description: "This field changes the logo image of Header component",
    }),
    defineField({
      type: "array",
      name: "menuItems",
      title: "Menu items",
      description:
        "This field changes the name of each item on the menu of the Header component",
      of: [{type: 'string'}],
    }),
    defineField({
      type: "string",
      name: "buttonText",
      title: "Button text",
      description: "This field changes the button text of the Header component",
    }),
  ],
});


