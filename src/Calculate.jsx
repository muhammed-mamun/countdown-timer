import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";

const Calculate = ({ targetDate }) => {
  const calculatedTimeLeft = () => {
    const difference = moment(targetDate).diff(moment());
    const duration = moment.duration(difference);

    return {
      days: duration.days(),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  };

  const [timeleft, setTimeleft] = useState(calculatedTimeLeft());
  const [isReached, setIsReached] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeleft(calculatedTimeLeft());
    }, 1000);
    if (
      timeleft.days === 0 &&
      timeleft.hours === 0 &&
      timeleft.minutes === 0 &&
      timeleft.seconds === 0
    ) {
      setIsReached(true);
    }
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {isReached ? (
        <div className="h-32 w-full ">
          <h2 className="text-4xl text-center text-white ">
            Enrollment days reached!
          </h2>
        </div>
      ) : (
        <div>
          <h2 className="text-4xl text-[#d9d9d9] font-semibold text-center">
            Countdown Timer
          </h2>
          <div className="grid grid-cols-4 gap-2 px-32 pt-6">
            <div className="text-white h-32 rounded-lg shadow-2xl flex justify-center text-4xl text-center bg-[#3367FE] font-bold text items-center">
              <h2>{timeleft.days}d</h2>
            </div>
            <div className="text-white h-32 rounded-lg shadow-2xl flex justify-center text-4xl text-center bg-[#3367FE] font-bold text items-center">
              <h2>{timeleft.hours}h</h2>
            </div>
            <div className="text-white h-32 rounded-lg shadow-2xl flex justify-center text-4xl text-center bg-[#3367FE] font-bold text items-center">
              <h2>{timeleft.minutes}m</h2>
            </div>
            <div className="text-white h-32 rounded-lg shadow-2xl flex justify-center text-4xl text-center bg-[#3367FE] font-bold text items-center">
              <h2>{timeleft.seconds}s</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculate;
