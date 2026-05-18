import { CLIENTS } from "../../../data";

// Double the array so the CSS marquee loops seamlessly
const DOUBLED = [...CLIENTS, ...CLIENTS];

export default function Clients() {
  return (
    <div className="clients">
      <div className="con" style={{ overflow: "hidden" }}>
        <div className="ctrk">
          {DOUBLED.map((name, i) => (
            <b key={i}>{name}</b>
          ))}
        </div>
      </div>
    </div>
  );
}
