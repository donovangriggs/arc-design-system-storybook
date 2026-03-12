import { ArcCard, ArcBadge } from '@arctech/react';

const STAT_CARDS = [
  { label: 'Revenue', value: '$48,250', change: '+12%', variant: 'success' as const, icon: 'chevron-up' },
  { label: 'Active Users', value: '3,842', change: '-3%', variant: 'error' as const, icon: 'chevron-down' },
  { label: 'Conversion', value: '24.8%', change: '+28%', variant: 'success' as const, icon: 'chevron-up' },
] as const;

export function StatCardsSection() {
  return (
    <div className="stat-cards">
      {STAT_CARDS.map((card) => (
        <ArcCard key={card.label} variant="elevated" padding="lg">
          <div className="stat-card-inner">
            <div className="stat-card-header">
              <span className="stat-card-label">{card.label}</span>
              <ArcBadge variant={card.variant} size="sm" pill>
                {card.change}
              </ArcBadge>
            </div>
            <div className="stat-card-value">{card.value}</div>
            <div className="stat-card-footer">Compared to last month</div>
          </div>
        </ArcCard>
      ))}
    </div>
  );
}
