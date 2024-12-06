// src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity"

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`)

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`)

export const HEADER_QUERY = defineQuery(`*[_type == "headerComponent"][0]{logoImage, menuItems, buttonText}`)

export const HOME_PAGE_QUERY = defineQuery(`*[_type == "pages" && slug.current == "home" ][0]{slug, sponsorsSection, availableSportsSection, heroSection}`)

export const PAGE_QUERY =
  defineQuery(`*[_type == "pages" && slug.current == $slug][0]{
  slug, sponsorsSection, availableSportsSection, heroSection
}`)
