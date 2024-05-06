// Accordion for FAQ

// eslint-disable-next-line react/prop-types
const AccordionFaq = ({ title, details, show, setShow, position }) => {
  const handleClick = () => {
    // if Currently open, then close all
    if (show === true) {
      setShow((showArray) => {
        return (showArray = showArray.map(() => false));
      });

      // Reset all values of state to false
      // Set current one to true
    } else {
      setShow((showArray) => {
        showArray = showArray.map((elem) => {
          elem;
          return false;
        });
        showArray[position] = true;
        return showArray;
      });
    }
  };

  //   Return to DOM
  return (
    <div className="w-full mt-3">
      <div
        className="flex justify-between bg-slate-200 p-2 cursor-pointer hover:bg-slate-100 transition-colors ease-in "
        onClick={handleClick}
      >
        <p className="font-bold text-slate-700">{title}</p>
        <p className="cursor-pointer">{show === false ? "😵" : "🫣"}</p>
      </div>
      {show && (
        <p className="p-2 overflow-y-hidden dark:text-darkTer">{details}</p>
      )}
    </div>
  );
};

export default AccordionFaq;
