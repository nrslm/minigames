import './button.scss';

export type ButtonVariant = 'primary' | 'card' | 'secondary' | 'outline';
export type ButtonSize = 'large' | 'medium' | 'small' | 'icon';

export interface ButtonProps {
  text?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: (event: MouseEvent) => void;
  disabled?: boolean;
}

export function createButton(props: ButtonProps): HTMLButtonElement {
  const {
    text = '',
    variant = 'primary',
    size = 'medium',
    className = '',
    onClick,
    disabled = false,
  } = props;

  const button = document.createElement('button');
  button.type = 'button';
  button.disabled = disabled;
  
  button.className = `btn btn--${variant} btn--size-${size} ${className}`.trim();

  if (text) {
    const span = document.createElement('span');
    span.textContent = text;
    button.append(span);
  }

  if (onClick) {
    button.addEventListener('click', (e: MouseEvent) => onClick(e));
  }

  return button;
}