import {ComponentProps, FC} from "react";
import {IconType} from "react-icons";
import {clsx} from "clsx";

type ButtonVariants = 'filled' | 'transparent'

export interface ButtonProps extends ComponentProps<'button'> {
  variant: ButtonVariants,
  icon?: IconType,
}

export const Button: FC<ButtonProps> = (
  {
    variant,
    icon,
    children
  }
) => {
  
  const isVariantFilled = variant === 'filled';
  const isVariantTransparent = variant === 'transparent'
  
  const buttonClasses = clsx(
    'transition-colors',
    'rounded-md',
    'flex',
    'items-center',
    'justify-center',
    'gap-2',
    'uppercase',
    'h-[56px]',
    'w-full',
    icon ? 'text-xs' : 'text-base',
    icon && 'tracking-widest',
    isVariantFilled && 'bg-white',
    isVariantFilled && 'text-dark-100',
    isVariantTransparent && 'bg-transparent',
    isVariantTransparent && 'hover:bg-white/20'
  )
  
  return (
    <button className={buttonClasses}>
      {icon && icon({
        size: 20
      })}
      <p className='rounded'>
        {children}
      </p>
    </button>
  );
};