import {client} from "@/sanity/lib/client"
const Product = async (slug:string) => {
    console.log('this is slug ' + slug)
    const query = `
*[_type == "products" && slug.current == "black-shirt-with-mountain-planet-design" ]{
  _id,
    price,
    title,
    Description,
    "slug":slug.current,
    "categoryName": category->title,
    "ImageUrl":image.asset->url
} `;
    const products = await client.fetch(query);
    console.log(products)
    return products;
    
  };
  
  export default Product