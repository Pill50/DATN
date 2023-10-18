import React, { ReactNode, MouseEventHandler } from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  href?: string;
  type?: string;
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  text?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  small?: boolean;
  large?: boolean;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const Button: React.FC<ButtonProps> = ({
  to,
  href,
  type,
  primary = false,
  secondary = false,
  outline = false,
  text = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  children,
  leftIcon,
  rightIcon,
  onClick,
}) => {
  let Comp: React.ElementType = 'button';

  if (to) {
    Comp = Link;
  } else if (href) {
    Comp = 'a';
  }

  const handleClick: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> | undefined = disabled
    ? undefined
    : onClick;

  const classes = `wrapper ${primary ? 'primary' : ''} ${secondary ? 'secondary' : ''} ${outline ? 'outline' : ''} ${
    text ? 'text' : ''
  } ${disabled ? 'disabled' : ''} ${rounded ? 'rounded' : ''} ${small ? 'small' : ''} ${large ? 'large' : ''}`;

  return (
    <Comp type={type} to={to} href={href} className={classes} onClick={handleClick} disabled={disabled}>
      {leftIcon && <span className="icon">{leftIcon}</span>}
      <span className="btn-title">{children}</span>
      {rightIcon && <span className="icon">{rightIcon}</span>}
    </Comp>
  );
};

export default Button;
