// import React from "react";

// export default function Header() {
//   return (
//     <header
//       className="site-header"
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 50,
//         padding: "20px 32px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         pointerEvents: "none",
//       }}
//     >
//       {/* Logo */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: "12px",
//           pointerEvents: "auto",
//         }}
//       >
//         {/* Text logo */}
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "0px",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "6px",
//             }}
//           >
//             <span
//               style={{
//                 fontFamily:
//                   "'Helvetica Neue', Helvetica, Arial, sans-serif",
//                 fontSize: "15px",
//                 fontWeight: "700",
//                 letterSpacing: "0.12em",
//                 color: "#000",
//                 textTransform: "uppercase",
//               }}
//             >
//               PERFECT
//             </span>
//             <span
//               style={{
//                 fontFamily:
//                   "'Helvetica Neue', Helvetica, Arial, sans-serif",
//                 fontSize: "15px",
//                 fontWeight: "300",
//                 letterSpacing: "0.12em",
//                 color: "#000",
//                 textTransform: "uppercase",
//               }}
//             >
//               PAIR
//             </span>
//           </div>
//           <span
//             style={{
//               fontFamily:
//                 "'Helvetica Neue', Helvetica, Arial, sans-serif",
//               fontSize: "8px",
//               fontWeight: "400",
//               letterSpacing: "0.2em",
//               color: "#999",
//               textTransform: "uppercase",
//               marginTop: "-1px",
//             }}
//           >
//             Est. 2026
//           </span>
//         </div>
//       </div>

//       {/* Right side - minimal nav hints */}
//       <div
//         className="header-nav"
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: "24px",
//           pointerEvents: "auto",
//         }}
//       >
//         <NavItem label="BROWSE" number="01" />
//         <NavItem label="COLLECT" number="02" />
//         <Divider />
//         <QuoteText text="FOOTWEAR" />
//       </div>

//       {/* Mobile responsive styles */}
//       <style>{`
//         @media (max-width: 600px) {
//           .site-header {
//             padding: 16px 20px !important;
//           }
//           .header-nav {
//             display: none !important;
//           }
//         }
//       `}</style>
//     </header>
//   );
// }

// function NavItem({ label, number }) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "baseline",
//         gap: "6px",
//         cursor: "pointer",
//         opacity: 0.6,
//         transition: "opacity 0.2s ease",
//       }}
//       onMouseEnter={(e) =>
//         (e.currentTarget.style.opacity = 1)
//       }
//       onMouseLeave={(e) =>
//         (e.currentTarget.style.opacity = 0.6)
//       }
//     >
//       <span
//         style={{
//           fontFamily:
//             "'Helvetica Neue', Helvetica, Arial, sans-serif",
//           fontSize: "9px",
//           fontWeight: "400",
//           color: "#999",
//         }}
//       >
//         {number}
//       </span>
//       <span
//         style={{
//           fontFamily:
//             "'Helvetica Neue', Helvetica, Arial, sans-serif",
//           fontSize: "11px",
//           fontWeight: "500",
//           letterSpacing: "0.08em",
//           color: "#000",
//         }}
//       >
//         {label}
//       </span>
//     </div>
//   );
// }

// function Divider() {
//   return (
//     <div
//       style={{
//         width: "1px",
//         height: "12px",
//         background: "rgba(0,0,0,0.15)",
//       }}
//     />
//   );
// }

// function QuoteText({ text }) {
//   return (
//     <span
//       style={{
//         fontFamily:
//           "'Helvetica Neue', Helvetica, Arial, sans-serif",
//         fontSize: "11px",
//         fontWeight: "400",
//         letterSpacing: "0.05em",
//         color: "#000",
//         opacity: 0.4,
//       }}
//     >
//       "{text}"
//     </span>
//   );
// }

import { useStore } from "@/store/gridstore";

export default function Header() {
  const { cart, toggleCart, toggleSettings } = useStore();

  return (
    <header className="pointer-events-auto absolute top-0 left-0 z-40 flex w-full items-center justify-between p-6 sm:p-8">
      <div className="cursor-pointer text-xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-lg select-none sm:text-2xl">
        SNKRS
      </div>
      <div className="flex items-center gap-4 sm:gap-8">
        <button
          onClick={toggleSettings}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs tracking-widest text-white/70 uppercase shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-black/40 hover:text-white sm:px-5 sm:py-2.5"
        >
          <svg
            className="hidden h-4 w-4 sm:block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Settings
        </button>
        <button
          onClick={toggleCart}
          className="relative flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs tracking-widest text-white uppercase shadow-[0_0_10px_rgba(255,255,255,0.1)] backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] sm:px-5 sm:py-2.5"
        >
          <svg
            className="hidden h-4 w-4 sm:block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          Cart
          {cart.length > 0 && (
            <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-black/10 bg-white text-[10px] font-bold text-black shadow-lg">
              {cart.length}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
