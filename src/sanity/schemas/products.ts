import { defineType , defineArrayMember , defineField } from "sanity";

export default defineType({
    name:'products',
    title:'Products',
    type:'document',
    fields:[
        defineField({
            name:'title',
            title:'Title',
            type:'string',
            validation: Rule => Rule.required().min(3).max(96)
        }),
        defineField({
            name:'Description',
            title:'Description',
            type:'string',
            validation: Rule => Rule.required().min(3).max(1000)
        }),
        defineField({
            name:'price',
            title:'Price',
            type:'number',
            validation: Rule => Rule.required()
        }),
        defineField({
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'title',
                maxLength:96
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:'image',
            title:'Image',
            type:'image',
            options:{
                hotspot:true
            },
            validation: Rule => Rule.required()
        })
    ]
})