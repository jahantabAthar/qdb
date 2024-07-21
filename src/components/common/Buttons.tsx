
const Buttons = () => {
  return (
      <div className='flex items-end justify-end mt-24'>
        <button type="button" className="text-white bg-secondary-500 hover:bg-secondary-600 rounded-full text-sm px-5 py-2.5 me-2 mb-2">
          Save & Exit
        </button>

        <button type="Submit" className="text-white bg-secondary-500 hover:bg-secondary-600 rounded-full text-sm px-5 py-2.5 me-2 mb-2" >
          Next
        </button>
      </div>  
  );
};

export default Buttons;
