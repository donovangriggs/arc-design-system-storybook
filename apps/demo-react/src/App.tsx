import { DashboardHeader } from './sections/DashboardHeader';
import { AlertsSection } from './sections/AlertsSection';
import { StatCardsSection } from './sections/StatCardsSection';
import { ButtonsSection } from './sections/ButtonsSection';
import { FormSection } from './sections/FormSection';
import { IconsSection } from './sections/IconsSection';
import { ModalSection } from './sections/ModalSection';

export function App() {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <AlertsSection />
      <StatCardsSection />
      <ButtonsSection />
      <FormSection />
      <IconsSection />
      <ModalSection />
    </div>
  );
}
