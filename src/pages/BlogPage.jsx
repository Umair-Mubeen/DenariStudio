import { useState } from "react";
import { Link } from "react-router-dom";
import { BLOG_POSTS, BLOG_CATEGORIES } from "../data/blog";
import SEO from "../card/components/ui/SEO";

export default function BlogPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === active);

  return (
    <main style={{ paddingTop: 80 }}>
      <SEO
        title="Blog — Digital Insights for Pakistani Businesses"
        description="Practical articles on web development, branding, SEO, and digital marketing — written specifically for Pakistani business owners."
        path="/blog"
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="sec sec-dark" style={{ textAlign: "center", paddingBottom: 70 }}>
        <div className="con">
          <div className="stag stag-d" style={{ justifyContent: "center" }}>Insights & Resources</div>
          <h1 className="hd" style={{ color: "#fff", fontSize: "clamp(2rem,5vw,3.2rem)", marginTop: 14 }}>
            DenariStudio <em>Blog</em>
          </h1>
          <p style={{ color: "rgba(255,255,255,.75)", maxWidth: 560, margin: "18px auto 0", fontSize: ".98rem", lineHeight: 1.85 }}>
            Practical articles for Pakistani business owners — web development, branding, SEO, social media, and everything in between. No fluff, just useful insights.
          </p>
        </div>
      </section>

      {/* ── POSTS ────────────────────────────────────────── */}
      <section className="sec">
        <div className="con">
          {/* Category filter */}
          <div className="pf" style={{ marginBottom: 44 }}>
            {BLOG_CATEGORIES.map(c => (
              <button key={c} className={`fb${active === c ? " a" : ""}`} onClick={() => setActive(c)}>
                {c}
              </button>
            ))}
          </div>

          {/* Featured post (first) */}
          {filtered.length > 0 && (
            <Link
              to={`/blog/${filtered[0].slug}`}
              style={{ textDecoration: "none", display: "block", marginBottom: 50 }}
            >
              <div className="blog-featured ds-reveal">
                <div className="blog-featured-img" style={{ background: filtered[0].cover }}>
                  <span style={{ fontSize: "5rem" }}>{filtered[0].icon}</span>
                </div>
                <div className="blog-featured-body">
                  <div className="blog-cat">{filtered[0].category}</div>
                  <h2>{filtered[0].title}</h2>
                  <p>{filtered[0].excerpt}</p>
                  <div className="blog-meta">
                    <span>{filtered[0].author}</span>
                    <span>·</span>
                    <span>{filtered[0].date}</span>
                    <span>·</span>
                    <span>{filtered[0].readTime}</span>
                  </div>
                  <div className="blog-read-more">Read Article →</div>
                </div>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="blog-grid">
            {filtered.slice(1).map((post, i) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="blog-card ds-reveal"
                style={{ textDecoration: "none", animationDelay: `${i * 0.06}s` }}
              >
                <div className="blog-card-img" style={{ background: post.cover }}>
                  <span style={{ fontSize: "3rem" }}>{post.icon}</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-cat">{post.category}</div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-meta">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="sec sec-dark" style={{ textAlign: "center" }}>
        <div className="con">
          <h2 className="hd" style={{ color: "#fff" }}>Want These Insights <em>Applied to Your Business?</em></h2>
          <p style={{ color: "rgba(255,255,255,.7)", marginTop: 12, marginBottom: 28 }}>
            Reading is great. Doing is better. Let's discuss your project.
          </p>
          <a href="/#contact" className="bp">Book Free Consultation →</a>
        </div>
      </section>
    </main>
  );
}
