import { Dispatch, SetStateAction } from "react";
import Calendar from "react-calendar";

import { CustomDateType } from "@/types/types";
import { formatedDate } from "@/utils/utils";

type CalendarPropsType = {
  date: CustomDateType;
  isSingleImage: boolean;
  setDate: Dispatch<SetStateAction<CustomDateType>>;
  startDate?: string | boolean;
  endDate?: string | boolean;
};

const CustomCalendar = ({
  date,
  isSingleImage,
  setDate,
  startDate,
  endDate,
}: CalendarPropsType) => {
  const handleDate = (value: Date) => {
    if (isSingleImage) {
      value && setDate({ ...date, date: formatedDate(value) });
      return;
    }

    startDate && setDate({ ...date, startDate: formatedDate(value) });
    endDate && setDate({ ...date, endDate: formatedDate(value) });
  };

  const currentValueDate = () => {
    if (isSingleImage) return date.date;
    if (startDate) return date.startDate;
    return date.endDate;
  };

  return (
    <>
      <Calendar
        onChange={(value) => value && handleDate(value as Date)}
        value={currentValueDate()}
        maxDate={new Date()}
      />
    </>
  );
};

export default CustomCalendar;
