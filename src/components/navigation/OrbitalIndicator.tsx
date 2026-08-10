"use client";
import { motion } from "motion/react";

interface OrbitalIndicatorProps {
    activeIndex: number;
    total: number;
}

export default function OrbitalIndicator({
    activeIndex,
    total,
}: OrbitalIndicatorProps) {
    if (total <= 0){
        return null;
    }
    const progress = total === 1 ? 0 : activeIndex / (total -1);
    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -bottom-3 hidden h-3 lg:block">
            <div className="absolute inset-x-2 top-1/2 h-px -translate-y-1/2 bg-white/9"/>
            <motion.div 
             className="absolute top-1/2 -translate-y-1/2"
             initial={false}
             animate={{
                left: `calc(${progress * 100} % - 2px)`,
             }}
             transition={{
                type: "spring",
                stiffness: 420,
                damping: 34,
                mass: 0.7,
             }}
             >
                <span className="block size-1 rounded-full bg-white"/>
                <span className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
             </motion.div>
        </div>
    );
}