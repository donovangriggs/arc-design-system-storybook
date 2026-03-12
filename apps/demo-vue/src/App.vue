<script setup lang="ts">
import { ref } from 'vue';

const modalOpen = ref(false);

const STAT_CARDS = [
  { label: 'Revenue', value: '$48,250', change: '+12%', variant: 'success', icon: 'chevron-up' },
  { label: 'Active Users', value: '3,842', change: '-3%', variant: 'error', icon: 'chevron-down' },
  { label: 'Conversion', value: '24.8%', change: '+28%', variant: 'success', icon: 'chevron-up' },
] as const;

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

function openModal() {
  modalOpen.value = true;
}

function closeModal() {
  modalOpen.value = false;
}
</script>

<template>
  <div class="dashboard">
    <!-- Header -->
    <header class="header">
      <div class="header-left">
        <mega-avatar name="MC" size="lg" shape="circle"></mega-avatar>
        <div>
          <div class="header-title">MegaCorp Dashboard</div>
          <div class="header-subtitle">Welcome back, MegaCorp Admin</div>
        </div>
      </div>
      <mega-icon name="menu" :size="28" color="white"></mega-icon>
    </header>

    <!-- Alerts -->
    <div class="alerts">
      <mega-alert variant="info" alert-title="Welcome" dismissible icon>
        Welcome to the MegaCorp Dashboard. All systems are operational.
      </mega-alert>
      <mega-alert variant="success" alert-title="System Status" dismissible icon>
        All services are running normally. Last check: 2 minutes ago.
      </mega-alert>
    </div>

    <!-- Stat Cards -->
    <div class="stat-cards">
      <mega-card
        v-for="card in STAT_CARDS"
        :key="card.label"
        variant="elevated"
        padding="lg"
      >
        <div class="stat-card-inner">
          <div class="stat-card-header">
            <span class="stat-card-label">{{ card.label }}</span>
            <mega-badge :variant="card.variant" size="sm" pill>
              {{ card.change }}
            </mega-badge>
          </div>
          <div class="stat-card-value">{{ card.value }}</div>
          <div class="stat-card-footer">Compared to last month</div>
        </div>
      </mega-card>
    </div>

    <!-- Buttons -->
    <section class="section">
      <h2 class="section-title">Buttons</h2>
      <div class="buttons-row">
        <mega-button variant="primary">Primary</mega-button>
        <mega-button variant="secondary">Secondary</mega-button>
        <mega-button variant="outline">Outline</mega-button>
        <mega-button variant="ghost">Ghost</mega-button>
        <mega-button variant="destructive">Destructive</mega-button>
        <mega-button variant="primary" loading>Loading</mega-button>
      </div>
      <div class="buttons-row">
        <mega-button variant="primary" size="sm">Small</mega-button>
        <mega-button variant="primary" size="md">Medium</mega-button>
        <mega-button variant="primary" size="lg">Large</mega-button>
        <mega-button variant="primary" disabled>Disabled</mega-button>
      </div>
    </section>

    <!-- Form Inputs -->
    <section class="section">
      <h2 class="section-title">Form Inputs</h2>
      <div class="form-grid">
        <mega-input
          label="Full Name"
          placeholder="Enter your name"
          type="text"
          name="name"
          helper-text="First and last name"
        ></mega-input>
        <mega-input
          label="Email Address"
          placeholder="admin@megacorp.io"
          type="email"
          name="email"
          helper-text="We will never share your email"
        ></mega-input>
        <mega-input
          label="Password"
          placeholder="Enter password"
          type="password"
          name="password"
          helper-text="Minimum 8 characters"
        ></mega-input>
      </div>
    </section>

    <!-- Icons -->
    <section class="section">
      <h2 class="section-title">Icons</h2>
      <div class="icons-row">
        <div v-for="name in ICON_NAMES" :key="name" class="icon-cell">
          <mega-icon :name="name" :size="24" color="var(--mega-color-primary-500)"></mega-icon>
          <span class="icon-label">{{ name }}</span>
        </div>
      </div>
    </section>

    <!-- Tooltip & Modal -->
    <section class="section">
      <h2 class="section-title">Tooltip &amp; Modal</h2>
      <div class="extras-row">
        <mega-tooltip content="This button does nothing special" position="top">
          <mega-button variant="outline">Hover for Tooltip</mega-button>
        </mega-tooltip>

        <mega-button variant="primary" @mega-click="openModal">
          Open Modal
        </mega-button>
      </div>
    </section>

    <!-- Modal -->
    <mega-modal
      :open="modalOpen"
      size="md"
      close-on-overlay
      close-on-escape
      @mega-close="closeModal"
    >
      <div class="modal-body">
        <h2>MegaCorp Notification</h2>
        <p>
          This modal demonstrates the MegaModal component from the design system.
          It supports overlay dismiss, escape key handling, and multiple sizes.
        </p>
        <mega-alert variant="info" icon>
          Modals are great for confirmations, forms, and focused content.
        </mega-alert>
        <div class="modal-actions">
          <mega-button variant="ghost" @mega-click="closeModal">
            Cancel
          </mega-button>
          <mega-button variant="primary" @mega-click="closeModal">
            Confirm
          </mega-button>
        </div>
      </div>
    </mega-modal>
  </div>
</template>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:global(body) {
  font-family: var(--mega-font-family-sans);
  background-color: var(--mega-color-neutral-50);
  color: var(--mega-color-neutral-900);
  line-height: var(--mega-line-height-normal);
}

.dashboard {
  max-width: 1120px;
  margin: 0 auto;
  padding: var(--mega-spacing-8);
  display: flex;
  flex-direction: column;
  gap: var(--mega-spacing-8);
}

/* -- Header ------------------------------------------------- */

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--mega-spacing-6);
  background: linear-gradient(
    135deg,
    var(--mega-color-primary-700),
    var(--mega-color-primary-500)
  );
  border-radius: var(--mega-border-radius-lg);
  color: var(--mega-color-neutral-0);
  box-shadow: var(--mega-shadow-lg);
}

.header-left {
  display: flex;
  align-items: center;
  gap: var(--mega-spacing-4);
}

.header-title {
  font-size: var(--mega-font-size-2xl);
  font-weight: var(--mega-font-weight-bold);
}

.header-subtitle {
  font-size: var(--mega-font-size-sm);
  opacity: 0.85;
}

/* -- Alerts ------------------------------------------------- */

.alerts {
  display: flex;
  flex-direction: column;
  gap: var(--mega-spacing-3);
}

/* -- Stat Cards --------------------------------------------- */

.stat-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--mega-spacing-6);
}

.stat-card-inner {
  display: flex;
  flex-direction: column;
  gap: var(--mega-spacing-3);
}

.stat-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.stat-card-label {
  font-size: var(--mega-font-size-sm);
  color: var(--mega-color-neutral-500);
  font-weight: var(--mega-font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-card-value {
  font-size: var(--mega-font-size-3xl);
  font-weight: var(--mega-font-weight-bold);
  color: var(--mega-color-neutral-900);
}

.stat-card-footer {
  font-size: var(--mega-font-size-xs);
  color: var(--mega-color-neutral-400);
}

/* -- Section ------------------------------------------------ */

.section {
  display: flex;
  flex-direction: column;
  gap: var(--mega-spacing-4);
}

.section-title {
  font-size: var(--mega-font-size-lg);
  font-weight: var(--mega-font-weight-semibold);
  color: var(--mega-color-neutral-800);
  border-bottom: 2px solid var(--mega-color-primary-200);
  padding-bottom: var(--mega-spacing-2);
}

/* -- Buttons Row -------------------------------------------- */

.buttons-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--mega-spacing-3);
  align-items: center;
}

/* -- Form --------------------------------------------------- */

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--mega-spacing-5);
}

/* -- Icons Row ---------------------------------------------- */

.icons-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--mega-spacing-5);
  align-items: center;
}

.icon-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--mega-spacing-1);
}

.icon-label {
  font-size: var(--mega-font-size-xs);
  color: var(--mega-color-neutral-400);
  font-family: var(--mega-font-family-mono);
}

/* -- Extras Row --------------------------------------------- */

.extras-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--mega-spacing-4);
  align-items: center;
}

/* -- Modal Content ------------------------------------------ */

.modal-body {
  display: flex;
  flex-direction: column;
  gap: var(--mega-spacing-4);
  padding: var(--mega-spacing-6);
}

.modal-body h2 {
  font-size: var(--mega-font-size-xl);
  font-weight: var(--mega-font-weight-semibold);
}

.modal-body p {
  color: var(--mega-color-neutral-600);
  line-height: var(--mega-line-height-relaxed);
}

.modal-actions {
  display: flex;
  gap: var(--mega-spacing-3);
  justify-content: flex-end;
}
</style>
