import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Youtube, Play, Film, Sparkles, ExternalLink } from 'lucide-react';

const reels = [
  { id: 1, title: 'Cinematic Edit', tag: 'Cinematic', gradient: 'from-orange-500 via-pink-500 to-purple-600' },
  { id: 2, title: 'Beat Sync VFX', tag: 'VFX', gradient: 'from-fuchsia-500 via-rose-500 to-orange-500' },
  { id: 3, title: 'Travel Montage', tag: 'Travel', gradient: 'from-amber-500 via-orange-600 to-red-600' },
  { id: 4, title: 'Smooth Transitions', tag: 'Transitions', gradient: 'from-violet-600 via-indigo-600 to-blue-600' },
  { id: 5, title: 'Color Grade Reel', tag: 'Color', gradient: 'from-emerald-500 via-teal-500 to-cyan-600' },
  { id: 6, title: 'Brand Promo', tag: 'Promo', gradient: 'from-pink-600 via-red-500 to-yellow-500' },
];

const socials = [
  {
    label: '@pratham_buran',
    sub: 'Personal · Photos & Reels',
    href: 'https://www.instagram.com/pratham_buran',
    icon: Instagram,
    gradient: 'from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888]',
  },
  {
    label: '@prthm_fx',
    sub: 'Edits · VFX · Cinematic',
    href: 'https://www.instagram.com/prthm_fx',
    icon: Instagram,
    gradient: 'from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888]',
  },
  {
    label: '@prthm_fx',
    sub: 'YouTube · Long-form Edits',
    href: 'https://m.youtube.com/@prthm_fx',
    icon: Youtube,
    gradient: 'from-red-600 via-red-500 to-rose-600',
  },
];

const VideoEditing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="video-editing" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background flair */}
      <div className="floating-shape w-96 h-96 -top-20 -left-20 opacity-20" />
      <div className="floating-shape w-80 h-80 bottom-0 right-0 opacity-20" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5" /> Highlight
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            The Other Side — <span className="text-gradient">Video Editing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-5 text-base md:text-lg">
            Beyond the code, I craft cinematic reels, beat-synced edits, and bold visual stories.
            Step into my creative feed.
          </p>
        </motion.div>

        {/* Instagram-style phone preview */}
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
          {/* Phone frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-[320px]"
          >
            <div className="relative rounded-[2.5rem] border-[10px] border-secondary bg-background shadow-[0_20px_60px_-15px_hsl(32_100%_50%_/_0.4)] overflow-hidden">
              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-secondary rounded-full z-20" />

              {/* IG header */}
              <div className="flex items-center gap-3 px-4 pt-8 pb-3 border-b border-border">
                <div className="w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-sm font-black text-gradient">
                    PB
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold">prthm_fx</div>
                  <div className="text-[10px] text-muted-foreground">Edits · VFX · Cinematic</div>
                </div>
                <Instagram className="w-4 h-4 text-primary" />
              </div>

              {/* Grid */}
              <div className="grid grid-cols-3 gap-[2px] bg-border">
                {reels.map((reel, i) => (
                  <motion.a
                    key={reel.id}
                    href="https://www.instagram.com/prthm_fx"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.06 }}
                    className={`relative aspect-square bg-gradient-to-br ${reel.gradient} group overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors" />
                    <Play className="absolute top-2 right-2 w-3.5 h-3.5 text-white fill-white drop-shadow" />
                    <div className="absolute bottom-1 left-1.5 right-1.5 text-[9px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      {reel.title}
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Bottom CTA */}
              <a
                href="https://www.instagram.com/prthm_fx"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 text-xs font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                View Full Profile →
              </a>
            </div>
          </motion.div>

          {/* Right: socials + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 md:p-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card">
              <div className="flex items-center gap-3 mb-3">
                <Film className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Creative Director Mode</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I edit reels, montages and brand promos with a focus on rhythm, color, and motion.
                Adobe Premiere Pro, After Effects and CapCut are my playground.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                {[
                  { v: '50+', l: 'Reels Edited' },
                  { v: '2', l: 'IG Pages' },
                  { v: '1', l: 'YT Channel' },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-gradient">{s.v}</div>
                    <div className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mt-1">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label + s.sub}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shrink-0`}>
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-base group-hover:text-primary transition-colors truncate">
                      {s.label}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">{s.sub}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoEditing;
