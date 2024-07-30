import {client} from "@/sanity/lib/client"
const Products = async () => {
    const query = `
      *[_type == "products"][0...6]{
  _id,
    price,
    title,
    Description,
    "slug":slug.current,
    "categoryName": category->title,
    "ImageUrl":image.asset->url
}

    `;
    const products = await client.fetch(query);
    console.log(products)
    return products;
    
  };
  
  export default Products