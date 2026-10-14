import { useEffect, useRef, useState } from "react";
import * as Ic from "./components/Icons.jsx";
import { links, handles, skills, skillsIntro, story, reviews, projects, certificates } from "./data.js";
import { themes } from "./themes.js";

const nav = [
  { id: "home", label: "Home", icon: Ic.Home }, { id: "about", label: "About", icon: Ic.User }, { id: "story", label: "Story", icon: Ic.Book },
  { id: "skills", label: "Skills", icon: Ic.Code }, { id: "certificates", label: "Certificates", icon: Ic.Award },
  { id: "projects", label: "Projects", icon: Ic.Layers }, { id: "contact", label: "Contact", icon: Ic.Mail },
];
const socials = [
  { name: "WhatsApp", href: links.whatsapp, handle: handles.whatsapp, icon: Ic.WhatsApp },
  { name: "GitHub", href: links.github, handle: handles.github, icon: Ic.Github },
  { name: "LinkedIn", href: links.linkedin, handle: handles.linkedin, icon: Ic.Linkedin },
  { name: "Instagram", href: links.instagram, handle: handles.instagram, icon: Ic.Instagram },
  { name: "YouTube", href: links.youtube, handle: handles.youtube, icon: Ic.Youtube },
  { name: "Vercel", href: links.vercel, handle: handles.vercel, icon: Ic.Vercel },
];

const Title = ({ small, children }) => (
  <div className="mb-10 text-center">
    {small && <span className="chip">{small}</span>}
    <h2 className="mt-3 text-3xl font-bold md:text-4xl">{children}</h2>
  </div>
);

function Carousel({ title, children }) {
  const ref = useRef(null);
  const go = (d) => ref.current && ref.current.scrollBy({ left: d * 300, behavior: "smooth" });
  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        <div className="flex gap-2">
          {[[-1, Ic.Left, "Previous"], [1, Ic.Right, "Next"]].map(([d, I, l]) => (
            <button key={l} onClick={() => go(d)} aria-label={l} className="card flex h-10 w-10 items-center justify-center hover:text-ac2"><I /></button>
          ))}
        </div>
      </div>
      <div ref={ref} className="flex snap-x gap-5 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>{children}</div>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { const t = localStorage.getItem("theme"); return themes.some((x) => x.id === t) ? t : themes[0].id; } catch { return themes[0].id; }
  });
  const [picker, setPicker] = useState(false);
  const [cert, setCert] = useState(null);
  const [active, setActive] = useState("home");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch { /* ignore */ }
  }, [theme]);
  useEffect(() => {
    const obs = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -50% 0px" });
    nav.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") { setCert(null); setPicker(false); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goContact = (e) => { e.preventDefault(); const el = document.getElementById("contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); setTimeout(() => { const f = document.getElementById("c-name"); if (f) f.focus({ preventScroll: true }); }, 600); };

  const send = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      let ok = false;
      try {
        const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
        ok = r.ok;
      } catch { ok = false; }
      if (!ok) {
        let d = {};
        try {
          const r2 = await fetch(`https://formsubmit.co/ajax/${links.email}`, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ ...form, _subject: `Portfolio message from ${form.name}`, _template: "table" }),
          });
          d = await r2.json();
        } catch { d = {}; }
        ok = d.success === true || d.success === "true";
      }
      if (ok) { setStatus("ok"); setForm({ name: "", email: "", message: "" }); }
      else {
        setStatus("err");
        window.location.href = `mailto:${links.email}?subject=${encodeURIComponent("Portfolio message from " + form.name)}&body=${encodeURIComponent(form.message + "\n\n" + form.name + " (" + form.email + ")")}`;
      }
    } catch { setStatus("err"); }
  };

  return (
    <div className="min-h-screen overflow-x-hidden pb-28">
      {/* HOME */}
      <section id="home" className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pt-14 md:grid-cols-2 md:pt-20">
        <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-dashed border-ac opacity-50" />
          <div className="absolute inset-6 rounded-full border border-dashed border-ac2 opacity-70" />
          <div className="absolute inset-12 rounded-full opacity-25 blur-2xl" style={{ background: "var(--ac)" }} />
          <img src="images/hero.jpg" alt="Tasbiha Khaan" className="relative h-[66%] w-[66%] rounded-full border-4 border-ac object-cover shadow-2xl" />
          <span className="absolute bottom-[8%] right-[2%] rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg" style={{ background: "var(--ac2)" }}>BSCS Student</span>
        </div>
        <div>
          <span className="chip inline-flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-green-500" />Available for work</span>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Hi, I'm <span className="grad-text">Tasbiha</span></h1>
          <p className="mt-3 text-lg font-medium text-actext">Frontend Developer · React JS</p>
          <p className="mt-4 max-w-lg text-muted">I am a frontend developer who turns ideas into fast, polished and fully responsive websites with React, Tailwind CSS and Firebase. I have completed my frontend journey and I am now building my backend skills, working hard every day toward becoming a complete full-stack developer. I care about clean code, thoughtful design and real results, and I am only getting started.</p>
          <div className="mt-6 flex gap-8">
            {[["100+", "Projects"], ["14+", "Certificates"], ["13+", "Students taught"]].map(([n, l]) => (
              <div key={l}><div className="text-2xl font-bold">{n}</div><div className="text-xs text-muted">{l}</div></div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="Tasbiha-Khaan-CV.pdf" download="Tasbiha-Khaan-CV.pdf" className="btn"><Ic.Download className="h-4 w-4" /> Download CV</a>
            <a href="#contact" onClick={goContact} className="btn-o"><Ic.Mail className="h-4 w-4" /> Hire Me</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto mt-28 max-w-6xl px-5">
        <div className="grid items-center gap-10 md:grid-cols-[320px_1fr]">
          <div className="relative mx-auto w-64 md:w-80">
            <div className="blob absolute -inset-3 opacity-60 blur-xl" style={{ background: "linear-gradient(135deg,var(--ac),var(--ac2))" }} />
            <img src="images/tasbiha.jpg" alt="Tasbiha Khaan" className="blob relative aspect-[4/5] w-full object-cover object-top shadow-2xl" />
          </div>
          <div>
            <span className="chip">ABOUT ME</span>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Turning Ideas Into <span className="grad-text">Digital Reality</span></h2>
            <p className="mt-4 text-muted">I started with design, composing layouts and visual identities in Canva, then moved into code so I could build the things I imagined myself. Every interface begins as a design decision and is built to hold up on every screen size.</p>
            <div className="mt-6 space-y-4">
              {[["01", "Frontend Development", "HTML, CSS, JavaScript, Bootstrap, React and Tailwind: semantic, responsive and fast."],
              ["02", "UI & Brand Design", "Layouts, social media kits and brand visuals designed in Canva."],
              ["03", "Going Full-Stack", "Frontend is solid, and backend skills are growing with Firebase and Python."]].map(([n, t, d]) => (
                <div key={n} className="flex gap-4"><span className="text-ac2">{n}</span><div><div className="font-semibold">{t}</div><div className="text-sm text-muted">{d}</div></div></div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="card px-4 py-2 text-sm">🎓 BSCS Student at Allama Iqbal Open University</span>
              <span className="card px-4 py-2 text-sm">🎯 Future goal: specialising in AI</span>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="mx-auto mt-28 max-w-6xl px-5">
        <Title small="MY STORY">The Journey <span className="grad-text">Behind the Work</span></Title>
        <div className="card mx-auto max-w-3xl space-y-4 p-6 md:p-10">
          {story.map((p, i) => (<p key={i} className={i === 0 ? "text-lg font-medium leading-relaxed" : "leading-relaxed text-muted"}>{p}</p>))}
          <p className="pt-2 font-semibold grad-text">Tasbiha Khaan</p>
        </div>
        <div className="mt-16">
          <Carousel title={<>What People <span className="grad-text">Say</span></>}>
            {reviews.map((r) => (
              <div key={r.name} className="card w-[290px] shrink-0 snap-start p-6">
                <div className="flex gap-0.5 text-ac2">{[0, 1, 2, 3, 4].map((s) => <Ic.Star key={s} className="h-4 w-4" />)}</div>
                <p className="mt-3 min-h-[120px] text-sm text-muted">"{r.text}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <img src={r.avatar} alt={r.name} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `images/reviews/${r.local}.svg`; }} className="h-11 w-11 rounded-full border-2 border-ac object-cover" />
                  <div><div className="font-semibold">{r.name}</div><div className="text-xs text-muted">{r.role}</div></div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto mt-28 max-w-6xl px-5">
        <Title small="SKILLS">Technologies I <span className="grad-text">work with</span></Title>
        <p className="mx-auto -mt-4 mb-10 max-w-3xl text-center text-muted">{skillsIntro}</p>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((s) => (
            <div key={s.name} className="card p-5">
              <div className="mb-2 flex justify-between font-medium"><span>{s.name}</span><span className="text-actext">{s.level}%</span></div>
              <div className="h-2.5 overflow-hidden rounded-full" style={{ background: "var(--chip)" }}>
                <div className="h-full rounded-full" style={{ width: `${s.level}%`, background: "linear-gradient(90deg,var(--ac),var(--ac2))" }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="mx-auto mt-28 max-w-6xl px-5">
        <Carousel title={<>Verified & <span className="grad-text">Completed</span></>}>
          {certificates.map((c) => (
            <button key={c.title} onClick={() => setCert(c)} className="card w-[270px] shrink-0 snap-start overflow-hidden text-left transition hover:-translate-y-1">
              <img src={c.image} alt={c.title} className="h-44 w-full bg-white object-contain" />
              <div className="p-4">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-1 text-xs text-muted">{c.issuer}</p>
                <p className="mt-1 text-xs text-actext">Completed {c.date}</p>
              </div>
            </button>
          ))}
        </Carousel>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto mt-28 max-w-6xl px-5">
        <Carousel title={<>My <span className="grad-text">Projects</span></>}>
          {projects.map((p) => (
            <div key={p.slug} className="card group w-[300px] shrink-0 snap-start overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-2 sm:w-[330px]">
              <div className="aspect-video w-full overflow-hidden"><img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
              <div className="p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 min-h-[60px] text-sm text-muted">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="chip font-mono">{t}</span>)}</div>
                <div className="mt-4 flex gap-5 text-sm font-medium">
                  <a href={p.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-ac2"><Ic.Github className="h-4 w-4" /> Code</a>
                  <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-ac2"><Ic.External className="h-4 w-4" /> Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto mt-28 max-w-6xl px-5">
        <Title>Get In <span className="grad-text">Touch</span></Title>
        <div className="grid gap-8 md:grid-cols-2">
          <form onSubmit={send} className="card space-y-4 p-6">
            <input id="c-name" required className="field" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input required type="email" className="field" placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <textarea required rows="5" className="field" placeholder="Your message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <button disabled={status === "sending"} className="btn"><Ic.Send className="h-4 w-4" /> {status === "sending" ? "Sending..." : "Send Message"}</button>
            {status === "ok" && <p className="text-sm text-green-500">Thank you! Your message has been sent and I will reply soon.</p>}
            {status === "err" && <p className="text-sm text-red-500">Your email app is opening with the message ready. If it does not, <a className="underline" href={`mailto:${links.email}?subject=${encodeURIComponent("Portfolio message from " + form.name)}&body=${encodeURIComponent(form.message + "\n\n" + form.name + " (" + form.email + ")")}`}>click here to send it by email</a>.</p>}
          </form>
          <div className="grid content-start gap-4 sm:grid-cols-2">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="card p-5 transition hover:-translate-y-1">
                <s.icon className="h-6 w-6 text-ac2" />
                <div className="mt-3 font-semibold">{s.name}</div>
                <div className="break-all text-xs text-muted">{s.handle}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-20 px-5 py-10 text-center" style={{ background: "linear-gradient(180deg, transparent, var(--chip))" }}>
        <div className="text-2xl font-bold grad-text">Tasbiha Khaan</div>
        <p className="text-sm text-muted">Frontend Developer</p>
        <div className="mt-4 flex justify-center gap-3">
          {socials.map((s) => (<a key={s.name} href={s.href} target="_blank" rel="noreferrer" title={s.name} className="card flex h-10 w-10 items-center justify-center hover:text-ac2"><s.icon className="h-4 w-4" /></a>))}
        </div>
        <p className="mt-4 text-xs text-muted">2026 Made with <span className="text-red-500">♥</span> by Tasbiha Khaan</p>
      </footer>

      {/* WHATSAPP */}
      <a href={links.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp" className="fixed bottom-24 left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-xl" style={{ background: "#25D366" }}>
        <span className="absolute inset-0 animate-ping rounded-full opacity-30" style={{ background: "#25D366" }} />
        <Ic.WhatsApp className="relative h-7 w-7" />
      </a>

      {/* THEME PICKER */}
      {picker && (
        <div className="panel fixed bottom-36 right-4 z-50 w-64 p-3">
          <div className="mb-2 px-1 text-xs font-semibold text-muted">CHOOSE A THEME (20)</div>
          <div className="grid max-h-[55vh] grid-cols-2 gap-2 overflow-y-auto">
            {themes.map((t) => (
              <button key={t.id} onClick={() => { setTheme(t.id); setPicker(false); }} className="flex items-center gap-2 rounded-xl border px-2 py-2 text-left text-xs" style={{ borderColor: theme === t.id ? "var(--ac)" : "var(--line)", background: theme === t.id ? "var(--chip)" : "transparent" }}>
                <span className="flex -space-x-1">{t.c.map((c) => <i key={c} className="h-4 w-4 rounded-full border border-white/40" style={{ background: c }} />)}</span>
                <span>{t.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      <button onClick={() => setPicker(!picker)} aria-label="Change theme" title="Change theme" className="card fixed bottom-24 right-4 z-50 flex h-11 w-11 items-center justify-center"><Ic.Palette /></button>

      {/* CERTIFICATE VIEWER */}
      {cert && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4" onClick={() => setCert(null)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setCert(null)} aria-label="Close" className="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-xl"><Ic.Close /></button>
            <img src={cert.image} alt={cert.title} className="max-h-[85vh] w-full rounded-xl bg-white object-contain" />
            <p className="mt-3 text-center text-sm text-white">{cert.title} · {cert.issuer}</p>
          </div>
        </div>
      )}

      <nav className="fixed bottom-4 left-1/2 z-50 flex w-[94%] max-w-xl -translate-x-1/2 items-center rounded-2xl px-2 py-2 shadow-2xl" style={{ background: "linear-gradient(90deg,var(--nav1),var(--nav2))" }}>
        {nav.map((n) => (
          <a key={n.id} href={`#${n.id}`} className={`flex flex-1 flex-col items-center gap-0.5 rounded-xl py-1.5 text-[10px] text-white sm:text-xs ${active === n.id ? "bg-white/20 font-semibold" : "opacity-75"}`}>
            <n.icon className="h-5 w-5" /><span className="hidden min-[400px]:block">{n.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
