import { PageShell, Card, CopyableBox, Button } from "@/components/design-system";

const proofItems = [
  { id: "ui-built" as const, label: "UI Built", checked: false },
  { id: "logic-working" as const, label: "Logic Working", checked: false },
  { id: "test-passed" as const, label: "Test Passed", checked: false },
  { id: "deployed" as const, label: "Deployed", checked: false },
];

export default function Home() {
  return (
    <PageShell
      projectName="KodNest"
      stepCurrent={1}
      stepTotal={4}
      status="In Progress"
      headline="Build your first screen"
      subtext="Define the layout and copy for the main view. No hype—just clear steps."
      primary={
        <Card>
          <p style={{ margin: 0 }}>
            Primary workspace. Main product interaction lives here. Use design-system
            components only; no feature logic in the design system.
          </p>
        </Card>
      }
      secondary={
        <>
          <p
            style={{
              margin: "0 0 var(--space-2)",
              fontSize: "var(--text-body-size)",
              lineHeight: 1.6,
              color: "var(--color-muted)",
            }}
          >
            Step explanation. Short, clear.
          </p>
          <CopyableBox
            label="Prompt"
            value="Create a dashboard with a header and one card."
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
            <Button variant="secondary">Copy</Button>
            <Button variant="primary">Build in Lovable</Button>
            <Button variant="secondary">It Worked</Button>
            <Button variant="secondary">Error</Button>
            <Button variant="secondary">Add Screenshot</Button>
          </div>
        </>
      }
      proofItems={proofItems}
    />
  );
}
