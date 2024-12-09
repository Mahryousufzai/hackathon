

import HeroSection from "./components/heroSection"
import RelatedProducts from "./components/relatedProduct"
import BrandSection from "./components/brandSection"
import ShoppingCart from "./components/shoppingCard"

import BrandBuilt from "./components/brandBuilt"
import FeatureFF from "./components/featureSection"
import FeatureSecond from "./components/featureSection2";
import Signup from "./components/singup"
import HeroSec from "./components/herosec";
import View from "./components/viewProduct";
import ProductSingle from "./components/productSingle"
export default function Home() {
  return (
     <>


     <HeroSec/>
     <View/>
     <HeroSection/>
     <RelatedProducts/>
     <BrandSection/>
     <ShoppingCart/>
    
     <BrandBuilt/>
     <FeatureFF/>
     <FeatureSecond/>
     <Signup/>

     <ProductSingle/>
      
     </>
  );
}