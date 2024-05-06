import { CountDown } from "../Utils/Widgets001.jsx";

const MonthSale = () => {
  return (
    <div
      style={{ background: "url(/video-placeholder.png)" }}
      className="h-[280px] w-full max-w-screen-xl bg-slate-600 bg-cover bg-no-repeat mx-auto flex flex-col justify-center items-center gap-3"
    >
      <h2 className="md:text-5xl sm:text-2xl text-lg text-center text-white font-extrabold">
        SALE OF THE MONTH
      </h2>

      {/* Scale Up the Component  */}
      <CountDown shop={true} />
      <button className="bg-[#00B207] text-white p-2 rounded-lg hover:opacity-85 transition ease-in active:bg-white active:text-[#00b207]">
        VIEW DEALS NOW
      </button>
    </div>
  );
};

export default MonthSale;
