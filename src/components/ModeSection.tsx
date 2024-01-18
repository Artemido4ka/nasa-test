import { Dispatch, SetStateAction } from "react";

import { CustomDateType } from "@/types/types";
import CustomCalendar from "./Calendar";
import Button from "./Button";

type ModeSectionType = {
  isSingleImage: boolean;
  date: CustomDateType;
  setDate: Dispatch<SetStateAction<CustomDateType>>;
  setIsSingleImage: (isSingleImage: boolean) => void;
};

const ModeSection = ({
  isSingleImage,
  date,
  setDate,
  setIsSingleImage,
}: ModeSectionType) => {
  const handleButton = () => {
    setIsSingleImage(!isSingleImage);
  };

  return (
    <div className="pl-6 pb-36">
      <h2 className="mt-20 text-4xl">Выберете любую дату</h2>
      <Button handleButton={handleButton} isSingleImage={isSingleImage} />
      <>
        {isSingleImage ? (
          <div>
            <CustomCalendar
              date={date}
              isSingleImage={isSingleImage}
              setDate={setDate}
            />
          </div>
        ) : (
          <div className="flex space-x-8">
            <CustomCalendar
              date={date}
              startDate
              isSingleImage={isSingleImage}
              setDate={setDate}
            />
            <CustomCalendar
              date={date}
              endDate
              isSingleImage={isSingleImage}
              setDate={setDate}
            />
          </div>
        )}
      </>
    </div>
  );
};

export default ModeSection;
