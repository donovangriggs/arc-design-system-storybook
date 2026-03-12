import { ArcInput } from '@arctech/react';

export function FormSection() {
  return (
    <section className="section">
      <h2 className="section-title">Form Inputs</h2>
      <div className="form-grid">
        <ArcInput
          label="Full Name"
          placeholder="Enter your name"
          type="text"
          name="name"
          helperText="First and last name"
        />
        <ArcInput
          label="Email Address"
          placeholder="admin@arctech.io"
          type="email"
          name="email"
          helperText="We will never share your email"
        />
        <ArcInput
          label="Password"
          placeholder="Enter password"
          type="password"
          name="password"
          helperText="Minimum 8 characters"
        />
      </div>
    </section>
  );
}
