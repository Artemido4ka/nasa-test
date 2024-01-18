import moment from "moment";

export const formatedDate = (value: Date) => moment(value).format("YYYY-MM-DD");
export const currentDate = () => moment().format("YYYY-MM-DD");
