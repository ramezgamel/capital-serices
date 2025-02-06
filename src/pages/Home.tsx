import type { ReactNode } from "react";
import ShopsList from "../components/shopes/ShopsList";
import TeachersList from "../components/teachers/TeachersList";

export default function Home() {
  return (
    <>
      <Section
        title="Yalla, check out the best shops around."
        list={<ShopsList />}
      />
      <Section title="All the best teachers." list={<TeachersList />} />
    </>
  );
}

const Section = ({ title, list }: { title: string; list: ReactNode }) => {
  return (
    <section className="my-6">
      <h2 className="text-mainColor text-3xl mb-2 font-bold">{title}</h2>
      {list}
    </section>
  );
};
