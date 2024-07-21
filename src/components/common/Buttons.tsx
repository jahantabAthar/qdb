
const Buttons = ({name,type}) => {
  return (
        <button type="{type}" className="text-white bg-secondary-500 hover:bg-secondary-600 rounded-full text-sm px-5 py-2.5 me-2 mb-2">
          {name}
        </button>
  );
};

export default Buttons;
