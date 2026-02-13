"use client";

import React from "react";

export type ProofItemId = "ui-built" | "logic-working" | "test-passed" | "deployed";

export interface ProofItem {
  id: ProofItemId;
  label: string;
  checked: boolean;
  onProofInput?: (value: string) => void;
}

export interface ProofFooterProps {
  items: ProofItem[];
}

const defaultLabels: Record<ProofItemId, string> = {
  "ui-built": "UI Built",
  "logic-working": "Logic Working",
  "test-passed": "Test Passed",
  "deployed": "Deployed",
};

export function ProofFooter({ items }: ProofFooterProps) {
  return (
    <footer
      className="ds-proof-footer"
      role="contentinfo"
      style={{
        minHeight: "var(--proof-footer-min-height)",
        padding: "var(--space-3) var(--space-4)",
        borderTop: "1px solid var(--color-border)",
        background: "var(--color-bg)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--space-3)",
          alignItems: "center",
        }}
      >
        {items.map((item) => (
          <label
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-2)",
              fontSize: "var(--text-body-size)",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={item.checked}
              readOnly
              style={{
                width: 18,
                height: 18,
                accentColor: "var(--color-accent)",
              }}
            />
            <span>{item.label || defaultLabels[item.id]}</span>
          </label>
        ))}
      </div>
    </footer>
  );
}
