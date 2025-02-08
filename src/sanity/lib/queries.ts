import { defineQuery } from "next-sanity";
export const allproducts = defineQuery(`
    *[_type == "product" ][]{
    _id,
    category,
    name,
    description,
    price,
    discountPercentage,
    rating,
    ratingCount,
    quantity,
    tags,
    sizes,
    "imageUrl" : image.asset->url
    }
    `)

    export const forPro = defineQuery(`
 *[_type == "product"][0..3]{
    _id,
   category,
    name,
    description,
    price,
    discountPercentage,
    rating,
    ratingCount,
    quantity,
    tags,
    sizes,
    "imageUrl" : image.asset->url

 }`
    )
