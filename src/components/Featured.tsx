import React from 'react'

import { client } from '@/sanity/lib/client';
import Image from 'next/image';
const Products = async () => {
    const query = `
      *[_type == "products"][0..4]{
  _id,
    price,
    title,
    "slug":slug.current,
    "categoryName": category->title,
    "ImageUrl":image.asset->url
}

    `;
    const products = await client.fetch(query);
    console.log(products)
    return products;
    
  };
const Featured = async() => {
    const data = await Products();
  return (
    // <div className='flex w-full border-2 bp'>Featured</div>
    <div className="featured-products py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((product:any) => (
          <div key={product._id} className="product-card border border-gray-300 rounded-lg p-4 shadow-lg">
            <img src={product.imageUrl} alt={product.title} className="product-image w-full h-48 object-cover mb-4 rounded" />
            <h3 className="product-title text-lg font-semibold">{product.title}</h3>
            <p className="product-description text-gray-600">{product.description}</p>
            <p className="product-category text-gray-500">Category: {product.categoryName}</p>
            
              <Image
                src={product.categoryImage}
                alt={`${product.categoryName} Image`}
                className="category-image w-16 h-16 object-cover rounded mt-2"
                width={100} height={100}
              />
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Featured