export function Card({ timer, label }) {
  return (
    <div className="flex flex-col gap-4 w-full text-center">
      <span className="text-2xl py-4 rounded-md bg-saturatedBlue text-softRed shadow-xl">
        {timer < 10 && 0}
        {timer}
      </span>
      <h2 className="text-[8px] uppercase text-grayishBlue tracking-[0.4em]">
        {label}
      </h2>
    </div>
  );
}
