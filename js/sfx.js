(function () {
  "use strict";
  let ctx = null;
  function ac() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ctx) ctx = new AC();
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }
  function env(ctx, start, dur, peak, type, freq, freq2) {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type || "sine";
    o.frequency.setValueAtTime(freq, start);
    if (freq2) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq2), start + dur);
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(peak, start + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    o.connect(g); g.connect(ctx.destination);
    o.start(start); o.stop(start + dur + 0.02);
  }
  function noiseBurst(ctx, start, dur, peak, lpf) {
    const n = ctx.createBufferSource();
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    n.buffer = buf;
    const f = ctx.createBiquadFilter();
    f.type = "lowpass"; f.frequency.value = lpf || 800;
    const g = ctx.createGain();
    g.gain.setValueAtTime(peak, start);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    n.connect(f); f.connect(g); g.connect(ctx.destination);
    n.start(start); n.stop(start + dur);
  }
  const api = {
    start() { ac(); },
    clap() {
      const c = ac(); if (!c) return;
      const t = c.currentTime;
      noiseBurst(c, t, 0.12, 0.22, 1800);
      env(c, t, 0.08, 0.05, "triangle", 400, 120);
    },
    pop() { const c = ac(); if (!c) return; env(c, c.currentTime, 0.1, 0.08, "sine", 880, 1320); },
    chime() {
      const c = ac(); if (!c) return;
      const t = c.currentTime;
      env(c, t, 0.35, 0.07, "sine", 880);
      env(c, t + 0.08, 0.4, 0.06, "sine", 1320);
    },
    coin() {
      const c = ac(); if (!c) return;
      const t = c.currentTime;
      env(c, t, 0.12, 0.08, "square", 980, 1400);
      env(c, t + 0.08, 0.18, 0.06, "square", 1400, 1800);
    },
    bell() { const c = ac(); if (!c) return; env(c, c.currentTime, 0.5, 0.09, "sine", 660, 520); },
    correct() {
      const c = ac(); if (!c) return;
      const t = c.currentTime;
      env(c, t, 0.12, 0.08, "sine", 523);
      env(c, t + 0.1, 0.2, 0.08, "sine", 784);
    },
    wrong() { const c = ac(); if (!c) return; env(c, c.currentTime, 0.25, 0.07, "sawtooth", 220, 140); },
    whoosh() { const c = ac(); if (!c) return; noiseBurst(c, c.currentTime, 0.28, 0.1, 600); },
    unlock() {
      const c = ac(); if (!c) return;
      const t = c.currentTime;
      [523, 659, 784, 1046].forEach((f, i) => env(c, t + i * 0.08, 0.22, 0.06, "sine", f));
    },
    tick() { const c = ac(); if (!c) return; env(c, c.currentTime, 0.05, 0.05, "square", 880, 880); },
    rain() {
      const c = ac(); if (!c) return;
      noiseBurst(c, c.currentTime, 0.6, 0.06, 1200);
    }
  };
  window.ChotuSfx = api;
})();
