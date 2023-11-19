import {ComponentProps, FC} from "react";
import {IconType} from "react-icons";
import {clsx} from "clsx";

export interface InputProps extends ComponentProps<'input'> {
  rounded?: boolean,
  icon?: IconType,
}

export const Input: FC<InputProps> = (
  {
    type,
    rounded,
    icon,
    ...rest
  }
) => {
  
  const wrapperClasses = clsx('flex', 'items-center', 'gap-2', 'text-gray', 'bg-dark-200', 'p-2', rounded && 'rounded-2xl')
  const inputClasses = clsx('bg-transparent', 'placeholder-gray', 'text-white', 'text-sm', 'w-full')
  
  return (
    <div className={wrapperClasses}>
      {icon && icon({})}
      <input
        className={inputClasses}
        type={type}
        {...rest}
      />
    </div>
  );
};