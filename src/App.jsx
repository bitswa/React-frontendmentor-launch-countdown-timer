import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

export function App() {
  const [days, setDays] = useState(8);
  const [hours, setHours] = useState(23);
  const [min, setMin] = useState(55);
  const [sec, setSec] = useState(41);

  useEffect(() => {
    setInterval(() => {
      setSec((prev) => prev - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (sec <= 0) {
      setSec(60);
      setMin((prev) => prev - 1);
    }
    if (min <= 0) {
      setMin(60);
      setHours((prev) => prev - 1);
    }
    if (hours <= 0) {
      setHours(24);
      setDays((prev) => prev - 1);
    }
  }, [sec, min, hours]);

  return (
    <div className="font-redHat h-[100vh] flex flex-col items-center justify-around bg-darkBlue bg-stars bg-cover">
      <Main days={days} hours={hours} min={min} sec={sec} />
      <Footer />
    </div>
  );
}
