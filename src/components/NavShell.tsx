"use client";

import { useEffect, useMemo, useState } from "react";

type Command = {
  id: string;
  label: string;
  description?: string;
  action: () => void;
  shortcut?: string;
};

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openInNewTab(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function NavShell({ children }: { children: React.ReactNode }) {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const commands: Command[] = useMemo(
    () => [
      {
        id: "explore-3d",
        label: "Go to Explore (3D)",
        description: "Tech stack & projects in 3D",
        action: () => scrollToSection("explore-3d"),
        shortcut: "G E",
      },
      {
        id: "case-studies",
        label: "Go to Case Studies",
        description: "Jump to recent AI and payment work",
        action: () => scrollToSection("case-studies"),
        shortcut: "G C",
      },
      {
        id: "work-history",
        label: "Go to Upwork Work History",
        description: "See full contract history and stats",
        action: () => scrollToSection("work-history"),
        shortcut: "G W",
      },
      {
        id: "how-i-work",
        label: "Go to How I Work",
        description: "See my process and philosophy",
        action: () => scrollToSection("how-i-work"),
        shortcut: "G H",
      },
      {
        id: "about",
        label: "Go to About Me",
        description: "Read my background and recent wins",
        action: () => scrollToSection("about"),
        shortcut: "G A",
      },
      {
        id: "open-upwork",
        label: "Open Upwork profile",
        description: "View full Upwork profile and reviews",
        action: () => openInNewTab("https://www.upwork.com/freelancers/waqasraza"),
        shortcut: "U",
      },
      {
        id: "open-github",
        label: "Open GitHub",
        description: "View code samples and repos",
        action: () => openInNewTab("https://github.com/waqasraza123"),
        shortcut: "G",
      },
      {
        id: "start-stripe-project",
        label: "Stripe project via Upwork",
        description: "Open Upwork to discuss Stripe, subscriptions, webhooks, Connect",
        action: () => openInNewTab("https://www.upwork.com/freelancers/waqasraza"),
      },
      {
        id: "start-rag-project",
        label: "AI / RAG project via Upwork",
        description: "Open Upwork to discuss chat, search, agents and reliability",
        action: () => openInNewTab("https://www.upwork.com/freelancers/waqasraza"),
      },
    ],
    [],
  );

  const filteredCommands = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (cmd) =>
        cmd.label.toLowerCase().includes(q) ||
        (cmd.description && cmd.description.toLowerCase().includes(q)),
    );
  }, [commands, query]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const isMac = navigator.platform.toLowerCase().includes("mac");
      const metaPressed = isMac ? event.metaKey : event.ctrlKey;
      if (metaPressed && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsPaletteOpen((prev) => !prev);
        setQuery("");
        setActiveIndex(0);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (!isPaletteOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsPaletteOpen(false);
        return;
      }
      if (!filteredCommands.length) return;
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((prev) =>
          prev === 0 ? filteredCommands.length - 1 : prev - 1,
        );
      } else if (event.key === "Enter") {
        event.preventDefault();
        const cmd = filteredCommands[activeIndex];
        if (cmd) {
          setIsPaletteOpen(false);
          cmd.action();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isPaletteOpen, filteredCommands, activeIndex]);

  return (
    <>
      {children}

      {/* Floating dock */}
      <div className="fixed bottom-5 right-4 z-40 md:bottom-6 md:right-6">
        <div className="flex items-center gap-3 rounded-full border border-gray-200/80 bg-white/90 backdrop-blur shadow-lg px-3 py-2">
          <button
            type="button"
            onClick={() =>
              openInNewTab("https://www.upwork.com/freelancers/waqasraza")
            }
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1.5 text-xs md:text-sm font-semibold shadow-md hover:shadow-lg hover:brightness-105 transition-all"
          >
            <span className="hidden md:inline">Hire on Upwork</span>
            <span className="md:hidden">Upwork</span>
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("case-studies")}
            className="hidden md:inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 bg-white text-gray-700 text-xs font-semibold hover:bg-gray-50 hover:shadow-sm transition"
            aria-label="Jump to case studies"
          >
            CS
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("work-history")}
            className="hidden md:inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 bg-white text-gray-700 text-xs font-semibold hover:bg-gray-50 hover:shadow-sm transition"
            aria-label="View Upwork proof"
          >
            UW
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("explore-3d")}
            className="hidden md:inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 bg-white text-gray-700 text-xs font-semibold hover:bg-gray-50 hover:shadow-sm transition"
            aria-label="Explore tech and projects in 3D"
          >
            3D
          </button>
          <button
            type="button"
            onClick={() => setIsPaletteOpen(true)}
            className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[11px] md:text-xs font-medium text-gray-700 hover:bg-gray-50 hover:shadow-sm transition"
            aria-label="Open command palette"
          >
            <span className="hidden md:inline text-gray-500">⌘K</span>
            <span className="md:hidden text-gray-500">Cmd</span>
            <span className="h-3 w-px bg-gray-200" />
            <span>Commands</span>
          </button>
        </div>
      </div>

      {/* Command palette */}
      {isPaletteOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/40 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsPaletteOpen(false)}
        >
          <div
            className="mt-20 md:mt-0 w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-gray-200/90 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <div className="text-xs font-semibold text-gray-500">
                Command palette
              </div>
              <div className="hidden md:flex items-center gap-1 text-[10px] text-gray-400">
                <span className="px-1.5 py-0.5 border border-gray-200 rounded bg-gray-50">
                  ⌘K
                </span>
                <span>to open</span>
              </div>
            </div>
            <div className="px-4 py-2 border-b border-gray-100">
              <input
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                placeholder="Type a command or jump to a section..."
                className="w-full border-none outline-none text-sm text-gray-900 placeholder:text-gray-400 py-2"
              />
            </div>
            <div className="max-h-72 overflow-y-auto py-2">
              {filteredCommands.length === 0 ? (
                <div className="px-4 py-3 text-sm text-gray-500">
                  No commands match “{query}”.
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => (
                  <button
                    key={cmd.id}
                    type="button"
                    onClick={() => {
                      setIsPaletteOpen(false);
                      cmd.action();
                    }}
                    className={`w-full flex items-start justify-between gap-3 px-4 py-2.5 text-left text-sm ${
                      idx === activeIndex
                        ? "bg-gray-50 text-gray-900"
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    <div>
                      <div className="font-medium">{cmd.label}</div>
                      {cmd.description && (
                        <div className="text-xs text-gray-500 mt-0.5">
                          {cmd.description}
                        </div>
                      )}
                    </div>
                    {cmd.shortcut && (
                      <div className="hidden md:flex items-center gap-1 text-[10px] text-gray-400">
                        {cmd.shortcut.split(" ").map((chunk) => (
                          <span
                            key={chunk}
                            className="px-1.5 py-0.5 border border-gray-200 rounded bg-gray-50"
                          >
                            {chunk}
                          </span>
                        ))}
                      </div>
                    )}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Simple intake modal */}
      {/* Intake modal removed: all primary actions now go directly to Upwork */}
    </>
  );
}

