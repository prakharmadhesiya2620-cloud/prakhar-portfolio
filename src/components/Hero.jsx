import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const titles = [
  "AI/ML Developer",
  "Python Developer",
  "Aspiring AI Engineer",
  "Generative AI Enthusiast",
];

const particlePositions = [
  { top: "11%", left: "18%", delay: 0.1, duration: 5.2 },
  { top: "21%", left: "83%", delay: 1.3, duration: 6.1 },
  { top: "42%", left: "8%", delay: 0.8, duration: 5.8 },
  { top: "58%", left: "93%", delay: 1.8, duration: 6.4 },
  { top: "81%", left: "18%", delay: 2.2, duration: 5.6 },
  { top: "88%", left: "76%", delay: 0.5, duration: 6.7 },
  { top: "8%", left: "58%", delay: 1.6, duration: 5.9 },
  { top: "69%", left: "6%", delay: 2.5, duration: 6.3 },
];

function AnimatedTitle() {
  const reduceMotion = useReducedMotion();
  const [titleIndex, setTitleIndex] = useState(0);
  const [visibleText, setVisibleText] = useState(titles[0]);

  useEffect(() => {
    if (reduceMotion) {
      setVisibleText(titles[0]);
      return undefined;
    }

    let timeout;
    const current = titles[titleIndex];
    if (visibleText === current) {
      timeout = window.setTimeout(
        () => setTitleIndex((index) => (index + 1) % titles.length),
        1900,
      );
    } else if (current.startsWith(visibleText)) {
      timeout = window.setTimeout(() => setVisibleText(current.slice(0, visibleText.length + 1)), 52);
    } else {
      timeout = window.setTimeout(() => setVisibleText(visibleText.slice(0, -1)), 26);
    }
    return () => window.clearTimeout(timeout);
  }, [reduceMotion, titleIndex, visibleText]);

  return (
    <span className="title-line" aria-label={titles[titleIndex]}>
      <span aria-hidden="true">{reduceMotion ? titles[0] : visibleText}</span>
      {!reduceMotion && <span className="typing-caret" aria-hidden="true" />}
    </span>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const orbPointerX = useMotionValue(0);
  const orbPointerY = useMotionValue(0);
  const orbX = useSpring(orbPointerX, { stiffness: 45, damping: 16 });
  const orbY = useSpring(orbPointerY, { stiffness: 45, damping: 16 });
  const tiltX = useSpring(pointerY, { stiffness: 65, damping: 18 });
  const tiltY = useSpring(pointerX, { stiffness: 65, damping: 18 });

  function handleVisualPointerMove(event) {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerX.set(x * 7);
    pointerY.set(y * -6);
    orbPointerX.set(x * 12);
    orbPointerY.set(y * 12);
  }

  function resetVisualPointer() {
    pointerX.set(0);
    pointerY.set(0);
    orbPointerX.set(0);
    orbPointerY.set(0);
  }

  const entrance = (delay) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section className="hero-section page-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <motion.div className="availability-pill" {...entrance(0.1)}>
            <span className="availability-pulse" />
            AVAILABLE FOR INTERNSHIP OPPORTUNITIES
          </motion.div>

          <motion.p className="hero-greeting eyebrow" {...entrance(0.18)}>
            HELLO, WORLD <span className="greeting-line" />
          </motion.p>
          <motion.h1 className="hero-title" id="hero-title" {...entrance(0.26)}>
            Hi, I&apos;m <span className="gradient-name">Prakhar</span>
            <br />
            Madhesiya<span className="hero-period">.</span>
          </motion.h1>
          <motion.div className="hero-role" {...entrance(0.34)}>
            <span className="role-prefix">I&apos;m a</span>
            <AnimatedTitle />
          </motion.div>
          <motion.p className="hero-description" {...entrance(0.42)}>
            Exploring artificial intelligence, building intelligent applications, and transforming ideas into practical solutions.
          </motion.p>

          <motion.div className="hero-actions" {...entrance(0.5)}>
            <a className="button button-primary" href="#projects">
              Explore my projects <ArrowRight size={17} />
            </a>
            <a
              className="button button-secondary"
              href="mailto:prakharmahdesiya2620@gmail.com?subject=Resume%20request"
            >
              Request resume <Mail size={16} />
            </a>
            <span className="resume-note">A resume file isn&apos;t available for download yet.</span>
          </motion.div>

          <motion.div className="hero-bottom" {...entrance(0.58)}>
            <div className="social-links" aria-label="Social profiles">
              <a
                className="social-link"
                href="https://github.com/prakharmadhesiya2620-cloud"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
              >
                <Github size={17} /><span>GitHub</span><ArrowUpRight size={12} />
              </a>
              <a
                className="social-link"
                href="https://www.linkedin.com/in/prakhar-madhesiya-180a873a3/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <Linkedin size={17} /><span>LinkedIn</span><ArrowUpRight size={12} />
              </a>
            </div>
            <a className="scroll-cue" href="#about">
              <span>SCROLL TO EXPLORE</span>
              <span className="scroll-cue-icon"><ArrowDown size={14} /></span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ rotateX: tiltX, rotateY: tiltY }}
          onPointerMove={handleVisualPointerMove}
          onPointerLeave={resetVisualPointer}
          transition={{ duration: reduceMotion ? 0 : 0.72, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-particles" aria-hidden="true">
            {particlePositions.map((particle, index) => (
              <motion.span
                className={`hero-particle ${index % 3 === 0 ? "hero-particle-violet" : ""}`}
                key={`${particle.top}-${particle.left}`}
                style={{ top: particle.top, left: particle.left }}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -13, 0],
                        x: [0, index % 2 === 0 ? 5 : -5, 0],
                        opacity: [0.18, 0.75, 0.18],
                        scale: [0.8, 1.1, 0.8],
                      }
                }
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          <div className="portrait-composition">
            <div className="portrait-corner portrait-corner-top" aria-hidden="true" />
            <div className="portrait-corner portrait-corner-bottom" aria-hidden="true" />
            <motion.div
              className="ai-orb"
              aria-hidden="true"
              style={{ x: orbX, y: orbY }}
            >
              <span className="ai-orb-ring ai-orb-ring-one" />
              <span className="ai-orb-ring ai-orb-ring-two" />
              <span className="ai-orb-ring ai-orb-ring-three" />
              <span className="ai-orb-core"><Sparkles size={21} strokeWidth={1.4} /></span>
              <span className="ai-orb-node ai-orb-node-one" />
              <span className="ai-orb-node ai-orb-node-two" />
              <span className="ai-orb-node ai-orb-node-three" />
            </motion.div>
            <div className="portrait-frame">
              <img
                className="portrait-image"
                src="/images/profile.png"
                alt="Professional portrait of Prakhar Madhesiya"
                fetchPriority="high"
              />
            </div>
            <div className="portrait-caption" aria-hidden="true">
              <span className="portrait-caption-mark"><i /><i /><i /></span>
              <span>PRAKHAR MADHESIYA</span>
              <span className="portrait-caption-divider" />
              <span>AI / ML</span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="hero-rule">
        <span>AI / MACHINE LEARNING</span><i /><span>SOFTWARE DEVELOPMENT</span><i /><span>LUCKNOW, INDIA</span>
      </div>
    </section>
  );
}
