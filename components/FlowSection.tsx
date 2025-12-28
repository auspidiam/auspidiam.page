"use client";

import { useEffect, useRef, useState } from "react";

type PathState = {
  left: string;
  right: string;
};

export default function FlowSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const rootsRef = useRef<HTMLSpanElement>(null);
  const sproutsRef = useRef<HTMLSpanElement>(null);
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const rightBoxRef = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<PathState>({ left: "", right: "" });

  useEffect(() => {
    const updatePaths = () => {
      const container = containerRef.current;
      const svg = svgRef.current;
      const roots = rootsRef.current;
      const sprouts = sproutsRef.current;
      const leftBox = leftBoxRef.current;
      const rightBox = rightBoxRef.current;

      if (!container || !svg || !roots || !sprouts || !leftBox || !rightBox) {
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const rootsRect = roots.getBoundingClientRect();
      const sproutsRect = sprouts.getBoundingClientRect();
      const leftRect = leftBox.getBoundingClientRect();
      const rightRect = rightBox.getBoundingClientRect();

      const width = containerRect.width;
      const height = containerRect.height;

      svg.setAttribute("width", `${width}`);
      svg.setAttribute("height", `${height}`);
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

      const startRoots = {
        x: rootsRect.left + rootsRect.width / 2 - containerRect.left,
        y: rootsRect.bottom - containerRect.top + 6,
      };

      const startSprouts = {
        x: sproutsRect.left + sproutsRect.width / 2 - containerRect.left,
        y: sproutsRect.bottom - containerRect.top + 6,
      };

      const endLeft = {
        x: leftRect.left + leftRect.width / 2 - containerRect.left,
        y: leftRect.top - containerRect.top,
      };

      const endRight = {
        x: rightRect.left + rightRect.width / 2 - containerRect.left,
        y: rightRect.top - containerRect.top,
      };

      const verticalGapLeft = endLeft.y - startRoots.y;
      const verticalGapRight = endRight.y - startSprouts.y;

      const baseStrengthLeft = Math.max(40, Math.abs(endLeft.x - startRoots.x) * 0.3);
      const baseStrengthRight = Math.max(40, Math.abs(endRight.x - startSprouts.x) * 0.3);

      const leftPath = `M ${startRoots.x} ${startRoots.y} C ${startRoots.x - baseStrengthLeft * 0.35} ${
        startRoots.y + verticalGapLeft * 0.25
      }, ${endLeft.x - baseStrengthLeft * 0.2} ${startRoots.y + verticalGapLeft * 0.75}, ${endLeft.x} ${endLeft.y}`;

      const rightPath = `M ${startSprouts.x} ${startSprouts.y} C ${startSprouts.x + baseStrengthRight * 0.4} ${
        startSprouts.y + verticalGapRight * 0.2
      }, ${endRight.x + baseStrengthRight * 0.25} ${startSprouts.y + verticalGapRight * 0.75}, ${endRight.x} ${endRight.y}`;

      setPaths({ left: leftPath, right: rightPath });
    };

    const handleResize = () => updatePaths();

    updatePaths();
    window.addEventListener("resize", handleResize);

    const resizeObserver = new ResizeObserver(() => updatePaths());
    [containerRef.current, rootsRef.current, sproutsRef.current, leftBoxRef.current, rightBoxRef.current].forEach(
      (el) => {
        if (el) resizeObserver.observe(el);
      },
    );

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative isolate flex flex-col gap-10">
      <svg
        ref={svgRef}
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden
        role="presentation"
      >
        <path d={paths.left} className="stroke-black" fill="none" strokeWidth={2} strokeLinecap="round" />
        <path d={paths.right} className="stroke-black" fill="none" strokeWidth={2} strokeLinecap="round" />
      </svg>

      <p className="max-w-4xl text-left text-lg leading-relaxed">
        Auspidiam is the creative force whose <span ref={rootsRef} className="inline-block">roots</span> span{" "}
        <a href="https://en.wikipedia.org/wiki/Himalayas" target="_blank" rel="noopener noreferrer">
          mountains
        </a>{" "}
        and <span ref={sproutsRef} className="inline-block">sprouts</span>{" "}
        <a href="https://plato.stanford.edu/entries/determinism-causal/" target="_blank" rel="noopener noreferrer">
          will
        </a>{" "}
        the air.
      </p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div
          ref={leftBoxRef}
          className="h-[420px] overflow-y-auto border border-gray-700 bg-white p-4 shadow-sm"
        >
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Roots sink deep and gather stories of stone, ice, and earth. Each line that sprouts from these tales is a
              thread that binds what is seen and what is remembered.
            </p>
            <p>
              Within these walls, sketches, notes, and fragments collect. Scroll to wander through the fragments and
              linger where imagination pauses.
            </p>
            <p>
              As ideas branch, they invite new paths and questions. Let the overflow be a reminder that exploration is a
              journey of abundance.
            </p>
            <p>
              The page continues with echoes of mountains, clouds, and wind—each phrase stacking atop the last until the
              box fills and invites a quiet scroll downward.
            </p>
          </div>
        </div>

        <div
          ref={rightBoxRef}
          className="h-[420px] overflow-y-auto border border-gray-700 bg-white p-4 shadow-sm"
        >
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Sprouts reach for the air, curling toward whatever light arrives. Their curves mirror the lines above—hand
              drawn, imperfect, alive.
            </p>
            <p>
              Here, drafts unfurl into possibilities. Some passages stay, some are crossed out, but all are kept long
              enough to see where they may bend.
            </p>
            <p>
              Scroll to follow the ink as it loops around new notions. Every overflow is an invitation to keep tracing
              the motion.
            </p>
            <p>
              The story keeps stacking, gathering pace and volume, inviting the reader to wander through the tall,
              living notes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
