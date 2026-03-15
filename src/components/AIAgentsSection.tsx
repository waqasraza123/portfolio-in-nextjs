"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* 3D animated persons: geometric figures with CSS 3D + GSAP */
function Agents3DPerson({ variant = "left" }: { variant?: "left" | "right" }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const personRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const armRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const person = personRef.current;
    const arm = armRef.current;
    if (!wrap || !person || !arm) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          ok: "(prefers-reduced-motion: no-preference)",
        },
        (c) => {
          const prefersReduced = c.conditions?.reduce ?? false;
          if (prefersReduced) {
            gsap.set(person, { rotateY: 0, rotateX: 0, y: 0 });
            gsap.set(arm, { rotateZ: 0 });
            return;
          }
          gsap.set(wrap, { perspective: 700 });
          gsap.set(person, { transformOrigin: "50% 85%", rotateY: variant === "right" ? 180 : 0, rotateX: 4 });
          const float = gsap.timeline({ repeat: -1, yoyo: true, ease: "sine.inOut" });
          const delay = variant === "right" ? 0.9 : 0;
          float.to(person, { y: -8, duration: 1.8 }, delay).to(person, { y: 0, duration: 1.8 }, 1.8 + delay);
          const spin = gsap.timeline({ repeat: -1, ease: "none" });
          spin.to(person, { rotateY: (variant === "right" ? 180 : 0) + 360, duration: 14 });
          gsap.to(arm, {
            rotateZ: variant === "left" ? -22 : 22,
            transformOrigin: "50% 0%",
            duration: 0.9,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        },
      );
    }, wrap);
    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [variant]);

  return (
    <div ref={wrapRef} className="agents-3d-wrap" aria-hidden="true">
      <div ref={personRef} className={`agents-3d-person agents-3d-person--${variant}`}>
        <div ref={headRef} className="agents-3d-head" />
        <div ref={bodyRef} className="agents-3d-body" />
        <div ref={armRef} className="agents-3d-arm" />
      </div>
    </div>
  );
}

function Agents3DPeople() {
  return (
    <div className="agents-3d-people">
      <Agents3DPerson variant="left" />
      <Agents3DPerson variant="right" />
    </div>
  );
}

function AgentCodeLine({ children }: { children: string }) {
  return (
    <div className="hero-code-line">
      <span className="hero-code-gutter" aria-hidden="true" />
      <span className="hero-code-text">{children}</span>
    </div>
  );
}

function AgentsScene() {
  const rootRef = useRef<HTMLDivElement>(null);
  const queryCardRef = useRef<HTMLDivElement>(null);
  const responseCardRef = useRef<HTMLDivElement>(null);
  const connectorRef = useRef<HTMLDivElement>(null);
  const thinkingRef = useRef<HTMLDivElement>(null);
  const highlightRefs = useRef<Array<HTMLDivElement | null>>([]);
  const responseBlockRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dotRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const root = rootRef.current;
    const queryCard = queryCardRef.current;
    const responseCard = responseCardRef.current;
    const connector = connectorRef.current;
    const thinking = thinkingRef.current;

    if (!root || !queryCard || !responseCard || !connector || !thinking) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          ok: "(prefers-reduced-motion: no-preference)",
        },
        (c) => {
          const prefersReduced = c.conditions?.reduce ?? false;
          const highlights = highlightRefs.current.filter(Boolean);
          const responseBlocks = responseBlockRefs.current.filter(Boolean);
          const dots = dotRefs.current.filter(Boolean);

          ScrollTrigger.getById("agentsSceneScroll")?.kill();

          if (prefersReduced) {
            gsap.set(queryCard, { opacity: 1, x: 0, y: 0, rotate: 0 });
            gsap.set(responseCard, { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 });
            gsap.set(connector, { opacity: 0.5 });
            gsap.set(thinking, { opacity: 0.5 });
            gsap.set(highlights, { opacity: 0 });
            gsap.set(dots, { opacity: 0 });
            gsap.set(responseBlocks, { opacity: 1, y: 0, scale: 1 });
            return;
          }

          gsap.set(root, { perspective: 900 });
          gsap.set(queryCard, { transformOrigin: "50% 50%" });
          gsap.set(responseCard, { transformOrigin: "50% 50%" });
          gsap.set(thinking, { opacity: 0, y: 6 });
          gsap.set(highlights, { opacity: 0, scaleX: 0.18, transformOrigin: "0% 50%" });
          gsap.set(responseBlocks, { opacity: 0, y: 10, scale: 0.98 });
          gsap.set(dots, { opacity: 0, y: 0 });

          const loop = gsap.timeline({
            repeat: -1,
            repeatDelay: 0.7,
            defaults: { ease: "power2.out" },
          });

          loop
            .to(queryCard, { y: -4, rotate: -0.5, duration: 0.6 }, 0)
            .to(responseCard, { y: 4, rotate: 0.5, duration: 0.6 }, 0)
            .to(highlights, { opacity: 1, scaleX: 1, stagger: 0.14, duration: 0.35 }, 0.15)
            .to(highlights, { opacity: 0, stagger: 0.08, duration: 0.22 }, 0.95)
            .to(thinking, { opacity: 1, y: 0, duration: 0.3 }, 0.9)
            .to(thinking, { opacity: 0, y: -6, duration: 0.22 }, 1.45)
            .to(dots, { opacity: 1, stagger: 0.06, duration: 0.18 }, 1.0)
            .to(
              dots,
              { x: 160, opacity: 0, stagger: 0.06, duration: 0.85, ease: "power1.inOut" },
              1.05,
            )
            .to(responseCard, { scale: 1.02, duration: 0.3 }, 1.4)
            .to(responseBlocks, { opacity: 1, y: 0, scale: 1, stagger: 0.07, duration: 0.3 }, 1.45)
            .to(responseCard, { scale: 1, duration: 0.3 }, 2.1)
            .to(responseBlocks, { opacity: 0, y: 10, scale: 0.985, stagger: 0.05, duration: 0.22 }, 3.2)
            .to(queryCard, { y: 0, rotate: 0, duration: 0.5, ease: "power2.inOut" }, 3.25)
            .to(responseCard, { y: 0, rotate: 0, duration: 0.5, ease: "power2.inOut" }, 3.25)
            .set(dots, { x: 0 }, 3.35);

          ScrollTrigger.create({
            id: "agentsSceneScroll",
            trigger: root,
            start: "top top+=80",
            end: "bottom top+=100",
            scrub: true,
            onUpdate: (self) => {
              const p = self.progress;
              gsap.to(queryCard, { x: -8 * p, rotate: -1 * p, duration: 0.05, overwrite: true });
              gsap.to(responseCard, { x: 8 * p, rotate: 1 * p, duration: 0.05, overwrite: true });
              gsap.to(responseCard, { filter: `saturate(${1 + 0.2 * p})`, duration: 0.05, overwrite: true });
            },
          });
        },
      );
    }, root);

    return () => {
      mm.revert();
      ctx.revert();
      ScrollTrigger.getById("agentsSceneScroll")?.kill();
    };
  }, []);

  return (
    <div ref={rootRef} className="hero-code-ui-wrap agents-scene-wrap" aria-hidden="true">
      <div className="hero-code-ui-grid">
        <div ref={queryCardRef} className="hero-card hero-code-card agents-query-card">
          <div className="hero-card-top">
            <div className="hero-dots" aria-hidden="true">
              <span className="hero-dot bg-violet-400" />
              <span className="hero-dot bg-fuchsia-400" />
              <span className="hero-dot bg-sky-400" />
            </div>
            <div className="hero-card-title">query</div>
          </div>
          <div className="hero-code-body">
            <AgentCodeLine>Summarize this doc.</AgentCodeLine>
            <AgentCodeLine>Use RAG + citations.</AgentCodeLine>
            <AgentCodeLine>Refuse if uncertain.</AgentCodeLine>
            <div className="hero-code-highlights">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  ref={(el) => {
                    highlightRefs.current[i] = el;
                  }}
                  className="hero-code-highlight agents-highlight"
                />
              ))}
            </div>
          </div>
          <div className="hero-code-footer">
            <span className="hero-caret" />
            <span className="hero-code-muted">send</span>
          </div>
        </div>

        <div ref={connectorRef} className="hero-connector">
          <div ref={thinkingRef} className="hero-compile agents-thinking">
            tools ✓ cite ✓
          </div>
          <div className="hero-line" />
          <div className="hero-dots-travel" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                ref={(el) => {
                  dotRefs.current[i] = el;
                }}
                className="hero-travel-dot"
              />
            ))}
          </div>
        </div>

        <div ref={responseCardRef} className="hero-card hero-ui-card agents-response-card">
          <div className="hero-card-top">
            <div className="hero-card-title">Response</div>
            <div className="hero-pill">Grounded</div>
          </div>
          <div className="hero-ui-body">
            <div
              ref={(el) => {
                responseBlockRefs.current[0] = el;
              }}
              className="hero-ui-kpi agents-response-block"
            >
              <div className="hero-ui-kpi-label">Answer</div>
              <div className="hero-ui-kpi-value text-sm">Summary with sources.</div>
            </div>
            <div
              ref={(el) => {
                responseBlockRefs.current[1] = el;
              }}
              className="hero-ui-cardlet"
            >
              <div className="hero-ui-cardlet-title">Sources</div>
              <div className="hero-ui-cardlet-sub">doc.pdf §2.1, §3</div>
            </div>
            <div
              ref={(el) => {
                responseBlockRefs.current[2] = el;
              }}
              className="hero-ui-log"
            >
              <div className="hero-ui-log-row">
                <span className="hero-ui-badge ok">OK</span>
                <span>Retrieval</span>
              </div>
              <div className="hero-ui-log-row">
                <span className="hero-ui-badge ok">OK</span>
                <span>Citations attached</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AIAgentsSection() {
  return (
    <section
      id="ai-agents"
      className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-2">
          AI Agents
        </h2>
        <p className="text-base md:text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Orchestrated agent loops: RAG retrieval, tool-calling, citation grounding, and refusal policies in one pipeline.
        </p>
        <div className="agents-section-layout">
          <Agents3DPeople />
          <AgentsScene />
        </div>
      </div>
    </section>
  );
}
