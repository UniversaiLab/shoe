import { useStore } from "@/store/gridstore";

export default function CartPanel() {
  const {
    cart,
    isCartOpen,
    toggleCart,
    removeFromCart,
    clearCart,
  } = useStore();

  return (
    <div
      className={`pointer-events-auto absolute top-0 right-0 z-50 h-full w-full border-l border-white/10 bg-black/60 text-white backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] sm:w-[400px] ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="relative flex h-full flex-col p-8">
        {/* Holographic accent line */}
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>

        <div className="mb-10 flex shrink-0 items-center justify-between">
          <h2 className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-2xl font-bold tracking-[0.2em] text-transparent uppercase">
            Your Cart
          </h2>
          <button
            onClick={toggleCart}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-4 overflow-y-auto pr-2 pb-4 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-track]:bg-white/5">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-white/30">
              <svg
                className="h-16 w-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <p className="text-sm tracking-widest uppercase">
                Cart is empty
              </p>
            </div>
          ) : (
            cart.map((item, idx) => {
              // Ensure we extract the numerical ID for the image correctly
              const idStr =
                String(item.id).replace(/\D/g, "") || "000";
              const imagePath = `/shoes/shoe-${idStr.padStart(3, "0")}.png`;

              return (
                <div
                  key={idx}
                  className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-white/10 to-transparent p-2">
                      <img
                        src={imagePath}
                        alt={item.name}
                        className="h-full w-full object-contain drop-shadow-lg"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold tracking-widest uppercase">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs tracking-wider text-white/50">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(idx)}
                    className="p-2 text-xs tracking-widest text-white/30 uppercase transition-colors hover:text-red-400"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              );
            })
          )}
        </div>

        {cart.length > 0 && (
          <div className="shrink-0 border-t border-white/10 pt-6">
            <div className="mb-6 flex items-center justify-between text-lg">
              <span className="tracking-widest text-white/70 uppercase">
                Total
              </span>
              <span className="font-bold tracking-wider">
                $
                {cart.reduce(
                  (acc, item) => acc + item.price,
                  0
                )}
              </span>
            </div>
            <button
              onClick={() => {
                alert(
                  "Order confirmed! Proceeding to secure gateway..."
                );
                clearCart();
                toggleCart();
              }}
              className="w-full rounded-xl bg-white py-4 text-sm font-bold tracking-[0.2em] text-black uppercase shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-[1.02] hover:bg-gray-200"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
