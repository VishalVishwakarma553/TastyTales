"use client";
import CTAsection from "@/components/CTAsection";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, Leaf, Utensils } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import FeatureSection from "@/components/FeatureSection";

export default function Home() {
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-100">
      <main className="flex-1">
        {/* Hero section */}
        <section className="relative h-[80vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={"/background_image2.webp"}
              alt="hero-jpg"
              fill
              className="object-cover brightness-75"
              priority
            />
            <div className="h-full container z-20 relative flex flex-col justify-center items-start space-y-4 p-4">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="md:text-6xl sm:text-4xl text-4xl font-extrabold bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg"
              >
                Delecious Food <br />
                <span className="bg-gradient-to-r from-green-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  Crafted with Love
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-white max-w-md sm:text-xl text-lg mb-6 drop-shadow"
              >
                Enjoy the finest culinary journey with our chef-crafted dishes made from the freshest ingredients
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="flex gap-5"
              >
                <Link href={"/menu"}>
                  <Button size={"lg"} className="cursor-pointer bg-gradient-to-r from-green-400 to-yellow-400 text-white font-semibold shadow-lg hover:scale-105 transition">
                    View Menu <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link href={"/reservation"}>
                  <Button className="border-white hover:bg-white/10 hover:text-white cursor-pointer font-semibold" variant={"outline"} size={"lg"}>
                    Make Reservation
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Feature Section */}
        <FeatureSection />
        {/* About Section */}
        <section id="about" className="md:mx-6 sm:mx-4 mx-2 py-16">
          <div className="mb-10">
<h1 className="text-4xl font-bold text-center">About Our Restaurant</h1>
          <p className="text-lg text-muted-foreground text-center">From farm-to-table freshness to artisanal preparation methods, every aspect of our kitchen is designed to deliver an unforgettable dining experience.</p>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 4px 24px rgba(34,197,94,0.15)" }}
              className="flex flex-col items-center space-y-3 p-6 py-10 border border-gray-200 rounded-xl bg-white shadow-md"
            >
              <Clock className="h-10 w-10 text-green-500" />
              <h3 className="font-bold text-2xl bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent">Open Daily</h3>
              <p className="text-muted-foreground text-lg">Monday - Sunday: 11am - 10pm</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 4px 24px rgba(253,186,116,0.15)" }}
              className="flex flex-col items-center space-y-3 p-6 py-10 border border-gray-200 rounded-xl bg-white shadow-md"
            >
              <Utensils className="h-10 w-10 text-yellow-500" />
              <h3 className="font-bold text-2xl bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Diverse Menu</h3>
              <p className="text-muted-foreground text-lg">50+ dishes crafted by our master chefs</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 4px 24px rgba(34,197,94,0.15)" }}
              className="flex flex-col items-center space-y-3 p-6 py-10 border border-gray-200 rounded-xl bg-white shadow-md"
            >
              <Leaf className="h-10 w-10 text-green-600" />
              <h3 className="font-bold text-2xl bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">Fresh Ingredients</h3>
              <p className="text-muted-foreground text-lg">Locally-sourced, organic produce</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Testimonial section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <Testimonials />
        </motion.section>

        {/* Call To Action-> CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <CTAsection />
        </motion.section>
        <Footer />
      </main>
    </div>
  );
}