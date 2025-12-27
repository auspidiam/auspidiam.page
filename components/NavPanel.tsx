"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Pos = { x: number; y: number };

const STORAGE_KEY = "navPanelPos_v1";

export default function NavPanel() {
  const [pos, setPos] = useState<Pos>({ x: 20, y: 20 });
  const draggingRef = useRef(false);
  const offsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Pos;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const width = 220;
        const height = 180;
        const x = Math.min(Math.max(parsed.x, 0), vw - width);
        const y = Math.min(Math.max(parsed.y, 0), vh - height);
        setPos({ x, y });
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(pos));
    } catch {
      /* ignore */
    }
  }, [pos]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const isHandle = target.closest("[data-handle='true']") !== null;
    if (!isHandle) return;

    draggingRef.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

    offsetRef.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const width = 220;
    const height = 180;

    let nx = e.clientX - offsetRef.current.x;
    let ny = e.clientY - offsetRef.current.y;

    nx = Math.min(Math.max(nx, 0), vw - width);
    ny = Math.min(Math.max(ny, 0), vh - height);

    setPos({ x: nx, y: ny });
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      role="navigation"
      aria-label="Site navigation"
      className="fixed z-40 rounded-2xl border border-black/15 bg-white/90 shadow-md backdrop-blur-sm"
      style={{
        left: pos.x,
        top: pos.y,
        width: 220,
        height: 180,
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <div
        data-handle="true"
        className="cursor-grab active:cursor-grabbing select-none px-3 py-2 border-b border-black/10 text-xs uppercase tracking-wider text-black/70"
      >
        nav
      </div>

      <div className="p-3 flex flex-col gap-2 text-black">
        <Link className="hover:opacity-70" href="/">
          argument.
        </Link>
        <Link className="hover:opacity-70" href="/about">
          about.
        </Link>
        <Link className="hover:opacity-70" href="/analysis">
          analysis.
        </Link>
        <Link className="hover:opacity-70" href="/audio">
          audio.
        </Link>
      </div>
    </div>
  );
}
