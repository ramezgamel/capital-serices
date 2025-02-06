import { CircleUser, MapPin, Phone, Star } from "lucide-react";
import { Teacher } from "../../types";
import { Link } from "react-router";

export default function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <div className="border-mainColor shadow-lg border-1 rounded-md p-2 min-w-[200px] max-w-[200px] bg-white text-mainColor">
      <Link to={`/teacher/${teacher.name}`}>
        <div className="flex gap-2 items-center">
          {teacher.image ? (
            <img
              className="rounded-full w-14 h-14"
              src={teacher.image}
              alt={teacher.name}
            />
          ) : (
            <CircleUser className="w-12 h-12" />
          )}
          <div>
            <h3 className="capitalize mb-1 line-clamp-1">{teacher.name}</h3>
            <span className="bg-mainColor/80 py-1 px-2 text-white rounded-full">
              {teacher.subject}
            </span>
          </div>
        </div>
        <hr className="my-4" />
        <div>
          <span className="flex gap-2 my-1">
            <Phone className=" w-5" />
            {teacher.phoneNumber}
          </span>
          <span className="flex my-1 gap-2">
            <Star className=" w-5" />
            {teacher.rate}
          </span>
          <span className="flex my-1 gap-2">
            <MapPin className=" w-5" />
            {teacher.location}
          </span>
        </div>
      </Link>
    </div>
  );
}
