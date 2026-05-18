import { FOOTER_LINKS } from "../../../data";

const SOCIALS = ["f", "in", "tw", "ig"];

export default function Footer() {
  return (
    <footer>
      <div className="con">
        <div className="fg2">
          {/* Brand Column */}
          <div>
            <div className="fbn">
              Denari<em>Studio</em>
            </div>
            <p className="fab">
              Pakistan ka trusted digital agency — web development, branding, SEO,
              social media aur video animation. Karachi based, nationwide serving,
              globally competitive.
            </p>
            <div className="fso">
              {SOCIALS.map((s) => (
                <a href="#" className="fsb" key={s}>{s}</a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div className="fch" key={heading}>
              <h4>{heading}</h4>
              <ul className="fli">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="fb2">
          <div className="fc">
            © 2025 <em>DenariStudio</em>. Crafted with ❤️ in Karachi 🇵🇰
          </div>
          <div className="fc">
            <a href="#" style={{ color: "rgba(255,255,255,.35)", textDecoration: "none" }}>Privacy</a>
            &nbsp;·&nbsp;
            <a href="#" style={{ color: "rgba(255,255,255,.35)", textDecoration: "none" }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}