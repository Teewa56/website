"use client";

import { useState } from "react";

const categories = ["Onions", "Vegetables", "Eggs", "Cooking Oil", "Palm Oil"];

export default function CategoryTabs() {
    const [active, setActive] = useState("Vegetables");

    return (
        <div className="section-container py-12">
            <h2 className="text-4xl font-bold text-center mb-8 text-[var(--primary-green)]">Trending Grocery Picks</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`px-8 py-3 rounded-xl font-semibold transition-all ${active === cat
                                ? "bg-[var(--primary-green)] text-white shadow-lg scale-105"
                                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100"
                            }`}
                    >
                        {cat}
                        <span className="block text-xs font-normal opacity-60">Organic Veggies</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
