import { useEffect, useRef } from "react";

// Transparent overlay on top of the original pastel background:
// multicolour ripples follow the pointer/finger, and the page glows a little brighter while scrolling.
const COLORS = ["330 85% 72%", "262 80% 75%", "20 95% 75%", "200 90% 70%", "160 70% 65%"];

const FluidBackground = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    type R = { x: number; y: number; r: number; life: number; c: string };
    const ripples: R[] = [];
    let last = 0, ci = 0, boost = 0;
    const add = (x: number, y: number, big = false) => {
      ripples.push({ x, y, r: big ? 6 : 2, life: 1, c: COLORS[ci++ % COLORS.length] });
      if (ripples.length > 60) ripples.shift();
    };
    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      if (now - last > 45) { add(e.clientX, e.clientY); last = now; }
    };
    const onDown = (e: PointerEvent) => { for (let i = 0; i < 3; i++) setTimeout(() => add(e.clientX, e.clientY, true), i * 120); };
    const onScroll = () => { boost = 1; };
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    let raf = 0;
    const isDark = () => document.documentElement.classList.contains("dark");
    const frame = () => {
      // Light mode gets gentler ripples and a brighter, softer glow; dark mode keeps full intensity.
      const dark = isDark();
      const alpha = dark ? 0.55 : 0.3;
      const widthK = dark ? 2.2 : 1.6;
      const blur = dark ? 14 : 7;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = ripples.length - 1; i >= 0; i--) {
        const p = ripples[i];
        p.r += 1.6; p.life -= 0.012;
        if (p.life <= 0) { ripples.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.strokeStyle = `hsl(${p.c} / ${p.life * alpha})`;
        ctx.lineWidth = widthK * p.life + 0.5;
        ctx.shadowColor = `hsl(${p.c} / ${p.life * alpha})`;
        ctx.shadowBlur = blur;
        ctx.stroke();
      }
      boost *= 0.96;
      if (glowRef.current) glowRef.current.style.opacity = String((dark ? 0.12 : 0.2) + boost * 0.28);
      raf = requestAnimationFrame(frame);
    };
    frame();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[5]">
      <div
        ref={glowRef}
        className="absolute inset-0 transition-opacity duration-300 mix-blend-soft-light"
        style={{ opacity: 0.12, background: "radial-gradient(circle at 30% 20%, hsl(0 0% 100%), transparent 60%), radial-gradient(circle at 75% 80%, hsl(0 0% 100%), transparent 55%)" }}
      />
      <canvas ref={ref} className="w-full h-full block" />
    </div>
  );
};

export default FluidBackground;
