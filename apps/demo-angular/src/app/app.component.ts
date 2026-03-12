import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './app.component.css',
  template: `
    <div class="dashboard">

      <!-- ── Header ─────────────────────────────────────────── -->
      <header class="header">
        <div class="header-left">
          <arc-avatar name="MC" size="lg"></arc-avatar>
          <div>
            <div class="header-title">ArcTech Admin</div>
            <div class="header-subtitle">Design System Dashboard</div>
          </div>
        </div>
        <arc-badge variant="success" size="sm">Online</arc-badge>
      </header>

      <!-- ── Alerts ─────────────────────────────────────────── -->
      <section class="alerts">
        <arc-alert
          variant="info"
          alert-title="Welcome back!"
          dismissible
        >
          You have 3 new notifications and 12 pending tasks.
        </arc-alert>
        <arc-alert
          variant="success"
          alert-title="System Status"
        >
          All services are running normally. Last deploy: 2 hours ago.
        </arc-alert>
      </section>

      <!-- ── Stat Cards ─────────────────────────────────────── -->
      <section class="stat-cards">
        <arc-card variant="elevated">
          <div class="stat-card-inner">
            <div class="stat-card-header">
              <span class="stat-card-label">Total Users</span>
              <arc-badge variant="success" size="sm">+12%</arc-badge>
            </div>
            <div class="stat-card-value">24,521</div>
            <div class="stat-card-footer">vs. 21,894 last month</div>
          </div>
        </arc-card>

        <arc-card variant="elevated">
          <div class="stat-card-inner">
            <div class="stat-card-header">
              <span class="stat-card-label">Revenue</span>
              <arc-badge variant="error" size="sm">-3%</arc-badge>
            </div>
            <div class="stat-card-value">$48,290</div>
            <div class="stat-card-footer">vs. $49,740 last month</div>
          </div>
        </arc-card>

        <arc-card variant="elevated">
          <div class="stat-card-inner">
            <div class="stat-card-header">
              <span class="stat-card-label">Conversion</span>
              <arc-badge variant="success" size="sm">+28%</arc-badge>
            </div>
            <div class="stat-card-value">3.24%</div>
            <div class="stat-card-footer">vs. 2.53% last month</div>
          </div>
        </arc-card>
      </section>

      <!-- ── Buttons ────────────────────────────────────────── -->
      <section class="section">
        <h2 class="section-title">Button Variants</h2>
        <div class="buttons-row">
          <arc-button variant="primary">Primary</arc-button>
          <arc-button variant="secondary">Secondary</arc-button>
          <arc-button variant="outline">Outline</arc-button>
          <arc-button variant="ghost">Ghost</arc-button>
          <arc-button variant="destructive">Destructive</arc-button>
          <arc-button variant="primary" disabled>Disabled</arc-button>
        </div>
      </section>

      <!-- ── Form Inputs ────────────────────────────────────── -->
      <section class="section">
        <h2 class="section-title">Form Inputs</h2>
        <div class="form-grid">
          <arc-input
            label="Full Name"
            placeholder="Jane Doe"
            helper-text="Enter your legal name"
          ></arc-input>
          <arc-input
            label="Email"
            type="email"
            placeholder="jane&#64;arctech.io"
            required
          ></arc-input>
          <arc-input
            label="Password"
            type="password"
            placeholder="••••••••"
            error-message="Must be at least 8 characters"
          ></arc-input>
        </div>
      </section>

      <!-- ── Icons ──────────────────────────────────────────── -->
      <section class="section">
        <h2 class="section-title">Icon Library</h2>
        <div class="icons-row">
          @for (icon of icons; track icon) {
            <div class="icon-cell">
              <arc-icon [attr.name]="icon" size="28"></arc-icon>
              <span class="icon-label">{{ icon }}</span>
            </div>
          }
        </div>
      </section>

      <!-- ── Tooltip & Modal ────────────────────────────────── -->
      <section class="section">
        <h2 class="section-title">Tooltip & Modal</h2>
        <div class="extras-row">
          <arc-tooltip content="This is a helpful tooltip!" position="top">
            <arc-button variant="outline">Hover for Tooltip</arc-button>
          </arc-tooltip>

          <arc-button variant="primary" (click)="modalOpen = true">
            Open Modal
          </arc-button>
        </div>
      </section>

      <!-- ── Modal ──────────────────────────────────────────── -->
      <arc-modal
        [attr.open]="modalOpen ? '' : null"
        close-on-overlay
        close-on-escape
        (arcClose)="modalOpen = false"
      >
        <div class="modal-body">
          <h2>Welcome to ArcTech</h2>
          <p>
            This modal demonstrates the arc-modal component from the
            Arc Design System design system. It supports overlay click dismissal,
            escape key closing, and multiple size variants.
          </p>
          <div class="modal-actions">
            <arc-button variant="ghost" (click)="modalOpen = false">
              Cancel
            </arc-button>
            <arc-button variant="primary" (click)="modalOpen = false">
              Got it!
            </arc-button>
          </div>
        </div>
      </arc-modal>

    </div>
  `,
})
export class AppComponent {
  modalOpen = false;

  readonly icons = [
    'home',
    'user',
    'settings',
    'search',
    'bell',
    'mail',
    'heart',
    'star',
    'shield',
    'zap',
  ];
}
