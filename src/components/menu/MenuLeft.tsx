import { useMemo, useState } from 'react';
import menu from './menu-config';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../icon/Icon';
import ParentMenuItem from './ParentMenuItem';

type MenuLeftProps = {
  className?: string;
  onClick?: () => void;
};

export const MenuLeft = ({ className, onClick }: MenuLeftProps) => {
  const [menuArr] = useState(menu);
  const currentPathObj = useLocation();
  const menus = useMemo(() => {
    const currentPath = currentPathObj.pathname;

    return menuArr.map((menu) => {
      const clone = Object.assign({}, menu);
      if (clone.children) {
        let hasChildActive = false;

        clone.children.forEach((child) => {
          if (child.route === currentPath) {
            child.active = true;
            hasChildActive = true;
          } else {
            child.active = false;
          }
        });

        clone.active = hasChildActive;
      } else {
        clone.active = clone.route === currentPath;
      }

      return clone;
    });
  }, [menuArr, currentPathObj.pathname]);

  // const parentMenuClass = 'max-h-14 overflow-hidden';

  return (
    <div className={className}>
      {menus.map((menu, idx) => {
        if (!menu.children) {
          return (
            <Link
              key={idx}
              to={menu.route}
              className={`flex w-full items-center cursor-pointer hover:bg-white/10 ${
                menu.active ? 'bg-white/10' : ''
              }`}
              onClick={onClick}
            >
              <div className={`w-1 bg-white h-14 rounded-r-lg ${menu.active ? '' : 'invisible'}`} />
              <div className="flex items-center pl-6 py-4 relative w-full">
                <Icon icon={menu.icon} size={20}></Icon>
                <div className="ml-3 text-[15px]">{menu.title}</div>
              </div>
            </Link>
          );
        } else {
          return (
            <div key={idx}>
              <ParentMenuItem menu={menu} onClick={onClick} />
            </div>
          );
        }
      })}
    </div>
  );
};
