import Link from "next/link";

export default function Footer() {
    return (
        <footer id="footer" className="bg-[var(--primary-green)] text-white pt-20 pb-10">
            <div className="section-container grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
                <div className="space-y-6">
                    <div className="text-3xl font-bold">Luagro</div>
                    <p className="text-white/60 text-sm leading-relaxed">
                        Connecting you directly with the freshest farm produce. Quality you can trust, delivered to your doorstep.
                    </p>
                    <div className="flex gap-4">
                        {['fb', 'tw', 'inst'].map(s => (
                            <div key={s} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--accent-green)] transition-colors cursor-pointer capitalize">
                                {s}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-6">Navigation</h4>
                    <ul className="space-y-4 text-white/60">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link href="#shop" className="hover:text-white transition-colors">Shop</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-6">Quick Link</h4>
                    <ul className="space-y-4 text-white/60">
                        <li><Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                        <li><Link href="#blog" className="hover:text-white transition-colors">Blog</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-6">Information</h4>
                    <ul className="space-y-4 text-white/60 text-sm">
                        <li>(224) 555-0103</li>
                        <li>125 Main Street, 2nd Floor</li>
                        <li>support@luagro.com</li>
                    </ul>
                    <div className="mt-6 flex flex-col gap-2">
                        <input type="email" placeholder="Email" className="bg-white/10 rounded-full p-4 flex-1 outline-none text-sm" />
                        <button className="bg-[var(--accent-green)] text-white px-4 py-2 rounded-full text-sm font-bold">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="section-container pt-8 text-center text-white/40 text-sm">
                © {new Date().getFullYear()} Luagro. All rights reserved.
            </div>
        </footer>
    );
}
