import { Card } from "./Card";

export function Main(props) {
  return (
    <main>
      <h1>WE'RE LAUNCHING SOON</h1>
      <div className="flex gap-4 justify-center text-center">
        <Card label={"days"} timer={props.days} />
        <Card label={"hours"} timer={props.hours} />
        <Card label={"minutes"} timer={props.min} />
        <Card label={"seconds"} timer={props.sec} />
      </div>
    </main>
  );
}
