import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
// import {categoryType} from './categoryType'
// import {postType} from './postType'
// import {authorType} from './authorType'
import { headerComponent } from './headerType'
import { pages } from './pagesType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, headerComponent, pages],
}
