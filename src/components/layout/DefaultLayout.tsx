import classNames from 'classnames';
import { ReactNode, useState } from 'react';
import Logo from '../logo/Logo';
import { Link } from 'react-router-dom';
import { Icon } from '../icon/Icon';
import { MenuLeft } from '../menu/MenuLeft';

interface Props {
  children?: ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const sideBarClassName = classNames(
    'w-[270px] bg-accent z-30 fixed h-screen text-white -translate-x-full lg:translate-x-0 transition-transform',
    isOpenSideBar ? 'translate-x-0' : ''
  );
  const overleyClass = classNames(
    'fixed inset-0 backdrop-blur-sm bg-grey-1/50 z-20 lg:hidden animate-fade animate-once animate-duration-200',
    !isOpenSideBar ? 'hidden' : ''
  );

  const closeSideBar = () => {
    setIsOpenSideBar(false);
  };
  return (
    <div>
      <div className={sideBarClassName}>
        <div onClick={() => setIsOpenSideBar(!isOpenSideBar)}>
          <Icon
            className="absolute top-1.5 right-1.5 text-white/60 hover:text-white cursor-pointer lg:hidden"
            icon="X"
            size={18}
          ></Icon>
        </div>
        <Link to="/">
          <Logo className="mt-[15px] ml-[26px]" />
        </Link>
        <MenuLeft className="mt-5 w-full" onClick={closeSideBar} />
      </div>
      <div className="fixed flex items-center h-[65px] border-b bg-white w-full z-10 lg:left-[270px]">
        <div
          className="p-2 cursor-pointer hover:bg-grey-4 ml-5 rounded-xl lg:hidden"
          onClick={() => setIsOpenSideBar(!isOpenSideBar)}
        >
          <Icon icon="list" />
        </div>
      </div>
      <div className="px-7 pt-[96px] lg:absolute lg:left-[270px]">{children}</div>
      <div className={overleyClass} onClick={() => setIsOpenSideBar(!isOpenSideBar)}></div>
    </div>
  );
};
