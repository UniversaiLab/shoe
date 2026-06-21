import { useStore } from "@/store/gridstore";

export default function SettingsPanel() {
  const {
    isSettingsOpen,
    toggleSettings,
    theme,
    setTheme,
  } = useStore();

  const backgrounds = [
    { label: "Topology", value: "topology" },
    {
      label: "Solid Dark",
      value: "color",
      color: "#050505",
    },
    {
      label: "Studio Light",
      value: "color",
      color: "#e5e5e5",
    },
    {
      label: "Neon Cyber",
      value: "image",
      img: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2029&auto=format&fit=crop",
    },
    {
      label: "Minimal Concrete",
      value: "image",
      img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  return (
    <div
      className={`pointer-events-auto absolute top-0 left-0 z-50 h-full w-full border-r border-white/10 bg-black/60 text-white backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] sm:w-[350px] ${isSettingsOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="relative flex h-full flex-col p-8">
        {/* Holographic accent line */}
        <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>

        <div className="mb-10 flex shrink-0 items-center justify-between">
          <h2 className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-2xl font-bold tracking-[0.2em] text-transparent uppercase">
            Settings
          </h2>
          <button
            onClick={toggleSettings}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-8 overflow-y-auto pr-2 pb-10 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-track]:bg-white/5">
          {/* Background Modes */}
          <div>
            <label className="mb-4 block text-xs tracking-[0.2em] text-white/50 uppercase">
              Environment
            </label>
            <div className="flex flex-col gap-3">
              {backgrounds.map((bg, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setTheme({
                      backgroundMode: bg.value,
                      backgroundColor:
                        bg.color || theme.backgroundColor,
                      backgroundImage:
                        bg.img || theme.backgroundImage,
                    });
                  }}
                  className={`group relative overflow-hidden rounded-xl border px-4 py-4 text-left text-sm transition-all duration-300 ${
                    theme.backgroundMode === bg.value &&
                    (bg.value === "topology" ||
                      (bg.value === "color" &&
                        theme.backgroundColor ===
                          bg.color) ||
                      (bg.value === "image" &&
                        theme.backgroundImage === bg.img))
                      ? `border-white/50 bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]`
                      : `border-white/5 hover:border-white/20 hover:bg-white/5`
                  }`}
                >
                  {bg.value === "image" && bg.img && (
                    <div
                      className="absolute inset-0 opacity-20 transition-opacity duration-300 group-hover:opacity-40"
                      style={{
                        backgroundImage: `url(${bg.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  )}
                  <span className="relative z-10 tracking-widest uppercase">
                    {bg.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Color Picker (Conditional) */}
          {theme.backgroundMode === "color" && (
            <div className="transition-opacity duration-300">
              <label className="mb-4 block text-xs tracking-[0.2em] text-white/50 uppercase">
                Custom Color
              </label>
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3">
                <input
                  type="color"
                  value={theme.backgroundColor}
                  onChange={(e) =>
                    setTheme({
                      backgroundColor: e.target.value,
                    })
                  }
                  className="h-10 w-10 cursor-pointer rounded border-0 bg-transparent p-0"
                />
                <span className="text-sm tracking-widest">
                  {theme.backgroundColor.toUpperCase()}
                </span>
              </div>
            </div>
          )}

          {/* Image URL Input (Conditional) */}
          {theme.backgroundMode === "image" && (
            <div className="transition-opacity duration-300">
              <label className="mb-4 block text-xs tracking-[0.2em] text-white/50 uppercase">
                Custom Image URL
              </label>
              <input
                type="text"
                value={theme.backgroundImage}
                onChange={(e) =>
                  setTheme({
                    backgroundImage: e.target.value,
                  })
                }
                placeholder="https://..."
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-sm tracking-wider transition-colors focus:border-white/50 focus:outline-none"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
