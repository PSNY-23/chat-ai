"use client";
import { brandslogos } from "@/public/data/logos";
import Image from "next/image";
import { motion } from "framer-motion";

export function BrandLogos() {
  const logos = [...brandslogos, ...brandslogos]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden w-full py-4">
      <motion.div
        className="flex gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {logos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="min-w-[100px] flex items-center justify-center"
          >
            <Image
              src={logo.logo}
              alt={logo.name}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
