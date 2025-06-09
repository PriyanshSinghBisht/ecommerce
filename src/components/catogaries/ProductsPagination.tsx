import type { ProductResponseType, ProductType } from "../../utlis/types";
import ProductCard from "./ProductCard";
import  { useEffect, useState } from "react";
import PaginationButtons from "./PaginationButtons";

const ProductsPagination = ({ data }: {data : ProductResponseType | undefined}) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalpages = data ? Math.ceil(data.products.length / 9) : 0;

  useEffect(() => {
    const currProducts =
      data?.products.slice((currentPage - 1) * 9, (currentPage - 1) * 9 + 9) || [];
    setProducts(currProducts);
  }, [currentPage, data]);

  useEffect(() => {
    window.scrollTo({ top:0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div>
      <div className="grid mb-4 lg:grid-cols-3 min-[300px]:grid-cols-2 grid-cols-1">
        {products?.map((product: ProductType) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <PaginationButtons
        totalPages={totalpages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductsPagination;
