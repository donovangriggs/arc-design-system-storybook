import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineCustomElements } from '@arctech/core/loader';
import {
  ArcButton,
  ArcCard,
  ArcInput,
  ArcBadge,
  ArcAvatar,
  ArcModal,
  ArcAlert,
  ArcTooltip,
  ArcIcon,
} from './directives';

const DECLARATIONS = [
  ArcButton,
  ArcCard,
  ArcInput,
  ArcBadge,
  ArcAvatar,
  ArcModal,
  ArcAlert,
  ArcTooltip,
  ArcIcon,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ArcComponentsModule {
  constructor() {
    defineCustomElements();
  }
}
