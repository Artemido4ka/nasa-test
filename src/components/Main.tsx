import { DataType } from "@/types/types";
import defaultImg from "../images/oops.png";
import Image from "next/image";

type Props = {
  data: DataType[];
};

function Main({ data }: Props) {
  return (
    <div className="flex flex-wrap">
      {!!data.length &&
        data.map((item) => (
          <div key={item.title} className="flex w-1/3 flex-wrap">
            <div className="w-full p-6 h-96">
              <Image
                src={item.url || defaultImg}
                alt="gallery"
                width="0"
                height="0"
                sizes="100vw"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default Main;
