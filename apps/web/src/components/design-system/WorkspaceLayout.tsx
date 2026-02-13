"use client";

import React from "react";

export interface WorkspaceLayoutProps {
  primary: React.ReactNode;
  secondary: React.ReactNode;
}

export function WorkspaceLayout({ primary, secondary }: WorkspaceLayoutProps) {
  return (
    <div
      className="ds-workspace"
      style={{
        display: "flex",
        flex: "1 1 auto",
        minHeight: 0,
      }}
    >
      <main
        className="ds-workspace-primary"
        style={{
          width: "var(--workspace-primary-width)",
          padding: "var(--space-4)",
          overflow: "auto",
        }}
      >
        {primary}
      </main>
      <aside
        className="ds-workspace-secondary"
        role="complementary"
        style={{
          width: "var(--workspace-secondary-width)",
          padding: "var(--space-3)",
          borderLeft: "1px solid var(--color-border)",
          background: "var(--color-bg)",
          overflow: "auto",
        }}
      >
        {secondary}
      </aside>
    </div>
  );
}
