import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import type { ProductType } from "../utlis/types";
import DetailSectionOne from "../components/productDetail/DetailSectionOne";
import DetailSectionTwo from "../components/productDetail/DetailSectionTwo";
import Layout from "../Layout";

const ProducDetails = () => {
  
  const params = useParams();
  const {
    isPending,
    error,
    data: product,
  }: {
    isPending: boolean;
    error: Error | null;
    data: ProductType | undefined;
  } = useQuery({
    queryKey: [`product`, params.id],
    queryFn: async () => {
      const res = await axios.get(
        `https://dummyjson.com/products/${params.id}`
      );
      return res.data;
    },
  });

  if (isPending) return <>Product Loading...</>;

  if (error) {
    return <>Somthing wend wrong {error?.toString()}</>;
  }

  return (
    <Layout>
    <div className="w-full">
      {/* Details Screen  */}
      <div className="w-full max-w-[1240px] mx-auto my-16">

        {/* Section 1  */}
       <DetailSectionOne product={product} />
       <DetailSectionTwo product={product} />
      </div>
    </div>
    </Layout>
  );
};

export default ProducDetails;
