"use client";

import React from "react";

export type BadgeVariant = "default" | "success" | "warning";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variantStyle: React.CSSProperties =
    variant === "success"
      ? { borderColor: "var(--color-success)", color: "var(--color-success)" }
      : variant === "warning"
        ? { borderColor: "var(--color-warning)", color: "var(--color-warning)" }
        : {};

  return (
    <span
      style={{
        display: "inline-block",
        padding: "var(--space-1) var(--space-2)",
        borderRadius: "var(--radius)",
        border: "1px solid var(--color-border)",
        fontSize: "0.875rem",
        fontWeight: 500,
        background: "var(--color-bg)",
        color: "var(--color-text)",
        ...variantStyle,
      }}
    >
      {children}
    </span>
  );
}
