import React, { useState } from "react";
import { cn } from "../../utlis/cn";
import { IoChevronDown } from "react-icons/io5";

const DropDown = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const [drop, setDrop] = useState(true);
  return (
    <div>
      <div className="flex cursor-pointer items-center justify-between" onClick={()=> setDrop(prev => !prev)}>
      <h2 className="text-lg font-roboto font-semibold">{title}</h2>
        <IoChevronDown className={cn("transition-all ease-in-out duration-300", {"rotate-180": drop})} />
      </div>
      <div className={cn("transition-all ease-in-out duration-300 py-1", { "overflow-hidden h-0 py-0": !drop })}>
        {children}
      </div>
    </div>
  );
};

export default DropDown;
