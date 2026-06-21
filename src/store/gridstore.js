import { create } from "zustand";

export const useStore = create((set) => ({
  // Original 3D Gallery State (Preserved)
  clicked: null,
  setClicked: (clicked) => set({ clicked }),

  // --- NEW E-COMMERCE & THEME STATE ---
  cart: [],
  isCartOpen: false,
  isSettingsOpen: false,

  collections: [
    "Nike",
    "New Balance",
    "Under $150",
    "Bingo",
  ],

  theme: {
    backgroundMode: "topology", // 'topology', 'color', 'image'
    backgroundColor: "#050505",
    backgroundImage:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2029&auto=format&fit=crop",
    accentColor: "#ffffff",
  },

  // Actions
  addToCart: (shoe) =>
    set((state) => ({ cart: [...state.cart, shoe] })),
  removeFromCart: (index) =>
    set((state) => ({
      cart: state.cart.filter((_, i) => i !== index),
    })),
  clearCart: () => set({ cart: [] }),

  addToCollection: (value) =>
    set((state) => {
      collection: [...state.collection, value];
    }),

  toggleCart: () =>
    set((state) => ({
      isCartOpen: !state.isCartOpen,
      isSettingsOpen: false,
    })),
  toggleSettings: () =>
    set((state) => ({
      isSettingsOpen: !state.isSettingsOpen,
      isCartOpen: false,
    })),

  setTheme: (themeUpdate) =>
    set((state) => ({
      theme: { ...state.theme, ...themeUpdate },
    })),
}));
