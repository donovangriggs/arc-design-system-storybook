import { useState } from 'react';
import { ArcButton, ArcTooltip, ArcModal, ArcAlert } from '@arctech/react';

export function ModalSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="section">
        <h2 className="section-title">Tooltip & Modal</h2>
        <div className="extras-row">
          <ArcTooltip content="This button does nothing special" position="top">
            <ArcButton variant="outline">Hover for Tooltip</ArcButton>
          </ArcTooltip>

          <ArcButton
            variant="primary"
            onArcClick={() => setModalOpen(true)}
          >
            Open Modal
          </ArcButton>
        </div>
      </section>

      <ArcModal
        open={modalOpen}
        size="md"
        closeOnOverlay
        closeOnEscape
        onArcClose={() => setModalOpen(false)}
      >
        <div className="modal-body">
          <h2>ArcTech Notification</h2>
          <p>
            This modal demonstrates the ArcModal component from the design system.
            It supports overlay dismiss, escape key handling, and multiple sizes.
          </p>
          <ArcAlert variant="info" icon>
            Modals are great for confirmations, forms, and focused content.
          </ArcAlert>
          <div className="modal-actions">
            <ArcButton variant="ghost" onArcClick={() => setModalOpen(false)}>
              Cancel
            </ArcButton>
            <ArcButton variant="primary" onArcClick={() => setModalOpen(false)}>
              Confirm
            </ArcButton>
          </div>
        </div>
      </ArcModal>
    </>
  );
}
