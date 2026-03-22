"use client";

import React from 'react';
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: 'color' | 'white';
}

export function Logo({ className, variant = 'color' }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-sm border border-mercury/10">
        <img 
          src="/logo.jpg" 
          alt="Jayple Logo" 
          className="w-full h-full object-cover"
        />
      </div>
      <span className={cn("text-2xl font-serif font-bold tracking-tight", variant === 'white' ? 'text-white' : 'text-charcoal')}>
        Jayple
      </span>
    </div>
  );
}
