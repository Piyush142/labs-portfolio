import { useRef } from "react";
import CatalogList from "../components/CatalogList";
import HeadlineReveal from "../components/HeadlineReveal";
import { selectedClients, whatWeBuild, milestones } from "../data/about";
import { useReveal } from "../hooks/useReveal";
import "./about.css";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref, { stagger: 0.07 });

  return (
    <div ref={ref} className="about">
      <article className="about__intro">
        <p className="about__eyebrow">2469 Labs</p>
        <HeadlineReveal
          className="about__title"
          text="We're Rohit Singhal and Piyush Chouhan, the engineers and designers behind 2469 Labs."
        />

        <div className="about__lede">
          <p data-reveal>
            We met in 2016 as undergrads at IIT Roorkee, studying Industrial
            Engineering and pretending the syllabus would teach us how to ship
            software. It mostly didn't. We figured it out ourselves, mostly at
            night, mostly together, and somewhere along the way it stopped
            feeling like a hobby and started looking suspiciously like a career.
          </p>
          <p data-reveal>
            We work with a small number of companies at a time - usually one
            longer engagement, what we call a marathon, and a handful of smaller
            pieces, what we call sprints.
          </p>
          <p data-reveal>
            With code as our medium, our projects tend to start with a real
            problem and end with a tool the team actually opens on Monday
            morning. We've built CRMs for jewellery houses, learning
            environments for kids, AI products for general humans, and a number
            of things in the in-between.
          </p>
          <p data-reveal>
            Why “2469”? Officially, it was our flat number in Gurgaon: C-2469.
            Unofficially, “42069 Labs” felt slightly too honest.
          </p>
        </div>
      </article>

      <CatalogList
        title="Selected Clients & Projects"
        rows={selectedClients.map((c) => ({
          primary: c.name,
          secondary: c.note,
          trailing: c.year,
        }))}
      />

      <section className="about__what" data-reveal>
        <h2 className="catalog__title">What We Build</h2>
        <div className="about__columns">
          {whatWeBuild.map((b) => (
            <div key={b.title} className="about__column">
              <h3 className="about__column-title">{b.title}</h3>
              <p className="about__column-body">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CatalogList
        title="Timeline"
        rows={milestones.flatMap((m) =>
          m.entries.map((entry, i) => ({
            primary: i === 0 ? m.year : "",
            secondary: entry,
          })),
        )}
      />

      <section className="founders" data-reveal>
        <h2 className="catalog__title">Team</h2>

        <div className="founders__grid">
          <article className="founder" data-reveal>
            <h3 className="founder__name">Rohit Singhal</h3>
            <p className="founder__role">
              Design &amp; engineering. A wannabe benevolent dictator.
            </p>
            <p className="founder__bio">
              For money and fun, I do software design and engineering. I keep a
              list of passion projects too long to ever finish: e-readers, silly
              games, and whatever I started last Tuesday. I believe the world is
              a museum of passion projects, and I'm trying to leave a few
              behind.
            </p>
            <ul className="founder__links">
              <li>
                <a className="link" href="mailto:rsinghal757@gmail.com">
                  Email
                </a>
              </li>
              <li>
                <a className="link" href="https://github.com/rsinghal757/">
                  GitHub
                </a>
              </li>
              <li>
                <a className="link" href="https://x.com/0xRohitSinghal">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://www.linkedin.com/in/rsinghal757"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </article>

          <article className="founder" data-reveal>
            <h3 className="founder__name">Piyush Chouhan</h3>
            <p className="founder__role">
              Full-stack engineering. A wannabe malicious dictator.
            </p>
            <p className="founder__bio">
              I'm a full-stack developer with a long-standing curiosity about
              machine learning and a more recent one about Web3. Have a soft
              spot for Rust because someone said the borrow checker would make
              me a better person. I like building things that work, breaking
              them on purpose, and writing down what I learn.
            </p>
            <ul className="founder__links">
              <li>
                <a className="link" href="mailto:chouhanpiyush142@gmail.com">
                  Email
                </a>
              </li>
              <li>
                <a className="link" href="https://github.com/Piyush142">
                  GitHub
                </a>
              </li>
              <li>
                <a className="link" href="https://x.com/chouhanpiyush14">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://www.linkedin.com/in/piyush-chouhan-041050130/"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </article>

          <article className="founder" data-reveal>
            <h3 className="founder__name">Kartik Agarwal</h3>
            <p className="founder__role">
              Full-stack engineering. Software developer and systems learner.
            </p>
            <p className="founder__bio">
              I'm a full-stack developer from India, currently sharpening my
              DSA, system design, and MERN stack muscles. Most of my projects
              orbit practical web tools: React visualizers for sorting and
              pathfinding, exam platforms, real-time calling apps, and the kind
              of experiments that make the next hard thing feel slightly less
              mysterious.
            </p>
            <ul className="founder__links">
              <li>
                <a className="link" href="mailto:kartikagarwal698@gmail.com">
                  Email
                </a>
              </li>
              <li>
                <a className="link" href="https://github.com/kartik298">
                  GitHub
                </a>
              </li>
              <li>
                <a className="link" href="https://x.com/KARTIK06r9">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://www.linkedin.com/in/kartik-agarwal-sde/"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="about__close" data-reveal>
        <p>
          We've spoken at undergrad hackathons, written long emails to people we
          admire, and occasionally been paid to do what we'd be doing anyway.
          But most of the time, we're just a small team working on computers.
        </p>
        <p className="about__close-cta">
          <a href="mailto:hello@2469labs.com" className="link link--accent">
            hello@2469labs.com →
          </a>
        </p>
      </section>
    </div>
  );
}
