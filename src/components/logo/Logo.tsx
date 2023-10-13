import classNames from 'classnames';

export default function Logo({ className }: { className: string }) {
  const logoClassName = classNames(className, 'flex items-center cursor-pointer');
  return (
    <div className={logoClassName}>
      <svg
        width="25"
        height="26"
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Rocket">
          <path
            id="Vector"
            d="M4.13363 15.4844L9.11851 15.522C9.72671 15.5266 10.2451 15.9616 10.3552 16.5598L11.2579 21.4624C11.3543 21.9861 11.0031 22.4888 10.478 22.5788L4.31069 23.6365C3.73079 23.7359 3.20171 23.2919 3.19894 22.7036L3.16957 16.4463C3.16707 15.9135 3.60114 15.4804 4.13363 15.4844Z"
            fill="#FF965D"
          />
          <path
            id="Vector_2"
            d="M10.5065 1.2885L22.484 0.315192C22.9995 0.273302 23.4531 0.649982 23.5067 1.16439L24.7856 13.4587C24.847 14.049 24.3603 14.5533 23.7685 14.5126L0.812981 12.9347C0.294961 12.8991 0.0377807 12.2906 0.372291 11.8919L8.32158 2.41835C8.87018 1.76454 9.65728 1.35751 10.5065 1.2885Z"
            fill="white"
          />
          <path
            id="Vector_3"
            d="M15.4906 24.9883L22.0301 17.1948C22.3698 16.7899 22.0987 16.1726 21.5717 16.1511L13.6804 15.8289C13.0555 15.8034 12.5737 16.3766 12.7063 16.9878L14.3829 24.7171C14.4948 25.233 15.1505 25.3935 15.4906 24.9883Z"
            fill="white"
          />
        </g>
      </svg>
      <div className="ml-2.5 text-lg font-medium">Rocket</div>
    </div>
  );
}
