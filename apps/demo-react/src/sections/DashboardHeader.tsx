import { ArcAvatar, ArcIcon } from '@arctech/react';

export function DashboardHeader() {
  return (
    <header className="header">
      <div className="header-left">
        <ArcAvatar name="MC" size="lg" shape="circle" />
        <div>
          <div className="header-title">ArcTech Dashboard</div>
          <div className="header-subtitle">Welcome back, ArcTech Admin</div>
        </div>
      </div>
      <ArcIcon name="menu" size={28} color="white" />
    </header>
  );
}
