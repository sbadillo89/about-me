import React from "react";

type CardProps = {
  period: string;
  company: string;
  description: string;
  skills: string[];
  position:string;
};

const Card = ({ ...cardsProps }: CardProps): React.ReactElement => {
  return (
    <div className="bg-red-300 rounded-xl shadow-xl p-4 m-2 max-w-xl">
      <h1 className="font-bold text-gray-900">{cardsProps.company}</h1>
      <h2 className="font-bold text-red-500">{cardsProps.position}</h2>
      <h2 className="font-semibold text-gray-900"> {cardsProps.period} </h2>
      <p className="text-gray-900 my-2">{cardsProps.description}</p>
      <div className="mt-4 flex flex-wrap gap-1">
        {cardsProps.skills.map((skill) => (
          <span
            key={Math.random()}
            className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-white bg-red-500 last:mr-0 mr-1"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
