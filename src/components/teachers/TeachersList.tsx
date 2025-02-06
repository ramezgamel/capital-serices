import { Link } from "react-router";
import { Teacher } from "../../types";
import TeacherCard from "./TeacherCard";
import { ArrowRight } from "lucide-react";

export default function TeachersList() {
  const teachers: Teacher[] = [
    {
      name: "ahmed",
      image: "",
      phoneNumber: "012962329",
      location: "egypt",
      subject: "english",
      rate: 2,
    },
    {
      name: "Mohamed abd-elrhman",
      image: "",
      phoneNumber: "012962329",
      location: "egypt",
      subject: "english",
      rate: 2,
    },
    {
      name: "ahmed",
      image: "",
      phoneNumber: "012962329",
      location: "egypt",
      subject: "english",
      rate: 2,
    },
    {
      name: "Mohamed abd-elrhman",
      image: "",
      phoneNumber: "012962329",
      location: "egypt",
      subject: "english",
      rate: 2,
    },
    {
      name: "ahmed",
      image: "",
      phoneNumber: "012962329",
      location: "egypt",
      subject: "english",
      rate: 2,
    },
  ];

  return (
    <div className="flex gap-3 overflow-scroll no-scrollbar">
      {teachers.map((t: Teacher, i: number) => (
        <>
          <TeacherCard teacher={t} />
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
        to="/teachers"
        className="w-full h-full gap-2 flex items-center justify-center"
      >
        See More
        <ArrowRight />
      </Link>
    </div>
  );
};
