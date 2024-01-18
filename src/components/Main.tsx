import { DataType } from "@/types/types";

type Props = {
  data: DataType[];
};

const Main = ({ data }: Props) => {
  return (
    <div className="flex flex-wrap">
      {!!data.length &&
        data.map((item) => (
          <div key={item.title} className="flex w-1/3 flex-wrap">
            <div className="w-full p-6">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={item.url}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Main;
