"use client";

import React from "react";
import { Button } from "./Button";

export interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
}

export function EmptyState({ title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div
      style={{
        padding: "var(--space-5)",
        textAlign: "center",
        maxWidth: "var(--text-body-max-width)",
        margin: "0 auto",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--text-heading-size)",
          fontWeight: 600,
          color: "var(--color-text)",
          marginBottom: "var(--space-2)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: "0 0 var(--space-4)",
          fontSize: "var(--text-body-size)",
          lineHeight: 1.7,
          color: "var(--color-muted)",
        }}
      >
        {description}
      </p>
      <Button variant="primary" onClick={onAction}>
        {actionLabel}
      </Button>
    </div>
  );
}
