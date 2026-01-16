"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "James Carter",
        role: "Regular Customer",
        text: "Everything is always fresh and tastes amazing. This store really helps me stay on track with my healthy lifestyle!",
        image: "/images/luagropic1 (8) 1 (1).png"
    },
    {
        name: "Sarah Williams",
        role: "Chef",
        text: "The quality of the meats and vegetables is unparalleled. I source all my kitchen basics from Luagro now.",
        image: "/images/luagropic1 (8) 1.png"
    },
    {
        name: "Michael Chen",
        role: "Fitness Coach",
        text: "Fast delivery and premium quality. The grains are especially clean and high-grade. Highly recommended!",
        image: "/images/luagropic1 (9) 1.png"
    }
];

export default function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 3000); // 3 seconds fade slide
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-emerald-900/5">
            <div className="section-container">
                <div className="max-w-4xl mx-auto shadow-2xl rounded-[40px] md:rounded-[100px] bg-white overflow-hidden flex flex-col md:flex-row items-center">
                    <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px]">
                        {testimonials.map((t, i) => (
                            <Image
                                key={i}
                                src={t.image}
                                alt={t.name}
                                fill
                                className={`object-cover transition-opacity duration-1000 ${i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            />
                        ))}
                    </div>
                    <div className="w-full md:w-1/2 p-12 md:p-20 space-y-8 relative">
                        {/* Large decorative quote */}
                        <Quote className="absolute top-10 right-10 w-20 h-20 text-emerald-900/5 rotate-180" />

                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-green)] relative z-10">What Our Happy Customers Say</h2>

                        <div className="relative h-48 md:h-56">
                            {testimonials.map((t, i) => (
                                <div
                                    key={i}
                                    className={`absolute inset-0 transition-all duration-1000 flex flex-col justify-center ${i === currentIndex ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-4 z-0'}`}
                                >
                                    <p className="text-xl md:text-2xl font-medium italic leading-relaxed text-gray-700">
                                        "{t.text}"
                                    </p>
                                    <div className="mt-8 flex items-center gap-4">
                                        <div className="text-left">
                                            <div className="font-bold text-lg">{t.name}</div>
                                            <div className="text-sm opacity-60">{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pulse indicators */}
                        <div className="flex gap-3 justify-center md:justify-start">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-3 h-3 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-10 bg-[var(--accent-green)]' : 'bg-gray-200'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
