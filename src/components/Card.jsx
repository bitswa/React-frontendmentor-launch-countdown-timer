export function Card({ timer, label }) {
  return (
    <div>
      <span>{timer}</span>
      <h2 className="text-xs uppercase">{label}</h2>
    </div>
  );
}
