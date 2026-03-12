import { ArcIcon } from '@arctech/react';

const ICON_NAMES = [
  'chevron-right',
  'check',
  'plus',
  'search',
  'menu',
  'user',
  'heart',
  'star',
  'info',
  'alert-triangle',
] as const;

export function IconsSection() {
  return (
    <section className="section">
      <h2 className="section-title">Icons</h2>
      <div className="icons-row">
        {ICON_NAMES.map((name) => (
          <div key={name} className="icon-cell">
            <ArcIcon name={name} size={24} color="var(--arc-color-primary-500)" />
            <span className="icon-label">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
