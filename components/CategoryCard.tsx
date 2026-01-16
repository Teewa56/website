import Image from "next/image";

interface CategoryCardProps {
    name: string;
    image: string;
    itemCount?: number;
}

export default function CategoryCard({ name, image, itemCount }: CategoryCardProps) {
    return (
        <div className="flex flex-col items-center gap-4 group cursor-pointer">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-transparent group-hover:border-[var(--accent-green)] transition-all duration-300">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="text-center">
                <h3 className="font-bold text-gray-800 group-hover:text-[var(--primary-green)] transition-colors">{name}</h3>
                {itemCount !== undefined && (
                    <p className="text-xs text-gray-500">{itemCount} items</p>
                )}
            </div>
        </div>
    );
}
