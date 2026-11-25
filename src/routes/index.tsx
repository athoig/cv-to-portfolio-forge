import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import cvAsset from "@/assets/cv.pdf.asset.json";
import {
  profile, interests, education, experience, mentoring, skills,
  publications, awards, certifications, references,
} from "@/content/cv";

const DESC =
  "Athoi Ganguly — Scientific Officer in clinical genomics at NeuroGen Healthcare. NGS analysis, CNV pipelines, ACMG reporting and published genomics research.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Athoi Ganguly — Clinical Genomics Scientist" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Athoi Ganguly — Clinical Genomics Scientist" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "Scientific Officer",
          worksFor: { "@type": "Organization", name: "NeuroGen Healthcare" },
          alumniOf: "University of Dhaka",
          email: `mailto:${profile.email}`,
          sameAs: [profile.linkedin, profile.scholar],
        }),
      },
    ],
  }),
  component: Index,
});

const NAV = [
  ["about", "About"], ["skills", "Skills"], ["education", "Education"], ["experience", "Experience"],
  ["research", "Research"], ["publications", "Publications"], ["achievements", "Achievements"], ["contact", "Contact"],
] as const;

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:p-2 focus:text-primary-foreground">Skip to content</a>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Main">
          <a href="#home" className="font-display text-lg font-semibold text-primary">A. Ganguly</a>
          <ul className="hidden gap-5 text-sm lg:flex">
            {NAV.map(([id, l]) => (
              <li key={id}><a href={`#${id}`} className="text-muted-foreground transition-colors hover:text-primary">{l}</a></li>
            ))}
          </ul>
          <a href={cvAsset.url} download="Athoi_Ganguly_CV.pdf" className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 lg:inline-block">Download CV</a>
          <button className="lg:hidden rounded-md border border-border px-3 py-1.5 text-sm" aria-expanded={open} aria-controls="mnav" onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </button>
        </nav>
        {open && (
          <ul id="mnav" className="border-t border-border bg-background px-5 py-3 lg:hidden">
            {NAV.map(([id, l]) => (
              <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-2">{l}</a></li>
            ))}
            <li><a href={cvAsset.url} download="Athoi_Ganguly_CV.pdf" className="block py-2 font-medium text-primary">Download CV</a></li>
          </ul>
        )}
      </header>

      <main id="main">
        <section id="home" className="helix-bg relative overflow-hidden bg-ink text-ink-foreground">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-24 pt-36 md:grid-cols-[1.4fr_1fr] md:pt-44">
            <div className="fade-up">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Clinical Genomics · Bioinformatics</p>
              <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] md:text-7xl">Athoi<br />Ganguly</h1>
              <p className="mt-6 max-w-xl text-lg text-ink-foreground/80">{profile.title}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={cvAsset.url} download="Athoi_Ganguly_CV.pdf" className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90">Download CV</a>
                <a href="#contact" className="rounded-md border border-ink-foreground/30 px-5 py-3 text-sm font-medium hover:bg-ink-foreground/10">Get in touch</a>
              </div>
              <div className="mt-8 flex gap-5 text-sm">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">LinkedIn ↗</a>
                <a href={profile.scholar} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">Google Scholar ↗</a>
              </div>
            </div>
            <dl className="fade-up grid grid-cols-2 gap-px self-end overflow-hidden rounded-lg bg-ink-foreground/15 font-mono">
              {[["3.88", "M.S. CGPA"], ["3", "Publications"], ["4", "Awards & fellowships"], ["7", "Certifications"]].map(([n, l]) => (
                <div key={l} className="bg-ink p-5">
                  <dt className="text-xs text-ink-foreground/60">{l}</dt>
                  <dd className="mt-1 font-display text-3xl text-accent">{n}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <Section id="about" n="01" title="About">
          <div className="grid gap-10 md:grid-cols-2">
            <p className="text-lg leading-relaxed">
              Scientific Officer at the Genetics and Genomic Medicine Centre, NeuroGen Healthcare, working across end-to-end clinical genomics — from DNA sample processing and NGS data analysis to ACMG-guided clinical reports and CNV pipeline development. Holds B.S. and M.S. degrees in Biochemistry and Molecular Biology from the University of Dhaka.
            </p>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Research interests</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {interests.map((i) => <li key={i} className="rounded-full border border-primary/30 px-3 py-1 text-sm text-primary">{i}</li>)}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="skills" n="02" title="Technical Skills" muted>
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group} className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-xl">{s.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((i) => <li key={i} className="rounded bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground">{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" n="03" title="Education">
          <div className="space-y-6">
            {education.map((e) => (
              <article key={e.degree} className="grid gap-4 border-t border-border pt-6 md:grid-cols-[220px_1fr]">
                <p className="font-mono text-sm text-muted-foreground">{e.period}</p>
                <div>
                  <h3 className="font-display text-2xl">{e.degree}</h3>
                  <p className="text-muted-foreground">{e.place}</p>
                  <p className="mt-2 font-medium text-primary">{e.grade}</p>
                  {e.thesis && <p className="mt-3"><span className="font-semibold">Thesis:</span> <em>{e.thesis}</em></p>}
                  <p className="mt-2 text-sm text-muted-foreground"><span className="font-semibold text-foreground">Coursework:</span> {e.coursework}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" n="04" title="Research Experience" muted>
          <ol className="relative space-y-10 border-l-2 border-primary/25 pl-8">
            {experience.map((x) => (
              <li key={x.role} className="relative">
                <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-background bg-accent" aria-hidden />
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{x.period}</p>
                <h3 className="mt-1 font-display text-2xl">{x.role}</h3>
                <p className="text-primary">{x.org}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed marker:text-accent">
                  {x.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="research" n="05" title="Mentoring & Research Projects">
          <div className="rounded-lg border-l-4 border-accent bg-card p-8">
            <h3 className="font-display text-xl">{mentoring.role}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{mentoring.text}</p>
          </div>
        </Section>

        <Section id="publications" n="06" title="Publications" muted>
          <ol className="space-y-5">
            {publications.map((p) => (
              <li key={p.doi} className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                <p className="font-mono text-xs text-accent-foreground"><span className="rounded bg-accent px-2 py-0.5">{p.year}</span> <span className="ml-2 text-muted-foreground">{p.venue}</span></p>
                <h3 className="mt-3 font-display text-xl leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground"><Highlight text={p.authors} /></p>
                <a href={p.doi} target="_blank" rel="noreferrer" className="mt-3 inline-block font-mono text-sm text-primary underline-offset-4 hover:underline">{p.doi.replace("https://", "")} ↗</a>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="achievements" n="07" title="Awards & Certifications">
          <div className="grid gap-10 md:grid-cols-2">
            <List title="Awards and Achievements" items={awards} />
            <List title="Certifications & Training" items={certifications} />
          </div>
        </Section>

        <section id="contact" className="helix-bg bg-ink text-ink-foreground">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <p className="font-mono text-xs text-accent">08</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Let’s connect</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Contact label="Email" href={`mailto:${profile.email}`} value={profile.email} />
              <Contact label="Phone" href={profile.phoneHref} value={profile.phone} />
              <Contact label="LinkedIn" href={profile.linkedin} value="athoi-ganguly" ext />
              <Contact label="Google Scholar" href={profile.scholar} value="View profile" ext />
            </div>
            <h3 className="mt-16 font-mono text-xs uppercase tracking-widest text-ink-foreground/60">References</h3>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              {references.map((r) => (
                <div key={r.email} className="border-t border-ink-foreground/20 pt-4 text-sm">
                  <p className="font-display text-lg">{r.name}</p>
                  <p className="text-ink-foreground/70">{r.role}, {r.org}</p>
                  <a href={`mailto:${r.email}`} className="text-accent hover:underline">{r.email}</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-ink py-6 text-center text-xs text-ink-foreground/50">© {new Date().getFullYear()} Athoi Ganguly</footer>
    </div>
  );
}

function Section({ id, n, title, muted, children }: { id: string; n: string; title: string; muted?: boolean; children: ReactNode }) {
  return (
    <section id={id} className={muted ? "bg-muted" : ""}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <p className="font-mono text-xs text-accent">{n}</p>
        <h2 className="mb-10 mt-2 font-display text-3xl font-semibold text-primary md:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function List({ title, items }: { title: string; items: { year: string; text: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-xl">{title}</h3>
      <ul className="mt-5 space-y-4">
        {items.map((a) => (
          <li key={a.text} className="flex gap-4 text-sm leading-relaxed">
            <span className="w-12 shrink-0 font-mono text-primary">{a.year}</span><span>{a.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Contact({ label, href, value, ext }: { label: string; href: string; value: string; ext?: boolean }) {
  return (
    <a href={href} {...(ext ? { target: "_blank", rel: "noreferrer" } : {})} className="rounded-lg border border-ink-foreground/20 p-5 transition-colors hover:border-accent">
      <p className="font-mono text-xs uppercase text-ink-foreground/60">{label}</p>
      <p className="mt-2 break-all font-medium">{value}{ext ? " ↗" : ""}</p>
    </a>
  );
}

function Highlight({ text }: { text: string }) {
  const parts = text.split("Ganguly, A.");
  return <>{parts.map((p, i) => <span key={i}>{p}{i < parts.length - 1 && <strong className="text-foreground">Ganguly, A.</strong>}</span>)}</>;
}
