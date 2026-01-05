import Image from "next/image";

interface ProductProps {
    name: string;
    price: string;
    image: string;
    category: string;
    isSpecial?: boolean;
}

export default function ProductCard({ name, price, image, category, isSpecial }: ProductProps) {
    return (
        <div className={`min-w-[280px] group relative bg-white rounded-3xl p-6 transition-all hover:shadow-2xl snap-start ${isSpecial ? 'bg-emerald-800 text-white' : 'text-[var(--primary-green)] border border-gray-100'}`}>
            <div className="relative h-48 w-full mb-6 transition-transform group-hover:scale-110">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-contain"
                />
            </div>

            <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider opacity-60">{category}</div>
                <h3 className="text-xl font-bold">{name}</h3>
                <div className="text-lg font-black">{price}</div>
            </div>

            <div className="mt-6 flex items-center justify-between">
                <button className={`px-4 py-2 rounded-lg font-bold transition-colors ${isSpecial ? 'bg-[var(--accent-green)] text-white' : 'bg-gray-100 hover:bg-[var(--accent-green)] hover:text-white'}`}>
                    Add to Cart
                </button>
                <button className="p-2 rounded-lg border border-current opacity-40 hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
            </div>
        </div>
    );
}
