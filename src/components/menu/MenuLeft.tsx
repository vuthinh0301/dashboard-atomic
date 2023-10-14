import { useMemo, useState } from 'react';
import menu from './menu-config';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Icon } from '../icon/Icon';

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

  const menuClassName = classNames(className, 'w-full');
  const menuItemClass = 'flex items-center pl-6 py-4 relative w-full';
  const menuActive = 'flex w-full items-center cursor-pointer hover:bg-white/10';
  const menuActiveMark = 'w-1 bg-white h-14 rounded-r-lg';
  const childMenuMark = 'w-1.5 h-1.5 rounded-full mx-2';
  let childMenuItemClass = '';
  let parentMenuItemClass = '';
  let iconParentMenuArrowClass = '';
  // const parentMenuClass = 'max-h-14 overflow-hidden';

  return (
    <div className={menuClassName}>
      {menus.map((menu, idx) => {
        if (!menu.children) {
          return (
            <Link
              key={idx}
              to={menu.route}
              className={menu.active ? menuActive.concat(' bg-white/10') : menuActive}
              onClick={onClick}
            >
              <div
                className={menu.active ? menuActiveMark : menuActiveMark.concat(' invisible')}
              ></div>
              <div className={menuItemClass}>
                <Icon icon={menu.icon} size={20}></Icon>
                <div className="ml-3 text-[15px]">{menu.title}</div>
              </div>
            </Link>
          );
        } else {
          parentMenuItemClass = classNames(
            'flex items-center cursor-pointer hover:bg-white/10',
            menu.active ? 'bg-white/10' : ''
          );
          iconParentMenuArrowClass = classNames('absolute right-5', menu.active ? 'rotate-90' : '');

          return (
            <div key={idx}>
              <div className="">
                <div className={parentMenuItemClass}>
                  <div
                    className={menu.active ? menuActiveMark : menuActiveMark.concat(' invisible')}
                  ></div>
                  <div className={menuItemClass}>
                    <Icon icon={menu.icon} size={20}></Icon>
                    <div className="ml-3 text-[15px]">{menu.title}</div>
                    <Icon icon="caret-right" size={16} className={iconParentMenuArrowClass}></Icon>
                  </div>
                </div>

                {menu.children.map((child, idx) => {
                  childMenuItemClass = classNames(
                    menuItemClass,
                    'hover:bg-white/10',
                    child.active ? 'bg-white/10' : ''
                  );

                  return (
                    <Link key={idx} to={child.route} className={childMenuItemClass}>
                      <div
                        className={
                          child.active
                            ? childMenuMark.concat(' bg-white')
                            : childMenuMark.concat(' bg-white/30')
                        }
                      ></div>
                      <div className="ml-3 text-[15px]">{child.title}</div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
