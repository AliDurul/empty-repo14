"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  discountPrice?: number;
  image: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  updateQty: (id: number, qty: number) => void;
  removeItem: (id: number) => void;
  clear: () => void;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "shoply_cart_v1";

export const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
      else {
        // dummy initial items
        setItems([
          { id: 101, name: "Premium Cotton Tee", price: 39, discountPrice: 29, image: "/on.jpg", quantity: 1 },
          { id: 202, name: "Wireless Smart Watch", price: 120, discountPrice: 99, image: "/arka.jpg", quantity: 2 },
        ]);
      }
    } catch (e) {
      console.warn("Failed to parse cart", e);
    }
  }, []);

  // Persist
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn("Failed to persist cart", e);
    }
  }, [items]);

  const addItem: CartContextValue["addItem"] = (item, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, quantity: p.quantity + qty } : p));
      }
      return [...prev, { ...item, quantity: qty }];
    });
  };

  const updateQty: CartContextValue["updateQty"] = (id, qty) => {
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: Math.max(1, qty) } : p)));
  };

  const removeItem: CartContextValue["removeItem"] = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const clear = () => setItems([]);

  const subtotal = items.reduce((sum, i) => sum + (i.discountPrice ?? i.price) * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, updateQty, removeItem, clear, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
