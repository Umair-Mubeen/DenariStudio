import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import { CONTACT_INFO } from "../../../data";

const SERVICES_OPTIONS = [
  "Web Design & Development",
  "E-Commerce Store",
  "UI/UX Design",
  "Brand Identity",
  "SEO & Marketing",
  "Maintenance",
];

const BUDGET_OPTIONS = [
  "Under 30,000",
  "30,000 – 75,000",
  "75,000 – 1,50,000",
  "1,50,000+",
];

const INITIAL_FORM = {
  name:    "",
  email:   "",
  phone:   "",
  service: "Web Design & Development",
  budget:  "Under 30,000",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    alert("Message sent! We'll get back to you within 24 hours. 🚀");
    setForm(INITIAL_FORM);
  };

  return (
    <section className="sec sec-dark" id="contact">
      <div className="con">
        <SectionHeader
          tag="Let's Talk"
          title={<>Let's Build Something <em>Powerful Together</em></>}
          desc="Looking for a reliable digital partner? DenariStudio turns your ideas into measurable results. Tell us about your project!"
          dark
        />

        <div className="cg">
          {/* ── Contact Info ─────────────────────── */}
          <div className="ci revL">
            <h3>Ready to Elevate Your Digital Presence?</h3>
            <p>From strategy and design to development and growth — we deliver end-to-end digital solutions. Response guaranteed within 24 hours.</p>

            {CONTACT_INFO.map((c, i) => (
              <div className="cdt" key={i}>
                <div className="cdic">{c.icon}</div>
                <div>
                  <div className="cdl">{c.label}</div>
                  <div className="cdv">{c.val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Contact Form ──────────────────────── */}
          <div className="revR">
            <div className="cf">
              <div className="fr">
                <div className="fg">
                  <label>Your Name</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Ali Hassan" />
                </div>
                <div className="fg">
                  <label>Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="ali@company.pk" />
                </div>
              </div>

              <div className="fr">
                <div className="fg">
                  <label>WhatsApp Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+92 300 0000000" />
                </div>
                <div className="fg">
                  <label>Service Needed</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    {SERVICES_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div className="fg">
                <label>Budget Range (PKR)</label>
                <select name="budget" value={form.budget} onChange={handleChange}>
                  {BUDGET_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>

              <div className="fg">
                <label>Project Details</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and requirements..."
                />
              </div>

              <button
                className="bp"
                style={{ marginTop: 8, border: "none", cursor: "pointer" }}
                onClick={handleSubmit}
              >
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}