import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-between p-10 bg-black">
      <Image
        src={
          "https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg"
        }
        width={100}
        height={100}
        alt="logo-nasa"
      />
    </div>
  );
};

export default Header;
