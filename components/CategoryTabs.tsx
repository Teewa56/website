"use client";

import { useState } from "react";

const categories = ["Onions", "Vegetables", "Eggs", "Cooking Oil", "Palm Oil"];

export default function CategoryTabs() {
    const [active, setActive] = useState("Vegetables");

    return (
        <div className="section-container py-12 md:py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[var(--primary-green)] px-4">Trending Grocery Picks</h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`flex-1 min-w-[140px] sm:min-w-[160px] md:flex-none px-4 md:px-8 py-3 rounded-xl font-semibold transition-all text-sm md:text-base ${active === cat
                            ? "bg-[var(--primary-green)] text-white shadow-lg scale-105"
                            : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100"
                            }`}
                    >
                        {cat}
                        <span className="block text-[10px] md:text-xs font-normal opacity-60">Organic Veggies</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

