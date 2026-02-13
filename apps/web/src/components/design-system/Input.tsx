"use client";

import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "var(--space-2) var(--space-2)",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-body-size)",
  color: "var(--color-text)",
  background: "var(--color-bg)",
  border: "var(--input-border)",
  borderRadius: "var(--radius)",
  transition: "border-color var(--transition-duration) var(--transition-ease), box-shadow var(--transition-duration) var(--transition-ease)",
};

export function Input({ label, id, style, ...props }: InputProps) {
  const inputId = id ?? `ds-input-${Math.random().toString(36).slice(2, 9)}`;
  return (
    <div style={{ marginBottom: "var(--space-2)" }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            display: "block",
            marginBottom: "var(--space-1)",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "var(--color-text)",
          }}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        style={{ ...inputStyle, ...style }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "var(--color-accent)";
          e.currentTarget.style.boxShadow = "0 0 0 2px rgba(139, 0, 0, 0.15)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "var(--color-border)";
          e.currentTarget.style.boxShadow = "none";
        }}
        {...props}
      />
    </div>
  );
}
