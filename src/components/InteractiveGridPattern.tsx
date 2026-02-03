"use client";

import React, { useState, useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
    squares?: [number, number]; // [columns, rows]
    className?: string;
    containerClassName?: string;
}

/**
 * InteractiveGridPattern component
 * Creates a grid where squares light up on hover.
 */
export function InteractiveGridPattern({
    width = 40,
    height = 40,
    squares = [24, 24],
    className,
    containerClassName,
    ...props
}: InteractiveGridPatternProps) {
    const [columns, rows] = squares;
    const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

    const handleMouseEnter = useCallback((index: number) => {
        setHoveredSquare(index);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredSquare(null);
    }, []);

    return (
        <svg
            width={columns * width}
            height={rows * height}
            viewBox={`0 0 ${columns * width} ${rows * height}`}
            className={cn(
                "absolute inset-0 h-full w-full stroke-gray-400/30",
                className
            )}
            {...props}
        >
            <defs>
                <pattern
                    id="grid-pattern"
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x="-1"
                    y="-1"
                >
                    <path
                        d={`M.5 ${height}V.5H${width}`}
                        fill="none"
                        strokeDasharray="0"
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            <svg x="-1" y="-1" className="overflow-visible">
                {Array.from({ length: columns * rows }).map((_, index) => {
                    const x = (index % columns) * width;
                    const y = Math.floor(index / columns) * height;
                    return (
                        <rect
                            key={index}
                            x={x + 1}
                            y={y + 1}
                            width={width - 1}
                            height={height - 1}
                            fill="currentColor"
                            strokeWidth="0"
                            className={cn(
                                "transition-all duration-300 ease-in-out cursor-pointer",
                                hoveredSquare === index
                                    ? "fill-accent/20 opacity-100"
                                    : "fill-transparent opacity-0"
                            )}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        />
                    );
                })}
            </svg>
        </svg>
    );
}
