export function Card({ timer, label }) {
  return (
    <div>
      <span>
        {timer < 10 && 0}  
        {timer}
      </span>
      <h2 className="text-xs uppercase">{label}</h2>
    </div>
  );
}
