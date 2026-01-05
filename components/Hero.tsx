import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative py-15 md:py-20 bg-[var(--primary-green)] text-white overflow-hidden">
            <div className="section-container relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 text-center md:text-left">
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight">
                        Fresh Made <span className="block text-[var(--accent-green)]">Easy</span>
                    </h1>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-6 items-center justify-center md:justify-start">
                        <button className="w-full sm:w-auto btn-primary bg-green-400 px-8 py-3 text-lg">Shop Now</button>
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-2">
                                {['/images/luagropic1 (8) 1 (1).png', '/images/luagropic1 (8) 1.png', '/images/luagropic1 (9) 1.png'].map((i) => (
                                    <Image
                                        key={i}
                                        src={i}
                                        alt="Customer avatar"
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 object-cover"
                                    />
                                ))}
                            </div>
                            <div className="text-sm font-medium text-left">
                                <span className="block text-xl font-bold leading-tight">350+</span>
                                Goods available
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 text-sm justify-center md:justify-start">
                        <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full whitespace-nowrap">✓ Always Fresh</div>
                        <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full whitespace-nowrap">✓ Fast & Reliable Delivery</div>
                    </div>
                </div>

                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full mt-8 md:mt-0">
                    <Image
                        src="/images/image.png"
                        alt="Fresh products"
                        fill
                        className="object-contain"
                        priority
                    />
                    {/* Green Circle background */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--accent-green)] rounded-full blur-[100px] opacity-20" />
                </div>
            </div>
        </section>
    );
}

