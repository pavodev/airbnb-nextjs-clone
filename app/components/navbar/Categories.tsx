"use client";

import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaChevronLeft, FaChevronRight, FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { BaseSyntheticEvent, useState } from "react";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

const Categories = () => {
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) return null; // we want the categories to be displayed only in the Homepage

  const scrollBy = (scrollOffset: number) => {
    const categoriesContainer = document.querySelector(".categories-container");

    if (categoriesContainer) {
      categoriesContainer.scrollLeft += scrollOffset;
    }
  };

  const handleScroll = (e: BaseSyntheticEvent) => {
    if (e.target.scrollWidth - e.target.scrollLeft === e.target.clientWidth) {
      setIsStart(false);
      setIsEnd(true);
    } else if (e.target.scrollLeft === 0) {
      setIsStart(true);
      setIsEnd(false);
    } else if (isStart || isEnd) {
      setIsStart(false);
      setIsEnd(false);
    }
  };

  return (
    // <Container>
    <div className="relative w-full">
      {!isStart && (
        <div className="scroll-left flex justify-center items-center absolute left-0 top-0 h-full w-12">
          <button
            onClick={() => scrollBy(-200)}
            className="bg-white border-gray-500 border-[1px] p-1 rounded-full top-7"
          >
            <FaChevronLeft size="14" />
          </button>
        </div>
      )}
      <div
        onScroll={handleScroll}
        className="categories-container no-scrollbar pt-2 pl-2 pr-2 flex flex-row items-center justify-between overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          ></CategoryBox>
        ))}
      </div>
      {!isEnd && (
        <div className="scroll-right flex justify-center items-center absolute right-0 top-0 h-full w-10">
          <button
            onClick={() => scrollBy(200)}
            className="bg-white border-gray-500 border-[1px] p-1 rounded-full"
          >
            <FaChevronRight size="14" />
          </button>
        </div>
      )}
    </div>
    // </Container>
  );
};

export default Categories;
