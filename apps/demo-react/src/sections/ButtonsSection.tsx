import { ArcButton } from '@arctech/react';

export function ButtonsSection() {
  return (
    <section className="section">
      <h2 className="section-title">Buttons</h2>
      <div className="buttons-row">
        <ArcButton variant="primary">Primary</ArcButton>
        <ArcButton variant="secondary">Secondary</ArcButton>
        <ArcButton variant="outline">Outline</ArcButton>
        <ArcButton variant="ghost">Ghost</ArcButton>
        <ArcButton variant="destructive">Destructive</ArcButton>
        <ArcButton variant="primary" loading>Loading</ArcButton>
      </div>
      <div className="buttons-row">
        <ArcButton variant="primary" size="sm">Small</ArcButton>
        <ArcButton variant="primary" size="md">Medium</ArcButton>
        <ArcButton variant="primary" size="lg">Large</ArcButton>
        <ArcButton variant="primary" disabled>Disabled</ArcButton>
      </div>
    </section>
  );
}
