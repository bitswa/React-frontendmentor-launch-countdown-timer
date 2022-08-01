export function Card({ timer, label }) {
  return (
    <div className="flex flex-col gap-4 w-full text-center">
      <div className="flex flex-col relative">
        <span className="p-4 rounded-md  bg-mostlyBlack"></span>
        <span className="absolute top-0 left-0 translate-x-[50%] translate-y-[50%] text-2xl text-white">
          {timer < 10 && 0}
          {timer}
        </span>
        <span className="p-4 rounded-md bg-saturatedBlue"></span>
      </div>
      <h2 className="text-[8px] uppercase text-white">{label}</h2>
    </div>
  );
}
