import { ArcAlert } from '@arctech/react';

export function AlertsSection() {
  return (
    <div className="alerts">
      <ArcAlert variant="info" alertTitle="Welcome" dismissible icon>
        Welcome to the ArcTech Dashboard. All systems are operational.
      </ArcAlert>
      <ArcAlert variant="success" alertTitle="System Status" dismissible icon>
        All services are running normally. Last check: 2 minutes ago.
      </ArcAlert>
    </div>
  );
}
