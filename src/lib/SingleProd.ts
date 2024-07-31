import {client} from "@/sanity/lib/client"
async function getData(slug:string){
  const query = `*[_type == "products" && slug.current == "${slug}"][0] {
_id,
  price,
  title,
  Description,
  "slug":slug.current,
  "categoryName": category->title,
  "ImageUrl":image.asset->url
}  `;
const data = await client.fetch(query);
return data
}
export default getData