import Hero from "./components/Hero";

import { Product } from "./components/Product";
import { Delivery } from "./components/Delivery";
import { Product2 } from "./components/product2";
import Signup from "./components/signup";
import { sanityFetch } from "@/sanity/lib/fetch";
import ProductCards from "./Products/page";
import SHOP from "./shop/page";

type product = {
  _id : string;
  name : string;
  description : string;
  price : number;
  image : string 
} 

export default function Home() {
  return (
    <div>

      
      <Hero />
      
      <Delivery />
      <Product />
      <Product2 />
      <Signup />
      < ProductCards/>
      <SHOP/>
    
    </div>
  );
}
function importData() {
  throw new Error("Function not implemented.");
}

