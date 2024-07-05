import React from "react";
import ButtonLangage from "./ButtonLangage";

type Moovie = {
  image: string;
  title: string;
  date: string;
  age: number;
};

const MoovieItem: React.FC<Moovie> = (props) => {
  const imgUrl = `https://image.tmdb.org/t/p/original${props.image}`;
  return (
    <div className={`h-auto w-72 rounded-lg flex items-end `}>
      <img
        src={imgUrl}
        alt={props.title}
        className="bg-center bg-no-repeat object-cover"
      />
      <div className="flex flex-col items-start absolute mb-8 flex-shrink-0 justify-end ml-4 w-40 h-32  shadow-2xl">
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
