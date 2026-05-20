import { useState, useEffect } from "react";
import { NATIONAL_DAYS } from "../../data/heritage";

export default function NationalDayBanner() {
  const [day, setDay] = useState(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const today  = new Date();
    const month  = String(today.getMonth() + 1).padStart(2, "0");
    const date   = String(today.getDate()).padStart(2, "0");
    const today_str = `${month}-${date}`;

    // Check if today is a national day (or within 2 days)
    const found = NATIONAL_DAYS.find(d => {
      const [m, dt] = d.date.split("-");
      const diff = Math.abs(parseInt(date) - parseInt(dt)) + Math.abs(parseInt(month) - parseInt(m)) * 30;
      return d.date === today_str || (m === month && diff <= 2);
    });

    if (found && !sessionStorage.getItem(`dismissed-${found.date}`)) {
      setDay(found);
    }
  }, []);

  const dismiss = () => {
    if (day) sessionStorage.setItem(`dismissed-${day.date}`, "1");
    setDismissed(true);
  };

  if (!day || dismissed) return null;

  return (
    <div className="national-day-banner">
      <div className="con national-day-inner">
        <span className="ndb-flag">🇵🇰</span>
        <span className="ndb-emoji">{day.emoji}</span>
        <div className="ndb-text">
          <strong>{day.name}</strong>
          <span>{day.message}</span>
        </div>
        <button className="ndb-close" onClick={dismiss} aria-label="Dismiss">✕</button>
      </div>
    </div>
  );
}