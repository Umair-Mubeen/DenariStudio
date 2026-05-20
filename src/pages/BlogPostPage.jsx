import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS } from "../data/blog";
import SEO from "../card/components/ui/SEO";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const related = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <main style={{ paddingTop: 120, textAlign: "center", minHeight: "60vh" }}>
        <h2 style={{ fontFamily: "Raleway,sans-serif", color: "var(--hd)" }}>Article not found</h2>
        <Link to="/blog" style={{ color: "var(--a)", marginTop: 16, display: "inline-block" }}>← Back to blog</Link>
      </main>
    );
  }

  return (
    <main style={{ paddingTop: 80 }}>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="sec sec-dark" style={{ paddingBottom: 60 }}>
        <div className="con" style={{ maxWidth: 780 }}>
          <Link to="/blog" style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem", textDecoration: "none" }}>← Back to blog</Link>
          <div style={{ fontFamily: "Raleway,sans-serif", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--a)", marginTop: 24, marginBottom: 14 }}>
            {post.category}
          </div>
          <h1 className="hd" style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.6rem)", lineHeight: 1.25, marginBottom: 20 }}>
            {post.title}
          </h1>
          <div style={{ color: "rgba(255,255,255,.65)", fontSize: ".85rem", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ color: "#fff", fontWeight: 600 }}>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* ── COVER ────────────────────────────────────────── */}
      <div style={{ background: post.cover, height: 280, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "7rem" }}>
        {post.icon}
      </div>

      {/* ── CONTENT ──────────────────────────────────────── */}
      <article className="sec" style={{ paddingTop: 60 }}>
        <div className="con" style={{ maxWidth: 740 }}>
          <p style={{ fontSize: "1.1rem", color: "var(--hd)", fontWeight: 500, lineHeight: 1.6, marginBottom: 40, paddingBottom: 24, borderBottom: "1px solid var(--bd)", fontFamily: "Raleway,sans-serif" }}>
            {post.excerpt}
          </p>

          {post.content.map((block, i) => {
            if (block.type === "h2") {
              return <h2 key={i} style={{ fontFamily: "Raleway,sans-serif", fontSize: "1.35rem", fontWeight: 700, color: "var(--hd)", marginTop: 36, marginBottom: 14 }}>{block.text}</h2>;
            }
            if (block.type === "p") {
              return <p key={i} style={{ fontSize: ".94rem", color: "var(--tx)", lineHeight: 1.85, marginBottom: 18 }}>{block.text}</p>;
            }
            if (block.type === "list") {
              return (
                <ul key={i} style={{ margin: "0 0 20px 0", paddingLeft: 20 }}>
                  {block.items.map((item, j) => (
                    <li key={j} style={{ fontSize: ".92rem", color: "var(--tx)", lineHeight: 1.75, marginBottom: 8 }}>{item}</li>
                  ))}
                </ul>
              );
            }
            return null;
          })}

          {/* Tags */}
          <div style={{ marginTop: 40, paddingTop: 28, borderTop: "1px solid var(--bd)", display: "flex", gap: 8, flexWrap: "wrap" }}>
            {post.tags.map((tag, i) => (
              <span key={i} style={{ fontFamily: "Raleway,sans-serif", fontSize: ".72rem", fontWeight: 600, padding: "5px 14px", background: "var(--bgalt)", border: "1px solid var(--bd)", borderRadius: 50, color: "var(--txl)" }}>
                #{tag.replace(/\s+/g, "")}
              </span>
            ))}
          </div>

          {/* Author bio */}
          <div style={{ marginTop: 40, padding: "24px 26px", background: "var(--bgalt)", borderRadius: 14, display: "flex", gap: 18, alignItems: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--gr)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Raleway,sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "#fff", flexShrink: 0 }}>
              {post.author.split(" ").map(n => n[0]).join("")}
            </div>
            <div>
              <div style={{ fontFamily: "Raleway,sans-serif", fontWeight: 700, color: "var(--hd)", marginBottom: 4 }}>Written by {post.author}</div>
              <div style={{ fontSize: ".82rem", color: "var(--txl)" }}>DenariStudio · Karachi, Pakistan</div>
            </div>
          </div>
        </div>
      </article>

      {/* ── RELATED ──────────────────────────────────────── */}
      <section className="sec sec-alt">
        <div className="con">
          <h2 className="hd" style={{ marginBottom: 28 }}>Continue <em>Reading</em></h2>
          <div className="blog-grid">
            {related.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="blog-card" style={{ textDecoration: "none" }}>
                <div className="blog-card-img" style={{ background: p.cover }}>
                  <span style={{ fontSize: "3rem" }}>{p.icon}</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-cat">{p.category}</div>
                  <h3>{p.title}</h3>
                  <div className="blog-meta">
                    <span>{p.date}</span>
                    <span>·</span>
                    <span>{p.readTime}</span>
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
          <h2 className="hd" style={{ color: "#fff" }}>Ready to <em>Apply These Insights?</em></h2>
          <p style={{ color: "rgba(255,255,255,.7)", marginTop: 12, marginBottom: 28 }}>Let's discuss your project — free consultation, 24-hour response.</p>
          <a href="/#contact" className="bp">Book Free Consultation →</a>
        </div>
      </section>
    </main>
  );
}
