type ButtonProps = {
  handleButton: () => void;
  isSingleImage: boolean;
};

const Button = ({ handleButton, isSingleImage }: ButtonProps) => {
  return (
    <button
      onClick={handleButton}
      className="my-10 bg-red-700 text-2xl p-4 rounded-md text-white hover:bg-red-400"
    >
      {!isSingleImage ? <div>Выбрать день</div> : <div>Выбрать промежуток</div>}
    </button>
  );
};

export default Button;
