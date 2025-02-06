import { Link } from "react-router";
import { Shop } from "../../types";
import ShopCard from "./ShopCard";
import { ArrowRight } from "lucide-react";

export default function ShopsList() {
  const shops: Shop[] = [
    {
      name: "Beveales",
      open: "10 am",
      close: "7 pm",
      phoneNumber: "057532105",
      image: "/shop.jpg",
      location: "New capital, area 6",
    },
    {
      name: "Beveales",
      open: "10 am",
      close: "7 pm",
      phoneNumber: "057532105",
      image: "/shop.jpg",
      location: "New capital, area 6",
    },
    {
      name: "Beveales",
      open: "10 am",
      close: "7 pm",
      phoneNumber: "057532105",
      image: "/shop.jpg",
      location: "New capital, area 6",
    },
    {
      name: "Beveales",
      open: "10 am",
      close: "7 pm",
      phoneNumber: "057532105",
      image: "/shop.jpg",
      location: "New capital, area 6",
    },
    {
      name: "Beveales",
      open: "10 am",
      close: "7 pm",
      phoneNumber: "057532105",
      image: "/shop.jpg",
      location: "New capital, area 6",
    },
  ];
  return (
    <div className="flex gap-3 overflow-auto no-scrollbar">
      {shops.map((shop: Shop, i: number) => (
        <>
          <ShopCard shop={shop} />
          {i >= 4 && <SeeMore />}
        </>
      ))}
    </div>
  );
}

const SeeMore = () => {
  return (
    <div className="border-mainColor shadow-lg border-1 rounded-md min-w-[200px] max-w-[200px] bg-white text-mainColor">
      <Link
        to="/shops"
        className="w-full h-full gap-2 flex items-center justify-center"
      >
        See More
        <ArrowRight />
      </Link>
    </div>
  );
};
