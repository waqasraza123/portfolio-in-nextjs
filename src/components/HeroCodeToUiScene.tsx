"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CodeLine({ children }: { children: string }) {
  return (
    <div className="hero-code-line">
      <span className="hero-code-gutter" aria-hidden="true" />
      <span className="hero-code-text">{children}</span>
    </div>
  );
}

export default function HeroCodeToUiScene() {
  const rootRef = useRef<HTMLDivElement>(null);
  const codeCardRef = useRef<HTMLDivElement>(null);
  const uiCardRef = useRef<HTMLDivElement>(null);
  const connectorRef = useRef<HTMLDivElement>(null);
  const compileRef = useRef<HTMLDivElement>(null);
  const highlightRefs = useRef<Array<HTMLDivElement | null>>([]);
  const uiBlockRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dotRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const root = rootRef.current;
    const codeCard = codeCardRef.current;
    const uiCard = uiCardRef.current;
    const connector = connectorRef.current;
    const compile = compileRef.current;

    if (!root || !codeCard || !uiCard || !connector || !compile) return;

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
          const uiBlocks = uiBlockRefs.current.filter(Boolean);
          const dots = dotRefs.current.filter(Boolean);

          ScrollTrigger.getById("heroCodeToUiScroll")?.kill();

          if (prefersReduced) {
            gsap.set(codeCard, { opacity: 1, x: 0, y: 0, rotate: 0 });
            gsap.set(uiCard, { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 });
            gsap.set(connector, { opacity: 0.5 });
            gsap.set(compile, { opacity: 0 });
            gsap.set(highlights, { opacity: 0 });
            gsap.set(dots, { opacity: 0 });
            gsap.set(uiBlocks, { opacity: 1, y: 0, scale: 1 });
            return;
          }

          gsap.set(root, { perspective: 900 });
          gsap.set(codeCard, { transformOrigin: "50% 50%" });
          gsap.set(uiCard, { transformOrigin: "50% 50%" });
          gsap.set(compile, { opacity: 0, y: 6 });
          gsap.set(highlights, { opacity: 0, scaleX: 0.18, transformOrigin: "0% 50%" });
          gsap.set(uiBlocks, { opacity: 0, y: 10, scale: 0.98 });
          gsap.set(dots, { opacity: 0, y: 0 });

          const loop = gsap.timeline({
            repeat: -1,
            repeatDelay: 0.6,
            defaults: { ease: "power2.out" },
          });

          loop
            .to(codeCard, { y: -4, rotate: -0.6, duration: 0.7 }, 0)
            .to(uiCard, { y: 4, rotate: 0.6, duration: 0.7 }, 0)
            .to(highlights, { opacity: 1, scaleX: 1, stagger: 0.12, duration: 0.35 }, 0.2)
            .to(highlights, { opacity: 0, stagger: 0.09, duration: 0.25 }, 1.0)
            .to(compile, { opacity: 1, y: 0, duration: 0.35 }, 0.95)
            .to(compile, { opacity: 0, y: -6, duration: 0.25 }, 1.55)
            .to(dots, { opacity: 1, stagger: 0.08, duration: 0.2 }, 1.05)
            .to(
              dots,
              {
                x: 160,
                opacity: 0,
                stagger: 0.08,
                duration: 0.9,
                ease: "power1.inOut",
              },
              1.1,
            )
            .to(uiCard, { scale: 1.02, duration: 0.35 }, 1.45)
            .to(uiBlocks, { opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.35 }, 1.5)
            .to(uiCard, { scale: 1, duration: 0.35 }, 2.2)
            .to(uiBlocks, { opacity: 0, y: 10, scale: 0.985, stagger: 0.06, duration: 0.25 }, 3.3)
            .to(codeCard, { y: 0, rotate: 0, duration: 0.6, ease: "power2.inOut" }, 3.35)
            .to(uiCard, { y: 0, rotate: 0, duration: 0.6, ease: "power2.inOut" }, 3.35)
            .set(dots, { x: 0 }, 3.45);

          ScrollTrigger.create({
            id: "heroCodeToUiScroll",
            trigger: root,
            start: "top top+=60",
            end: "bottom top+=80",
            scrub: true,
            onUpdate: (self) => {
              const p = self.progress; // 0..1
              gsap.to(codeCard, { x: -10 * p, rotate: -1.2 * p, duration: 0.05, overwrite: true });
              gsap.to(uiCard, { x: 10 * p, rotate: 1.2 * p, duration: 0.05, overwrite: true });
              gsap.to(uiCard, { filter: `saturate(${1 + 0.25 * p})`, duration: 0.05, overwrite: true });
            },
          });
        },
      );
    }, root);

    return () => {
      mm.revert();
      ctx.revert();
      ScrollTrigger.getById("heroCodeToUiScroll")?.kill();
    };
  }, []);

  return (
    <div ref={rootRef} className="hero-code-ui-wrap" aria-hidden="true">
      <div className="hero-code-ui-grid">
        <div ref={codeCardRef} className="hero-card hero-code-card">
          <div className="hero-card-top">
            <div className="hero-dots" aria-hidden="true">
              <span className="hero-dot bg-red-300" />
              <span className="hero-dot bg-amber-300" />
              <span className="hero-dot bg-emerald-300" />
            </div>
            <div className="hero-card-title">spec.ts</div>
          </div>

          <div className="hero-code-body">
            <CodeLine>{`const plan = defineProduct({`}</CodeLine>
            <CodeLine>{`  auth: "JWT + RBAC",`}</CodeLine>
            <CodeLine>{`  payments: "Stripe + webhooks",`}</CodeLine>
            <CodeLine>{`  ai: "RAG + guardrails",`}</CodeLine>
            <CodeLine>{`  ops: "retries + idempotency"`}</CodeLine>
            <CodeLine>{`});`}</CodeLine>

            <div className="hero-code-highlights">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  ref={(el) => {
                    highlightRefs.current[i] = el;
                  }}
                  className="hero-code-highlight"
                />
              ))}
            </div>
          </div>

          <div className="hero-code-footer">
            <span className="hero-caret" />
            <span className="hero-code-muted">shipping…</span>
          </div>
        </div>

        <div ref={connectorRef} className="hero-connector">
          <div ref={compileRef} className="hero-compile">
            build ✓ deploy ✓
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

        <div ref={uiCardRef} className="hero-card hero-ui-card">
          <div className="hero-card-top">
            <div className="hero-card-title">Dashboard</div>
            <div className="hero-pill">Production</div>
          </div>

          <div className="hero-ui-body">
            <div
              ref={(el) => {
                uiBlockRefs.current[0] = el;
              }}
              className="hero-ui-kpi"
            >
              <div className="hero-ui-kpi-label">Revenue</div>
              <div className="hero-ui-kpi-value">$48.2K</div>
              <div className="hero-ui-bars">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="hero-ui-grid2">
              <div
                ref={(el) => {
                  uiBlockRefs.current[1] = el;
                }}
                className="hero-ui-cardlet"
              >
                <div className="hero-ui-cardlet-title">Webhooks</div>
                <div className="hero-ui-cardlet-sub">idempotent retries</div>
              </div>
              <div
                ref={(el) => {
                  uiBlockRefs.current[2] = el;
                }}
                className="hero-ui-cardlet"
              >
                <div className="hero-ui-cardlet-title">RAG</div>
                <div className="hero-ui-cardlet-sub">guardrails on</div>
              </div>
            </div>

            <div
              ref={(el) => {
                uiBlockRefs.current[3] = el;
              }}
              className="hero-ui-log"
            >
              <div className="hero-ui-log-row">
                <span className="hero-ui-badge ok">OK</span>
                <span>Checkout created</span>
              </div>
              <div className="hero-ui-log-row">
                <span className="hero-ui-badge ok">OK</span>
                <span>Embedding cached</span>
              </div>
              <div className="hero-ui-log-row">
                <span className="hero-ui-badge warn">Retry</span>
                <span>Webhook delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

