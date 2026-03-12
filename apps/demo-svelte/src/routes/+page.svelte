<script lang="ts">
  let modalOpen = $state(false);

  function openModal() {
    modalOpen = true;
  }

  function closeModal() {
    modalOpen = false;
  }
</script>

<div class="dashboard">
  <!-- Header with Avatar -->
  <header class="dashboard-header">
    <div class="header-user">
      <arc-avatar name="ArcTech" size="lg"></arc-avatar>
      <div class="header-user-info">
        <h1>ArcTech Admin</h1>
        <p>Welcome back to your dashboard</p>
      </div>
    </div>
    <arc-badge variant="success" size="sm">Online</arc-badge>
  </header>

  <!-- Alerts Section -->
  <section class="alerts-section">
    <h2 class="section-title">Notifications</h2>
    <arc-alert variant="info" alert-title="Welcome back!">
      You have 3 new reports ready for review. Check your analytics dashboard for the latest insights.
    </arc-alert>
    <arc-alert variant="success" alert-title="System Status">
      All services are operational. Last deployment completed successfully at 2:45 PM.
    </arc-alert>
  </section>

  <!-- Stats Cards with Badges -->
  <section>
    <h2 class="section-title">Key Metrics</h2>
    <div class="stats-grid">
      <arc-card variant="elevated">
        <div class="stat-card-content">
          <div class="stat-value">2,847</div>
          <div class="stat-label">Active Users</div>
          <arc-badge variant="success" size="sm">+12%</arc-badge>
        </div>
      </arc-card>
      <arc-card variant="elevated">
        <div class="stat-card-content">
          <div class="stat-value">$48.2K</div>
          <div class="stat-label">Revenue</div>
          <arc-badge variant="error" size="sm">-3%</arc-badge>
        </div>
      </arc-card>
      <arc-card variant="elevated">
        <div class="stat-card-content">
          <div class="stat-value">1,024</div>
          <div class="stat-label">Orders</div>
          <arc-badge variant="success" size="sm">+28%</arc-badge>
        </div>
      </arc-card>
    </div>
  </section>

  <!-- Buttons Section -->
  <section>
    <h2 class="section-title">Actions</h2>
    <div class="buttons-row">
      <arc-button variant="primary">Primary</arc-button>
      <arc-button variant="secondary">Secondary</arc-button>
      <arc-button variant="outline">Outline</arc-button>
      <arc-button variant="ghost">Ghost</arc-button>
      <arc-button variant="destructive">Destructive</arc-button>
      <arc-button variant="primary" loading={true}>Loading</arc-button>
    </div>
  </section>

  <!-- Form Section -->
  <section class="form-section">
    <h2 class="section-title">Settings Form</h2>
    <div class="form-grid">
      <arc-input
        label="Full Name"
        placeholder="Enter your name"
        helper-text="First and last name"
      ></arc-input>
      <arc-input
        label="Email Address"
        type="email"
        placeholder="admin@arctech.com"
        helper-text="Your work email"
      ></arc-input>
      <arc-input
        label="API Key"
        type="password"
        placeholder="Enter API key"
        error-message="API key is required"
      ></arc-input>
    </div>
  </section>

  <!-- Icons Section -->
  <section>
    <h2 class="section-title">Icon Library</h2>
    <div class="icons-row">
      <div class="icon-item">
        <arc-icon name="home" size={24}></arc-icon>
        <span>home</span>
      </div>
      <div class="icon-item">
        <arc-icon name="settings" size={24}></arc-icon>
        <span>settings</span>
      </div>
      <div class="icon-item">
        <arc-icon name="user" size={24}></arc-icon>
        <span>user</span>
      </div>
      <div class="icon-item">
        <arc-icon name="search" size={24}></arc-icon>
        <span>search</span>
      </div>
      <div class="icon-item">
        <arc-icon name="bell" size={24}></arc-icon>
        <span>bell</span>
      </div>
      <div class="icon-item">
        <arc-icon name="mail" size={24}></arc-icon>
        <span>mail</span>
      </div>
      <div class="icon-item">
        <arc-icon name="heart" size={24}></arc-icon>
        <span>heart</span>
      </div>
      <div class="icon-item">
        <arc-icon name="star" size={24}></arc-icon>
        <span>star</span>
      </div>
      <div class="icon-item">
        <arc-icon name="check" size={24}></arc-icon>
        <span>check</span>
      </div>
      <div class="icon-item">
        <arc-icon name="x" size={24}></arc-icon>
        <span>x</span>
      </div>
    </div>
  </section>

  <!-- Tooltip & Modal Section -->
  <section>
    <h2 class="section-title">Interactive Components</h2>
    <div class="interactive-section">
      <arc-tooltip content="This button saves your settings" position="top">
        <arc-button variant="primary">Hover for Tooltip</arc-button>
      </arc-tooltip>

      <arc-button variant="outline" on:arcClick={openModal}>
        Open Modal
      </arc-button>

      <arc-modal open={modalOpen} on:arcClose={closeModal}>
        <div slot="header">Dashboard Settings</div>
        <div slot="body">
          <p>Configure your dashboard preferences here. Changes will be applied immediately across all your devices.</p>
          <br />
          <arc-input label="Dashboard Title" placeholder="My Dashboard" helper-text="Customize your dashboard name"></arc-input>
        </div>
        <div slot="footer">
          <div style="display: flex; gap: 12px; justify-content: flex-end;">
            <arc-button variant="ghost" on:arcClick={closeModal}>Cancel</arc-button>
            <arc-button variant="primary" on:arcClick={closeModal}>Save Changes</arc-button>
          </div>
        </div>
      </arc-modal>
    </div>
  </section>
</div>
