"use client";

import React from "react";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const baseStyle: React.CSSProperties = {
  padding: "var(--space-2) var(--space-3)",
  borderRadius: "var(--radius)",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-body-size)",
  fontWeight: 500,
  cursor: "pointer",
  border: "1px solid transparent",
  transition: "background-color var(--transition-duration) var(--transition-ease), border-color var(--transition-duration) var(--transition-ease), color var(--transition-duration) var(--transition-ease)",
};

export function Button({ variant = "primary", children, style, ...props }: ButtonProps) {
  const variantStyle: React.CSSProperties =
    variant === "primary"
      ? {
          background: "var(--color-accent)",
          color: "#fff",
          borderColor: "var(--color-accent)",
        }
      : {
          background: "transparent",
          color: "var(--color-text)",
          borderColor: "var(--color-border)",
        };

  return (
    <button
      type="button"
      className={variant === "primary" ? "ds-btn-primary" : "ds-btn-secondary"}
      style={{ ...baseStyle, ...variantStyle, ...style }}
      {...props}
    >
      {children}
    </button>
  );
}
