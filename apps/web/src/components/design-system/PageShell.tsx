"use client";

import React from "react";
import { TopBar, type StepStatus } from "./TopBar";
import { ContextHeader } from "./ContextHeader";
import { WorkspaceLayout } from "./WorkspaceLayout";
import { ProofFooter, type ProofItem } from "./ProofFooter";

export interface PageShellProps {
  projectName: string;
  stepCurrent: number;
  stepTotal: number;
  status: StepStatus;
  headline: string;
  subtext: string;
  primary: React.ReactNode;
  secondary: React.ReactNode;
  proofItems: ProofItem[];
}

export function PageShell({
  projectName,
  stepCurrent,
  stepTotal,
  status,
  headline,
  subtext,
  primary,
  secondary,
  proofItems,
}: PageShellProps) {
  return (
    <div
      className="ds-page"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "var(--color-bg)",
      }}
    >
      <TopBar
        projectName={projectName}
        stepCurrent={stepCurrent}
        stepTotal={stepTotal}
        status={status}
      />
      <ContextHeader headline={headline} subtext={subtext} />
      <WorkspaceLayout primary={primary} secondary={secondary} />
      <ProofFooter items={proofItems} />
    </div>
  );
}
