"use client";

import React from "react";

export interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Card({ children, style }: CardProps) {
  return (
    <div
      style={{
        padding: "var(--space-3)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius)",
        background: "var(--color-bg)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
