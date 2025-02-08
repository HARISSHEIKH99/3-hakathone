"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/quries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const SHOP = () => {
    const [product, setProduct] = useState<Product[]>([])

    useEffect(() =>{
        async function fetchproduct(){
            const fetchedProduct : Product[] = await client.fetch(allProducts)
            setProduct(fetchedProduct)
        }
        fetchproduct()
    },[])

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">

            <h1 className="text-black text-2xl font-bold mb-6 text-center">our latest Collections</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
   {product.map((product) => (
    <div key={product._id}
     className="text-black border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
      <Link href={`/product/${product.slug.current}`}>
        {product.image && (
            <Image
            src={urlFor(product.image).url()}
            alt="image"
            width={200}
            height={200}
            className="w-full flex h-48 object-cover rounded-md"
          />
        
            
        )}
        <h1 className="text-lg font-semibold mt-4"></h1>
        {product.name}
        <p className="text-gray-500 mt-2">
        ${product.price}</p>
        </Link>
        </div>
       
    
   ))}
   </div>


        </div>
    )
}
export default SHOP