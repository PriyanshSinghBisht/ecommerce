import React from 'react'
import Product from './Product';
import type { ProductType } from "../utlis/types";
import { motion } from "motion/react";

const Products = ({products }:{products: ProductType[]})  => {
  return (
    <div className="flex md:max-w-[1244px] w-full mx-auto overflow-x-auto snap-x no-scrollbar ">
      <motion.div className="flex  sm:gap-x-2 gap-x-2"
        initial={{ y: 200}}
        whileInView={{y: 0}}
        transition={{ duration: 0.3}}
        viewport={{ once: true}}
      >
        {products.map((product)=>(
          <Product key={product.id} product={product} />
        ))}
        </motion.div>
    </div>
  )
}

export default Products


