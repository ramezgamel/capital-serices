import { Link } from "react-router";
import { Shop } from "../../types";
import { MapPin, Phone, Timer } from "lucide-react";

const ShopCard = ({ shop }: { shop: Shop }) => {
  return (
    <div className="border-mainColor shadow-lg border-1 rounded-md  min-w-[200px] max-w-[200px] bg-white text-mainColor">
      <Link to={`/shope/${shop.name}`}>
        <img src={shop.image} alt={shop.name} className="w-full  h-[200px]" />
        <h2 className="text-xl text-center font-bold mt-2">{shop.name}</h2>
        <div className="p-2">
          <span className="flex gap-2 my-1">
            <Timer />
            {shop.open} - {shop.close}
          </span>
          <span className="flex gap-2 my-1">
            <Phone />
            {shop.phoneNumber}
          </span>
          <span className="flex gap-2 my-1">
            <MapPin />
            {shop.location}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ShopCard;
