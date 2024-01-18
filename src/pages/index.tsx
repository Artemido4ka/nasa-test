import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";

import Header from "@/components/Header";
import Main from "@/components/Main";
import ModeSection from "@/components/ModeSection";
import { CustomDateType } from "@/types/types";
import { currentDate } from "@/utils/utils";
import { getDataResponse } from "@/api/getImage";

export default function Home() {
  const defaultDate = {
    date: currentDate(),
    startDate: "",
    endDate: "",
  };

  const [isSingleImage, setIsSingleImage] = useState(true);
  const [data, setData] = useState([]);
  const [date, setDate] = useState<CustomDateType>(defaultDate);

  useEffect(() => {
    getDataResponse(date, isSingleImage).then((result) => setData(result));
  }, [date, isSingleImage]);

  return (
    <div>
      <Header />
      <ModeSection
        date={date}
        isSingleImage={isSingleImage}
        setDate={setDate}
        setIsSingleImage={setIsSingleImage}
      />
      <Main data={data} />
    </div>
  );
}
