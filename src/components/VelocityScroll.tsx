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
    text: string;
    default_velocity?: number;
    className?: string;
}

interface ParallaxProps {
    children: string;
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
     * This is a magic number for the length of the text.
     * It's used to wrap the text around when it goes out of bounds.
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll based on scroll speed.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text.
     * More repetitions ensures the marquee is continuous.
     */
    return (
        <div className="flex flex-nowrap overflow-hidden whitespace-nowrap">
            <motion.div
                className={cn("flex flex-nowrap whitespace-nowrap text-xl font-bold uppercase", className)}
                style={{ x }}
            >
                <span className="mr-4">{children} </span>
                <span className="mr-4">{children} </span>
                <span className="mr-4">{children} </span>
                <span className="mr-4">{children} </span>
            </motion.div>
        </div>
    );
}

export function VelocityScroll({ text, default_velocity = 5, className }: VelocityScrollProps) {
    return (
        <section className="relative w-full overflow-hidden">
            <ParallaxText baseVelocity={default_velocity} className={className}>
                {text}
            </ParallaxText>
            <ParallaxText baseVelocity={-default_velocity} className={className}>
                {text}
            </ParallaxText>
        </section>
    );
}
