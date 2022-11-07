import React from 'react'
import {products} from "../data/product.js";
import Layout from '../components/UI/Layout';
import ProductCard from '../components/ProductCard';

export default function Store() {
    console.log(products);
  return (
    <Layout>
        <p className="mt-16 mb-16 text-center font-semibold text-6xl" >Shop Now</p>
    <div className="flex flex-wrap mt-10 mb-10 justify-center">
        {products.map((card)=>{
            return (<ProductCard card={card} />)
        })}
    </div>
    </Layout>
  )
}
