import React, { useState } from "react";
import { Briefcase, ClipboardList, Users } from "lucide-react";

const FeatureCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const cardBaseClasses =
    "rounded-xl shadow-md pt-0 p-6 flex flex-col items-center justify-center text-center min-h-[300px] cursor-pointer transition-all duration-300";

  return (
    <div className="bg-white py-12 px-6 md:px-35">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -translate-y-4">
        {[ 
          { icon: <Briefcase />, title: "Talents Agency" },
          { icon: <ClipboardList />, title: "Portal Job" },
          { icon: <Users />, title: "Careers Coaching" }
        ].map((card, index) => {
          const isSelected = selectedCard === index;

          return (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`${cardBaseClasses} ${
                isSelected
                  ? "bg-[#83B348] text-white"
                  : "bg-white text-gray-900 hover:bg-[#83B348] hover:text-white"
              }`}
            >
              {React.cloneElement(card.icon, {
                className: `mx-auto w-12 h-12 mb-4 transition-colors ${
                  isSelected ? "text-white" : "text-[#83B348] group-hover:text-white"
                }`,
              })}
              <h3
                className={`text-2xl font-bold mb-2 ${
                  isSelected ? "" : "group-hover:text-white"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`text-xl ${
                  isSelected ? "" : "text-gray-500 group-hover:text-white"
                }`}
              >
                Facilisi etiam consectetur mi nibh <br />
                bibendum posuere ultricies cubilia <br />
                donec potenti si
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCards;
