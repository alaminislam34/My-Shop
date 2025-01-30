import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-02-01T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-end space-x-2 text-left">
      <div>
        <span className="text-sm md:text-lg lg:text-xl">Days</span>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
          {timeLeft.days}
        </p>
      </div>
      <span className="text-xl md:text-2xl lg:text-3xl">:</span>
      <div>
        <span className="text-sm md:text-lg lg:text-xl">Hours</span>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
          {timeLeft.hours}
        </p>
      </div>
      <span className="text-xl md:text-2xl lg:text-3xl">:</span>
      <div>
        <span className="text-sm md:text-lg lg:text-xl">Minutes</span>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
          {timeLeft.minutes}
        </p>
      </div>
      <span className="text-xl md:text-2xl lg:text-3xl">:</span>
      <div>
        <span className="text-sm md:text-lg lg:text-xl">Seconds</span>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
          {timeLeft.seconds}
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
