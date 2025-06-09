import React, { useState, useEffect } from "react";
import { cn } from "../../utlis/cn";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

interface PaginationButtonsProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  totalPages,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [navButtons, setNavButtons] = useState<(string | number)[]>([]);

  const generateNavButtons = (currentPage: number, totalPages: number) => {
    const buttons: (string | number)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      buttons.push(1);
      if (currentPage > 3) {
        buttons.push("...");
      }
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        buttons.push(i);
      }
      if (currentPage < totalPages - 2) {
        buttons.push("...");
      }
      buttons.push(totalPages);
    }
    setNavButtons(buttons);
  };

  useEffect(() => {
    generateNavButtons(currentPage, totalPages);
  }, [currentPage, totalPages]);

  const handlePageClick = (page: number | string) => {
    if (typeof page === "number") {
      setCurrentPage(page);
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <button
        className="min-[400px]:p-2 p-3  not-disabled:cursor-pointer min-[400px]:w-[100px] min-[400px]:rounded-lg rounded-full border-2 border-gray-200 flex items-center justify-center gap-x-2 not-disabled:active:bg-slate-100 disabled:opacity-50"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <GrLinkPrevious /> <span className="min-[400px]:flex hidden">Prevous</span>{" "}
      </button>
      <div className="flex items-center justify-center gap-2">
        {navButtons.map((btn, index) => (
          <button
            key={index}
            className={cn(
              "rounded-sm  aspect-square w-[40px] hover:text-gray-800 cursor-pointer",
              typeof btn === "number"
                ? btn === currentPage
                  ? "bg-gray-200 "
                  : "  text-gray-400 hover:bg-gray-100"
                : "bg-transparent text-gray-500 cursor-default"
            )}
            onClick={() => handlePageClick(btn)}
            disabled={typeof btn === "string"}
          >
            {btn}
          </button>
        ))}
      </div>
      <button
        className="min-[400px]:p-2 p-3 not-disabled:cursor-pointer min-[400px]:w-[100px] min-[400px]:rounded-lg rounded-full border-2 border-gray-200 flex items-center justify-center gap-x-2 not-disabled:active:bg-slate-100 disabled:opacity-50"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <span className="min-[400px]:flex hidden">Next</span> <GrLinkNext />
      </button>
    </div>
  );
};

export default PaginationButtons;
