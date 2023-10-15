import { Disclosure, Transition } from '@headlessui/react';
import { Icon } from '../icon/Icon';
import { Link } from 'react-router-dom';

type ParentMenuProps = {
  menu: any;
  onClick?: () => void;
};

export default function ParentMenuItem({ menu, onClick }: ParentMenuProps) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`w-full flex items-center hover:bg-white/10 relative ${
              menu.active ? 'bg-white/10' : ''
            }`}
          >
            <div
              className={`w-1 h-14 rounded-r-lg bg-white ${menu.active ? '' : 'invisible'}`}
            ></div>

            <div className="flex items-center py-4 ml-6">
              <Icon icon={menu.icon}></Icon>
              <div className="ml-3 text-[15px] font-normal">{menu.title}</div>
              <Icon
                icon="caret-right"
                size={16}
                className={`absolute right-6 ${open ? 'rotate-90' : ''}`}
              ></Icon>
            </div>
          </Disclosure.Button>
          <Transition
            enter="transition duration-200 ease-linear"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-200 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel as="div">
              {menu.children.map((child: any, idx: number) => (
                <Link
                  to={child.route}
                  key={idx}
                  className={`flex items-center h-14 hover:bg-white/10 ${
                    child.active ? 'bg-white/10' : ''
                  }`}
                  onClick={onClick}
                >
                  <div
                    className={`w-2 h-2 rounded-full ml-9 ${
                      child.active ? 'bg-white' : 'bg-white/30'
                    }`}
                  ></div>
                  <div className="ml-3">{child.title}</div>
                </Link>
              ))}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
