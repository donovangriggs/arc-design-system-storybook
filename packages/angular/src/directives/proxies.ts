import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  NgZone,
} from '@angular/core';

@Component({
  selector: 'arc-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class ArcButton implements OnDestroy {
  @Input() variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  @Input() size?: 'sm' | 'md' | 'lg';
  @Input() disabled?: boolean;
  @Input() type?: 'button' | 'submit' | 'reset';
  @Input() loading?: boolean;
  @Output() arcClick = new EventEmitter<void>();

  private readonly listeners: Array<() => void> = [];

  constructor(private el: ElementRef, private zone: NgZone) {
    const handler = () => {
      this.zone.run(() => this.arcClick.emit());
    };
    this.el.nativeElement.addEventListener('arcClick', handler);
    this.listeners.push(() => this.el.nativeElement.removeEventListener('arcClick', handler));
  }

  ngOnDestroy(): void {
    for (const cleanup of this.listeners) {
      cleanup();
    }
  }
}

@Component({
  selector: 'arc-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class ArcCard {
  @Input() variant?: 'default' | 'elevated' | 'outlined';
  @Input() padding?: 'none' | 'sm' | 'md' | 'lg';
  @Input() clickable?: boolean;

  constructor(private el: ElementRef) {}
}

@Component({
  selector: 'arc-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class ArcInput implements OnDestroy {
  @Input() type?: 'text' | 'email' | 'password' | 'search' | 'number' | 'tel' | 'url';
  @Input() value?: string;
  @Input() placeholder?: string;
  @Input() label?: string;
  @Input() helperText?: string;
  @Input() errorMessage?: string;
  @Input() disabled?: boolean;
  @Input() required?: boolean;
  @Input() size?: 'sm' | 'md' | 'lg';
  @Input() name?: string;
  @Output() arcInput = new EventEmitter<string>();
  @Output() arcChange = new EventEmitter<string>();
  @Output() arcFocus = new EventEmitter<void>();
  @Output() arcBlur = new EventEmitter<void>();

  private readonly listeners: Array<() => void> = [];

  constructor(private el: ElementRef, private zone: NgZone) {
    const nativeEl = this.el.nativeElement;

    const onInput = (event: CustomEvent<string>) => {
      this.zone.run(() => this.arcInput.emit(event.detail));
    };
    nativeEl.addEventListener('arcInput', onInput);
    this.listeners.push(() => nativeEl.removeEventListener('arcInput', onInput));

    const onChange = (event: CustomEvent<string>) => {
      this.zone.run(() => this.arcChange.emit(event.detail));
    };
    nativeEl.addEventListener('arcChange', onChange);
    this.listeners.push(() => nativeEl.removeEventListener('arcChange', onChange));

    const onFocus = () => {
      this.zone.run(() => this.arcFocus.emit());
    };
    nativeEl.addEventListener('arcFocus', onFocus);
    this.listeners.push(() => nativeEl.removeEventListener('arcFocus', onFocus));

    const onBlur = () => {
      this.zone.run(() => this.arcBlur.emit());
    };
    nativeEl.addEventListener('arcBlur', onBlur);
    this.listeners.push(() => nativeEl.removeEventListener('arcBlur', onBlur));
  }

  ngOnDestroy(): void {
    for (const cleanup of this.listeners) {
      cleanup();
    }
  }
}

@Component({
  selector: 'arc-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class ArcBadge {
  @Input() variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
  @Input() size?: 'sm' | 'md' | 'lg';
  @Input() dot?: boolean;
  @Input() pill?: boolean;

  constructor(private el: ElementRef) {}
}

@Component({
  selector: 'arc-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class ArcAvatar {
  @Input() src?: string;
  @Input() alt?: string;
  @Input() name?: string;
  @Input() size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  @Input() shape?: 'circle' | 'square';

  constructor(private el: ElementRef) {}
}

@Component({
  selector: 'arc-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class ArcModal implements OnDestroy {
  @Input() open?: boolean;
  @Input() size?: 'sm' | 'md' | 'lg' | 'full';
  @Input() closeOnOverlay?: boolean;
  @Input() closeOnEscape?: boolean;
  @Output() arcClose = new EventEmitter<void>();

  private readonly listeners: Array<() => void> = [];

  constructor(private el: ElementRef, private zone: NgZone) {
    const handler = () => {
      this.zone.run(() => this.arcClose.emit());
    };
    this.el.nativeElement.addEventListener('arcClose', handler);
    this.listeners.push(() => this.el.nativeElement.removeEventListener('arcClose', handler));
  }

  ngOnDestroy(): void {
    for (const cleanup of this.listeners) {
      cleanup();
    }
  }
}

@Component({
  selector: 'arc-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class ArcAlert implements OnDestroy {
  @Input() variant?: 'info' | 'success' | 'warning' | 'error';
  @Input() alertTitle?: string;
  @Input() dismissible?: boolean;
  @Input() icon?: boolean;
  @Output() arcDismiss = new EventEmitter<void>();

  private readonly listeners: Array<() => void> = [];

  constructor(private el: ElementRef, private zone: NgZone) {
    const handler = () => {
      this.zone.run(() => this.arcDismiss.emit());
    };
    this.el.nativeElement.addEventListener('arcDismiss', handler);
    this.listeners.push(() => this.el.nativeElement.removeEventListener('arcDismiss', handler));
  }

  ngOnDestroy(): void {
    for (const cleanup of this.listeners) {
      cleanup();
    }
  }
}

@Component({
  selector: 'arc-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class ArcTooltip {
  @Input() content?: string;
  @Input() position?: 'top' | 'right' | 'bottom' | 'left';
  @Input() delay?: number;

  constructor(private el: ElementRef) {}
}

@Component({
  selector: 'arc-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class ArcIcon {
  @Input() name?: string;
  @Input() size?: number;
  @Input() color?: string;
  @Input() strokeWidth?: number;

  constructor(private el: ElementRef) {}
}
