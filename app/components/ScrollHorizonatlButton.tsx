"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ScrollButtonHorizontalProps {
  left?: boolean;
  right?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ScrollButtonHorizontal: React.FC<ScrollButtonHorizontalProps> = ({
  left = false,
  right = false,
  onClick,
}) => {
  const direction = left ? "left" : "right";
  return (
    <div
      className={`scroll-${direction} hidden md:flex justify-center items-center absolute ${direction}-0 top-0 h-full w-12`}
    >
      <button
        onClick={onClick}
        className="bg-white border-neutral-400 border-[1px] p-1 rounded-full top-7"
      >
        {left ? <FaChevronLeft size="14" /> : <FaChevronRight size="14" />}
      </button>
    </div>
  );
};

export default ScrollButtonHorizontal;
