import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Leaf, Truck } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-[var(--primary-green)] text-white overflow-hidden">
            {/* 2026 Modern Mesh Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/spices2.jpg"
                    alt="Luagro Background"
                    className="object-cover opacity-40 scale-105"
                    priority
                    fill
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-green)] via-[var(--primary-green)]/80 to-transparent" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-green)]/20 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse" />
            </div>

            <div className="section-container relative z-10 grid md:grid-cols-2 gap-16 items-center py-24">
                <div className="space-y-10 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-semibold tracking-wide animate-fade-in">
                        <Leaf className="w-4 h-4 text-[var(--accent-green)]" />
                        100% Organic & Sustainably Sourced
                    </div>

                    <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-[0.9] tracking-tight">
                        Fresh Made <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-green)] to-white">Easy</span>
                    </h1>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-8 items-center justify-center md:justify-start">
                        <Link href="/shop" className="w-full sm:w-auto btn-primary bg-[var(--accent-green)] text-[var(--primary-green)] px-10 py-5 text-xl font-black hover:scale-105 hover:shadow-[0_0_30px_rgba(151,201,60,0.4)] flex items-center justify-center transition-all duration-300">
                            Shop Now
                        </Link>
                        <div className="flex items-center gap-5">
                            <div className="flex -space-x-3">
                                {['/images/luagropic1 (8) 1 (1).png', '/images/luagropic1 (8) 1.png', '/images/luagropic1 (9) 1.png'].map((i, idx) => (
                                    <div key={idx} className="relative w-12 h-12 rounded-full border-4 border-[var(--primary-green)] overflow-hidden bg-gray-300 shadow-xl">
                                        <Image
                                            src={i}
                                            alt="Customer"
                                            width={100}
                                            height={100}
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="text-left">
                                <span className="block text-2xl font-black leading-none">350+</span>
                                <span className="text-sm font-medium opacity-60">Daily Goods</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-6 text-sm justify-center md:justify-start">
                        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl hover:bg-white/10 transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-[var(--accent-green)]" />
                            <span className="font-semibold">Always Fresh</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl hover:bg-white/10 transition-colors">
                            <Truck className="w-5 h-5 text-[var(--accent-green)]" />
                            <span className="font-semibold">60m Delivery</span>
                        </div>
                    </div>
                </div>

                <div className="relative group">
                    <div className="relative h-[400px] sm:h-[500px] hidden md:block md:h-[650px] w-full transform transition-transform duration-700 group-hover:scale-105 translate-z-0">
                        <Image
                            src="/images/image.png"
                            alt="Fresh products"
                            fill
                            className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
                            priority
                        />
                    </div>
                    {/* Decorative radial gradients */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-radial-gradient from-[var(--accent-green)]/30 to-transparent blur-[120px] opacity-40 animate-pulse" />
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                <div className="w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full" />
            </div>
        </section>
    );
}

