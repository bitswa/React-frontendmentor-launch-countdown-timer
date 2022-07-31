import { useEffect, useState } from "react";
import { Card } from "./components/Card";

export function App() {
  const [days, setDays] = useState(8);
  const [hours, setHours] = useState(23);
  const [min, setMin] = useState(55);
  const [seg, setSeg] = useState(41);

  useEffect(() => {
    setInterval(() => {
      setSeg((prev) => prev - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (seg <= 0) {
      setSeg(60);
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
  }, [seg, min, hours]);

  return (
    <div className="font-redHat h-[100vh] ">
      <main>
        <h1>WE'RE LAUNCHING SOON</h1>
        <div className="flex gap-4 justify-center text-center">
          <Card label={"days"} timer={days} />
          <Card label={"hours"} timer={hours} />
          <Card label={"minutes"} timer={min} />
          <Card label={"seconds"} timer={seg} />
        </div>
      </main>
      <footer className="flex gap-4">
        <a href="">
          <img src="./images/icon-facebook.svg" alt="facebook" />
        </a>
        <a href="">
          <img src="./images/icon-pinterest.svg" alt="pinterest" />
        </a>
        <a href="">
          <img src="./images/icon-instagram.svg" alt="instagram" />
        </a>
      </footer>
    </div>
  );
}
