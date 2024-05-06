// Mini Components to support the feature cards

import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const CountDown = ({ shop }) => {
  // Set Countdown
  const finalDate = new Date("Jan 31, 2024 23:59:00").getTime();
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    let timeInterval = setInterval(() => {
      let now = new Date().getTime();

      let timeBetween = finalDate - now;

      // Time Calculations
      setTime({
        days: Math.floor(timeBetween / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeBetween % (1000 * 60)) / 1000),
        expired: false,
      });

      // Clear Interval at expiry
      if (timeBetween < 0) {
        clearInterval(timeInterval);
        setTime((time) => ({ ...time, expired: true }));
      }
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={
        shop ? "text-white sm:text-2xl font-extrabold" : "text-xl sm:text-base"
      }
    >
      {time.expired
        ? "DEAL EXPIRED"
        : `${time.days.toString().padStart(2, 0)} : ${time.hours
            .toString()
            .padStart(2, 0)} : ${time.minutes
            .toString()
            .padStart(2, 0)} : ${time.seconds.toString().padStart(2, 0)}`}
    </div>
  );
};

export const StartPrice = () => {
  return (
    <div>
      <p className="text-white text-xl sm:text-xs">
        Starting at <span className="text-yellow-500 font-bold">N7,350</span>
      </p>
    </div>
  );
};

export const DiscountOff = () => {
  return (
    <div>
      <p className="text-xl sm:text-xs">
        Up to{" "}
        <span className="p-1 rounded-md bg-slate-700 text-white font-bold">
          64% OFF
        </span>
      </p>
    </div>
  );
};
