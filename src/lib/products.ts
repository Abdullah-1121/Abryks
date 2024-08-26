import {client} from "@/sanity/lib/client"
const Products = async () => {
    const query = `
   *[_type == "products"] | order(_createdAt desc)[0...8]{
  _id,
  price,
  title,
  Description,
  "slug": slug.current,
  "categoryName": category->title,
  "ImageUrl": image.asset->url
}

    `;
    const products = await client.fetch(query);
    console.log(products)
    return products;
    
  };
  
  export default Products
  



  // *[_type == "products"][0...9]{
  //   _id,
  //     price,
  //     title,
  //     Description,
  //     "slug":slug.current,
  //     "categoryName": category->title,
  //     "ImageUrl":image.asset->url
  // }