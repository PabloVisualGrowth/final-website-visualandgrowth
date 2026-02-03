"use client";

import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    useAnimationFrame,
    useMotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * @name wrap
 * @description Manually implementing the wrap function to avoid @motionone/utils dependency
 */
const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface VelocityScrollProps {
    children: React.ReactNode;
    default_velocity?: number;
    className?: string;
    numRows?: number;
}

interface ParallaxProps {
    children: React.ReactNode;
    baseVelocity: number;
    className?: string;
}

function ParallaxText({ children, baseVelocity = 100, className }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    /**
     * We wrap around a wider range to accommodate larger component children.
     * Using -20% to -60% as a standard for looped marquees.
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="flex flex-nowrap overflow-hidden whitespace-nowrap py-4">
            <motion.div
                className={cn("flex flex-nowrap whitespace-nowrap items-center", className)}
                style={{ x }}
            >
                <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
                    {children}
                </div>
                <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
                    {children}
                </div>
                <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
                    {children}
                </div>
                <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}

export function VelocityScroll({ children, default_velocity = 5, className, numRows = 2 }: VelocityScrollProps) {
    return (
        <section className="relative w-full overflow-hidden">
            {Array.from({ length: numRows }).map((_, i) => (
                <ParallaxText
                    key={i}
                    baseVelocity={i % 2 === 0 ? default_velocity : -default_velocity}
                    className={className}
                >
                    {children}
                </ParallaxText>
            ))}
        </section>
    );
}
