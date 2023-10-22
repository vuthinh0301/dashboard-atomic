import classNames from 'classnames';
import { Icon } from '../icon/Icon';
import { ReactNode } from 'react';

type BasicButtonProps = {
  color?: 'primary' | 'secondary';
  icon?: string;
  size?: 'normal' | 'small';
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

function BasicButton({
  color = 'primary',
  icon,
  size = 'normal',
  disabled = false,
  onClick = () => {},
  className,
  children
}: BasicButtonProps) {
  let buttonClass = '';
  switch (color) {
    case 'primary':
      buttonClass = classNames(
        className,
        size === 'normal'
          ? 'h-10 pb-[7px] hover:pb-[9px] disabled:pb-[9px]'
          : 'h-8 pb-[5px] hover:pb-[7px] disabled:pb-[7px]',
        'px-6 pt-2 border-b-2 hover:border-b-0 disabled:border-b-0 rounded-[14px] border-black/20 bg-accent disabled:bg-grey-3 disabled:text-grey-1 text-white hover:shadow-[0_8px_16px_0_rgba(48,76,253,0.2)] disabled:shadow-none font-medium',
        size === 'normal' ? 'text-[15px]' : 'text-xs'
      );
      break;
    case 'secondary':
      break;
  }
  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      <div className="flex items-center">
        {icon && (
          <Icon
            icon={icon}
            size={size === 'normal' ? 20 : 16}
            className="mr-[5px]"
            weight="bold"
          ></Icon>
        )}
        <div>{children}</div>
      </div>
    </button>
  );
}

export default BasicButton;
