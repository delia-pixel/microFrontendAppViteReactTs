import React from "react";
import ButtonLangage from "./ButtonLangage";

type Moovie = {
  image: string;
  title: string;
  date: string;
  age: number;
};

const MoovieItem: React.FC<Moovie> = (props) => {
  // const imgUrl = `./assets/img/${props.image}`;
  return (
    <div
      className={`bg-black h-96 w-72 bg-fixed bg-center bg-no-repeat bg-cover border-2 border-slate-900 mt-48 flex items-end`}
      style={{ backgroundImage: `url(./assets/img/${props.image})` }}
    >
      <div className="flex flex-col items-start flex-shrink-0 justify-end ml-10 w-40 h-32 mb-8">
        <p className="text-xl text-slate-50 font-bold">{props.title}</p>
        <p className="text-md text-slate-50 font-normal">{props.date}</p>
        <p className="text-md text-slate-50 font-medium">{props.age} +</p>
        <div className="flex justify-start gap-2">
          <ButtonLangage title="Ru" />
          <ButtonLangage title="En" />
        </div>
      </div>
    </div>
  );
};

export default MoovieItem;
