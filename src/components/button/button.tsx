import { ComponentProps } from 'react';
import { variants, type ButtonVariants } from './button-variant';

export type ButtonProps = ComponentProps<'button'> & ButtonVariants;
export const Button = ({
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}: ButtonProps) => {
  return <button className={variants({ variant, size })} {...props} />;
};
