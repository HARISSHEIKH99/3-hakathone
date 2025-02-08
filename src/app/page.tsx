import Hero from "./components/Hero";
import { Delivery } from "./components/Delivery";
import { Product2 } from "./components/product2";
import Signup from "./components/signup";
import ProductCards from "./Products/page";
import SHOP from "./shop/page";
import { Product } from "./components/Product";

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
      <ProductCards/>
      <SHOP/>
    
    </div>
  );
}


