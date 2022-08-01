import { Card } from "./Card";

export function Main(props) {
  return (
    <main className="flex flex-col items-center gap-12 w-full text-center px-4">
      <h1 className="text-lg tracking-[0.4em] text-white">WE'RE LAUNCHING SOON</h1>
      <div className="flex w-full gap-4">
        <Card label={"days"} timer={props.days} />
        <Card label={"hours"} timer={props.hours} />
        <Card label={"minutes"} timer={props.min} />
        <Card label={"seconds"} timer={props.sec} />
      </div>
    </main>
  );
}
