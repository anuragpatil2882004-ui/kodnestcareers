"use client";

import React from "react";

export interface ContextHeaderProps {
  headline: string;
  subtext: string;
}

export function ContextHeader({ headline, subtext }: ContextHeaderProps) {
  return (
    <div
      className="ds-context-header"
      style={{
        padding: "var(--context-header-padding)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <h1
        className="ds-heading ds-heading-1"
        style={{
          marginBottom: "var(--space-1)",
          fontFamily: "var(--font-serif)",
          fontSize: "var(--text-heading-size-lg)",
          fontWeight: 600,
          lineHeight: "var(--text-heading-line-height)",
          letterSpacing: "var(--text-heading-spacing)",
        }}
      >
        {headline}
      </h1>
      <p
        className="ds-text-block"
        style={{
          margin: 0,
          fontSize: "var(--text-body-size)",
          color: "var(--color-muted)",
          maxWidth: "var(--text-body-max-width)",
        }}
      >
        {subtext}
      </p>
    </div>
  );
}
