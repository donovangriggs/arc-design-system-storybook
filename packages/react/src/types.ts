import type { ReactNode } from 'react';

/** Base type for all Arc component props, satisfying Record<string, unknown> for the wrapper factory. */
interface ArcBaseProps {
  readonly [key: string]: unknown;
}

// ── ArcButton ──────────────────────────────────────────────────────────────

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ArcButtonProps extends ArcBaseProps {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly disabled?: boolean;
  readonly loading?: boolean;
  readonly type?: ButtonType;
  readonly onArcClick?: (event: CustomEvent<void>) => void;
  readonly children?: ReactNode;
}

// ── ArcCard ────────────────────────────────────────────────────────────────

export type CardVariant = 'default' | 'elevated' | 'outlined';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface ArcCardProps extends ArcBaseProps {
  readonly variant?: CardVariant;
  readonly padding?: CardPadding;
  readonly clickable?: boolean;
  readonly children?: ReactNode;
}

// ── ArcInput ───────────────────────────────────────────────────────────────

export type InputType = 'text' | 'email' | 'password' | 'search' | 'number' | 'tel' | 'url';
export type InputSize = 'sm' | 'md' | 'lg';

export interface ArcInputProps extends ArcBaseProps {
  readonly type?: InputType;
  readonly placeholder?: string;
  readonly value?: string;
  readonly label?: string;
  readonly helperText?: string;
  readonly errorMessage?: string;
  readonly disabled?: boolean;
  readonly required?: boolean;
  readonly size?: InputSize;
  readonly name?: string;
  readonly onArcInput?: (event: CustomEvent<string>) => void;
  readonly onArcChange?: (event: CustomEvent<string>) => void;
  readonly onArcFocus?: (event: CustomEvent<void>) => void;
  readonly onArcBlur?: (event: CustomEvent<void>) => void;
  readonly children?: ReactNode;
}

// ── ArcBadge ───────────────────────────────────────────────────────────────

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface ArcBadgeProps extends ArcBaseProps {
  readonly variant?: BadgeVariant;
  readonly size?: BadgeSize;
  readonly dot?: boolean;
  readonly pill?: boolean;
  readonly children?: ReactNode;
}

// ── ArcAvatar ──────────────────────────────────────────────────────────────

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'circle' | 'square';

export interface ArcAvatarProps extends ArcBaseProps {
  readonly src?: string;
  readonly alt?: string;
  readonly name?: string;
  readonly size?: AvatarSize;
  readonly shape?: AvatarShape;
}

// ── ArcModal ───────────────────────────────────────────────────────────────

export type ModalSize = 'sm' | 'md' | 'lg' | 'full';

export interface ArcModalProps extends ArcBaseProps {
  readonly open?: boolean;
  readonly size?: ModalSize;
  readonly closeOnOverlay?: boolean;
  readonly closeOnEscape?: boolean;
  readonly onArcClose?: (event: CustomEvent<void>) => void;
  readonly children?: ReactNode;
}

// ── ArcAlert ───────────────────────────────────────────────────────────────

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface ArcAlertProps extends ArcBaseProps {
  readonly variant?: AlertVariant;
  readonly alertTitle?: string;
  readonly dismissible?: boolean;
  readonly icon?: boolean;
  readonly onArcDismiss?: (event: CustomEvent<void>) => void;
  readonly children?: ReactNode;
}

// ── ArcTooltip ─────────────────────────────────────────────────────────────

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

export interface ArcTooltipProps extends ArcBaseProps {
  readonly content?: string;
  readonly position?: TooltipPosition;
  readonly delay?: number;
  readonly children?: ReactNode;
}

// ── ArcIcon ────────────────────────────────────────────────────────────────

export interface ArcIconProps extends ArcBaseProps {
  readonly name?: string;
  readonly size?: number;
  readonly color?: string;
  readonly strokeWidth?: number;
}

// ── Shared utility types ────────────────────────────────────────────────────

export interface EventMap {
  readonly [eventName: string]: string;
}
