import axios from "axios";

import { API_URL } from "@/const/const";
import { CustomDateType, ParamsType } from "@/types/types";

export const getDataResponse = async (
  date: CustomDateType,
  isSingleImage: boolean
) => {
  const params: Partial<ParamsType> = isSingleImage
    ? { date: date.date }
    : { start_date: date.startDate, end_date: date.endDate };

  params.api_key = process.env.NEXT_PUBLIC_NASA_API;

  const { data } = await axios.get(API_URL, {
    params,
  });

  return isSingleImage ? [data] : data;
};
