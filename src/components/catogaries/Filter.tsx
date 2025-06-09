import {
  ClotheStyles,
  clothSizeArray,
  filterColors,
  productCatogaries,
} from "../../utlis/constants";
import SvgFilter from "../ui/customSvgs/SvgFilter";
import { GoChevronRight } from "react-icons/go";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { cn } from "../../utlis/cn";
import DropDown from "./DropDown";
import type { ClothSizeType } from "../../utlis/types";
import { Link } from "react-router-dom";
import { IoCheckmark } from "react-icons/io5";

const Filter = ({
  forMobile,
  show,
  currCategory,
  doHide,
  value,
  handleChange,
}: {
  forMobile: boolean;
  show: boolean;
  currCategory: string | undefined;
  doHide: () => void;
  value: number[];
  handleChange: (_: Event, newValue: number[]) => void;
}) => {
  const [selectedSize, setSelectedSize] = useState<ClothSizeType>("Large");
  const [selectedColor, setSelectedColor] = useState("bg-red-600");
  const valuetext = (value: number) => `$${value}`;

  return (
    <div
      className={cn(
        "sm:flex bg-white sm:h-fit  h-full min-w-[200px] hidden flex-col w-full sm:max-w-[350px] border-gray-200 rounded-xl border-2 sm:p-4 p-2",
        { flex: show && forMobile }
      )}
    >
      <hr className="w-10 border-2 borer-gray-200 rounded-full mx-auto" />
      <div className="flex flex-col h-full w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-roboto font-semibold">Filter</h2>
          <div onClick={doHide}>
            <SvgFilter className="w-6 h-6 text-gray-500" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar">
          <hr className="border border-gray-200 my-4" />
          <ul className="flex max-h-[200px] overflow-y-auto flex-col">
            {productCatogaries.map((category) => (
              <Link
                to={`/category/${category}`}
                key={category}
                className={cn(
                  "flex items-center justify-between text-gray-500cursor-pointer  rounded-lg p-2",
                  {
                    "bg-black text-white": currCategory == category,
                    "hover:bg-slate-300": currCategory != category,
                  }
                )}
              >
                <span>{category}</span>
                <GoChevronRight />
              </Link>
            ))}
          </ul>
          <hr className="border border-gray-200 my-4" />

          <DropDown title="Price">
            <Box sx={{ paddingInline: 3 }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                min={10}
                max={1000}
                marks={[
                  { value: value[0], label: `$${value[0]}` },
                  { value: value[1], label: `$${value[1]}` },
                ]}
                valueLabelDisplay="auto"
                sx={{ color: "black" }}
                getAriaValueText={valuetext}
              />
            </Box>
          </DropDown>
          <hr className="border border-gray-200 my-4" />
          <DropDown title="Colors">
            <div className="flex flex-wrap gap-2 mt-2">
              {filterColors.map((color) => (
                <div
                  key={color}
                  className={cn(
                    "flex items-center justify-center cursor-pointer text-white w-8 h-8 rounded-full",
                    color,
                    {
                      border: color == "bg-white",
                    }
                  )}
                  onClick={() => setSelectedColor(color)}
                >
                  {color == selectedColor && <IoCheckmark />}
                </div>
              ))}
            </div>
          </DropDown>
          <hr className="border border-gray-200 my-4" />
          <DropDown title="Size">
            <div className="flex flex-wrap justify-start gap-2">
              {clothSizeArray.map((size) => (
                <div
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "py-2 px-3 text-nowrap rounded-full text-gray-600 bg-[#F0EEED] cursor-pointer",
                    {
                      "bg-black text-white": selectedSize == size,
                      "hover:bg-slate-300": selectedSize != size,
                    }
                  )}
                >
                  {size}
                </div>
              ))}
            </div>
          </DropDown>
          <hr className="border border-gray-200 my-4" />
          <DropDown title="Dress Style">
            {ClotheStyles.map((clothstyle) => (
              <li
                key={clothstyle.style}
                className="flex items-center justify-between text-gray-500 hover:text-gray-900 cursor-pointer hover:bg-slate-100 rounded-lg p-2"
              >
                <span>{clothstyle.style}</span>
                <GoChevronRight />
              </li>
            ))}
          </DropDown>
        </div>
        <button className="bg-black text-white p-2 rounded-full w-full mt-8 hover:shadow-lg active:bg-slate-900 cursor-pointer">
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
