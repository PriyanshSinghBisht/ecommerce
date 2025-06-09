import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { ProductResponseType } from "../utlis/types";
import Filter from "../components/catogaries/Filter";
import ProductsPagination from "../components/catogaries/ProductsPagination";
import { IoFilter } from "react-icons/io5";
import { useEffect, useState } from "react";
import Layout from "../Layout";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CategoryLoadingState from "../components/state/loading/CategoryLoadingState";

const Category = () => {
  const params = useParams();
  const [showFilteronSmallScreen, setShowFilteronSmallScreen] = useState(false);
  const hideFilteronSmallScreen = () => setShowFilteronSmallScreen(false);
  const {
    isPending,
    error,
    data: product,
  }: {
    isPending: boolean;
    error: Error | null;
    data: ProductResponseType | undefined;
  } = useQuery({
    queryKey: [`product`, params.category],
    queryFn: async () => {
      const res = await axios.get(
        `https://dummyjson.com/products/category/${params.category}`
      );
      return res.data;
    },
  });
  const [value, setValue] = useState<number[]>([10, 1000]);
  const handleValueChange = (_: Event, newValue: number[]) => {
    setValue(newValue);
  };

  useEffect(() => {
    hideFilteronSmallScreen();
  }, [params]);
  if (isPending) return <CategoryLoadingState />

  if (error) {
    return <>Somthing wend wrong {error?.toString()}</>;
  }
  const filterdProduct =
    typeof product === "undefined"
      ? undefined
      : {
          ...product,
          products:
            product?.products?.filter((product) => {
              return product.price >= value[0] && product.price <= value[1];
            }) || [],
        };

  return (
    <Layout>
      <div className="w-full ">
        <div className="flex py-8 gap-4 sm:flex-row flex-col w-full mx-auto max-w-[1240px]">
          <Filter
            forMobile={false}
            value={value}
            currCategory={params?.category}
            handleChange={handleValueChange}
            show={showFilteronSmallScreen}
            doHide={hideFilteronSmallScreen}
          />
          <ProductsPagination data={filterdProduct} />
          <SwipeableDrawer
            onOpen={() => setShowFilteronSmallScreen(true)}
            open={showFilteronSmallScreen}
            anchor="bottom"
            onClose={hideFilteronSmallScreen}
            slotProps={{
              paper: {style: {height: '80%', backgroundColor: 'transparent'} }
            }}
          >
            <Filter
              forMobile={true}
              value={value}
              currCategory={params?.category}
              handleChange={handleValueChange}
              show={showFilteronSmallScreen}
              doHide={hideFilteronSmallScreen}
            />
          </SwipeableDrawer>
          <div
            onClick={() => setShowFilteronSmallScreen(true)}
            className="bg-white hover:bg-slate-100 active:ring p-4 rounded-full sm:hidden flex items-center justify-center fixed bottom-10 right-10 z-20 [box-shadow:0_0_10px_#aaa]"
          >
            <IoFilter className="w-6 h-6" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Category;
