import { type SchemaTypeDefinition } from 'sanity'
import products from '@/sanity/schemas/products'
import category from '@/sanity/schemas/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,category],
}
