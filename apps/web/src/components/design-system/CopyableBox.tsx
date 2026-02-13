"use client";

import React, { useState } from "react";
import { Button } from "./Button";

export interface CopyableBoxProps {
  value: string;
  label?: string;
}

export function CopyableBox({ value, label }: CopyableBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ marginBottom: "var(--space-3)" }}>
      {label && (
        <div
          style={{
            marginBottom: "var(--space-1)",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "var(--color-text)",
          }}
        >
          {label}
        </div>
      )}
      <pre
        style={{
          margin: "0 0 var(--space-2)",
          padding: "var(--space-2)",
          fontFamily: "var(--font-sans)",
          fontSize: "0.875rem",
          lineHeight: 1.6,
          background: "var(--color-bg)",
          border: "var(--input-border)",
          borderRadius: "var(--radius)",
          overflow: "auto",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {value}
      </pre>
      <Button variant="secondary" onClick={handleCopy}>
        {copied ? "Copied" : "Copy"}
      </Button>
    </div>
  );
}
