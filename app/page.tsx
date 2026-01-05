import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryTabs from "@/components/CategoryTabs";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CategoryTabs />

        {/* Banner Section from Image */}
        <section className="section-container my-20">
          <div className="relative w-full h-[400px] rounded-[40px] overflow-hidden bg-emerald-800 flex items-center p-12 text-white">
            <div className="relative z-10 max-w-lg space-y-6">
              <h2 className="text-5xl font-bold leading-tight">75% Off <br /> Heat Up the Deals!</h2>
              <button className="btn-primary">Shop Now</button>
            </div>
            <div className="absolute right-0 bottom-0 top-0 w-1/2">
              <Image
                src="/images/orange.png"
                alt="Orange deal"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-800/80 to-transparent" />
          </div>
        </section>

        <FeaturedProducts />

        {/* Value Proposition Section */}
        <section className="bg-[var(--primary-green)] py-20 text-white overflow-hidden">
          <div className="section-container grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/images/luagropic1 (17) 1.png"
                alt="Market basket"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-5xl font-bold leading-tight">We Bring <br /> The Market To <br /> <span className="text-[var(--accent-green)]">Your Home</span></h2>
              <button className="btn-primary bg-green-400 px-8 py-2 text-lg">Shop Now</button>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="section-container py-32 grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-[var(--primary-green)]">What Our Happy Customers Say</h2>
            <div className="space-y-4">
              <p className="text-2xl font-medium italic leading-relaxed text-gray-700">"Everything is always fresh and tastes amazing. This store really helps me stay on track with my healthy lifestyle!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200" />
                <div>
                  <div className="font-bold">James Carter</div>
                  <div className="text-sm opacity-60">Customer</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] w-full bg-emerald-900/5 rounded-[100px] overflow-hidden">
            <Image src="/images/Rectangle 43.png" alt="Market basket" fill className="object-contain" />
          </div>
        </section>

        {/* Blog Post Section */}
        <section className="section-container pb-32 text-center">
          <h2 className="text-4xl font-bold mb-16 text-[var(--primary-green)]">Our Latest Post</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-[400px] mb-8 group overflow-hidden rounded-[40px]">
              <Image src="/images/luagropic1 1.png" alt="Blog" fill className="object-cover transition-transform group-hover:scale-105" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Why Green Fruits and Veggies Should Be in Your Cart</h3>
              <p className="text-sm opacity-50">February 14, 2024</p>
              <button className="rounded-2xl font-bold bg-green-400 px-8 py-2 text-lg">Read More</button>
            </div>

            {/* Scroll arrows */}
            <Image width={50} height={50} className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-12" src="/images/arrows2.png" alt="Blog" />
            <Image width={50} height={50} className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-12" src="/images/arrow1.png" alt="Blog" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

