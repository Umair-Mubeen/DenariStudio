import { useState, useEffect } from "react";

const NAV_LINKS = ["services","work","process","pricing"];

function MoonIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/></svg>;
}
function SunIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
}

export default function Navbar({ scrolled, dark, toggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header id="nav" className={scrolled ? "s" : ""}>
        <div className="ni">
          <a href="#home" className="brand" onClick={close}>
            <div className="bicon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM17 15a2 2 0 100 4 2 2 0 000-4zM13 13h3v2h-3z" fill="white" opacity=".95"/>
              </svg>
            </div>
            <span className="bname">Denari<em>Studio</em></span>
          </a>

          <nav className="nav-desktop">
            <ul>
              {NAV_LINKS.map(s => (
                <li key={s}><a href={`#${s}`}>{s.charAt(0).toUpperCase()+s.slice(1)}</a></li>
              ))}
              <li><a href="#contact" className="nbtn">Get Started</a></li>
            </ul>
            <button className="dark-toggle" onClick={toggleDark} aria-label="Toggle dark mode">
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          </nav>

          <button className={`hamburger${menuOpen?" open":""}`} onClick={()=>setMenuOpen(o=>!o)} aria-label="Toggle navigation">
            <span/><span/><span/>
          </button>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen?" open":""}`}>
        <ul>
          {NAV_LINKS.map(s=>(
            <li key={s}><a href={`#${s}`} onClick={close}>{s.charAt(0).toUpperCase()+s.slice(1)}</a></li>
          ))}
          <li><a href="#contact" className="mobile-cta" onClick={close}>Get Started</a></li>
        </ul>
      </div>

      {menuOpen && <div className="menu-backdrop" onClick={close} />}
    </>
  );
}