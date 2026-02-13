"use client";

import React from "react";
import { Button } from "./Button";

export interface ErrorStateProps {
  title: string;
  description: string;
  remedy?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function ErrorState({
  title,
  description,
  remedy,
  actionLabel,
  onAction,
}: ErrorStateProps) {
  return (
    <div
      style={{
        padding: "var(--space-4)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius)",
        background: "var(--color-bg)",
        maxWidth: "var(--text-body-max-width)",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-body-size)",
          fontWeight: 600,
          color: "var(--color-text)",
          marginBottom: "var(--space-2)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: "0 0 var(--space-2)",
          fontSize: "var(--text-body-size)",
          lineHeight: 1.7,
          color: "var(--color-text)",
        }}
      >
        {description}
      </p>
      {remedy && (
        <p
          style={{
            margin: "0 0 var(--space-3)",
            fontSize: "var(--text-body-size)",
            lineHeight: 1.7,
            color: "var(--color-muted)",
          }}
        >
          {remedy}
        </p>
      )}
      {actionLabel && onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
