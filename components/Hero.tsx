import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative py-13 bg-[var(--primary-green)] text-white overflow-hidden">
            <div className="section-container relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                        Fresh Made <p className="text-[var(--accent-green)]">Easy</p>
                    </h1>

                    <div className="flex flex-wrap gap-4 items-center">
                        <button className="btn-primary bg-green-400 px-8 py-2 text-lg">Shop Now</button>
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-2">
                                {['/images/luagropic1 (8) 1 (1).png', '/images/luagropic1 (8) 1.png', '/images/luagropic1 (9) 1.png'].map((i) => (
                                    <Image
                                        key={i}
                                        src={i}
                                        alt={i}
                                        width={100}
                                        height={100}
                                        className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"
                                    />
                                ))}
                            </div>
                            <div className="text-sm font-medium">
                                <span className="block text-xl font-bold">350+</span>
                                Goods available
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">✓ Always Fresh</div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">✓ Fast & Reliable Delivery</div>
                    </div>
                </div>

                <div className="relative h-[500px] w-full mt-10 md:mt-0">
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
