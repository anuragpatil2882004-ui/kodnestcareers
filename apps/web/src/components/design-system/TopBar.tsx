"use client";

import React from "react";

export type StepStatus = "Not Started" | "In Progress" | "Shipped";

export interface TopBarProps {
  projectName: string;
  stepCurrent: number;
  stepTotal: number;
  status: StepStatus;
}

export function TopBar({ projectName, stepCurrent, stepTotal, status }: TopBarProps) {
  return (
    <header
      className="ds-topbar"
      role="banner"
      style={{
        height: "var(--topbar-height)",
        padding: "0 var(--space-3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid var(--color-border)",
        background: "var(--color-bg)",
      }}
    >
      <div style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "var(--text-body-size)" }}>
        {projectName}
      </div>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-body-size)",
          color: "var(--color-muted)",
        }}
      >
        Step {stepCurrent} / {stepTotal}
      </div>
      <span
        className="ds-status-badge"
        style={{
          padding: "var(--space-1) var(--space-2)",
          borderRadius: "var(--radius)",
          border: "1px solid var(--color-border)",
          fontSize: "0.875rem",
          fontWeight: 500,
          background: "var(--color-bg)",
          color: "var(--color-text)",
        }}
      >
        {status}
      </span>
    </header>
  );
}
