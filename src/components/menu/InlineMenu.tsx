import React, { useEffect, useState } from "react";
import update from 'immutability-helper';
import find from "lodash/find";
import cloneDeep from "lodash/cloneDeep";

import { Link } from "gatsby";

type Menu = {
  label: string;
  ref: any;
  link: string;
  active: boolean;
}

const PADDING_WIDTH = 15;

const Menu = () => {

  const [menu, setMenu] = useState<Menu[]>(
    [
      {label: "About", ref: React.createRef<HTMLLIElement>(), link: '/', active: true },
      {label: "Resume", ref: React.createRef<HTMLLIElement>(), link: '/resume', active: false }
    ]
  );

  const [slideLineWidth, setSlideLineWidth] = useState<number>(0);
  const [slideLinePadd, setSlideLinePadd] = useState<number>();

  const handleOnHover = (label: string) => {
    const itemMenu = find(menu, { label });
    changeSlideLinePosition(itemMenu);
  }

  const handleOnLeave = () => {
    const itemMenu = find(menu, { active: true });
    changeSlideLinePosition(itemMenu);
  }

  function changeSlideLinePosition(itemMenu: any) {
    if (itemMenu) {
      setSlideLineWidth(itemMenu.ref.current.getBoundingClientRect().width);
      setSlideLinePadd(itemMenu.ref.current.getBoundingClientRect().left - PADDING_WIDTH);
    }
  }

  const setActiveMenu = (label: string) => {
    let clonedMenu = cloneDeep(menu);
    clonedMenu.forEach(item => item.active = false);
    const itemMenu = find(clonedMenu, { label });
    const index = clonedMenu.indexOf(itemMenu);
    const newMenuItem = update(clonedMenu[index], {active: {$set: true }});
    const newMenu = update(clonedMenu, { $splice: [[index, 1, newMenuItem]]});
    setMenu(newMenu);
  }

  return (
    <header className="header">
      <div className="top-bar theme-bg-primary-darken">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark position-relative">
            <ul className="social-list list-inline mb-0">
              <li className="list-inline-item">
                <a className="text-white" href="https://www.linkedin.com/in/sergiodanilo/" target="_blank">
                <svg className="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw" aria-hidden="true" focusable="false"
                     data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512" data-fa-i2svg="">
                  <path fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="text-white" href="https://github.com/sergiodanilo" target="_blank">
                <svg className="svg-inline--fa fa-github-alt fa-w-15 fa-fw" aria-hidden="true" focusable="false"
                     data-prefix="fab" data-icon="github-alt" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 480 512" data-fa-i2svg="">
                  <path fill="currentColor"
                        d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
                </svg>
                </a>
              </li>
            </ul>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                    aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse text-uppercase" id="navigation">
              <ul className="navbar-nav ml-lg-auto">
                {
                  menu.map((item: any, idx: number) =>
                    <li
                      key={idx}
                      className={item.active ? 'nav-item mr-lg-3 active': 'nav-item mr-lg-3'}
                      ref={item.ref}
                      onMouseEnter={() => handleOnHover(item.label)}
                      onMouseLeave={() => handleOnLeave()}
                    >
                      <Link
                        to={item.link}
                        className="nav-link"
                        onClick={() => setActiveMenu(item.label)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                }
              </ul>
              <span id="slide-line" style={{ width: slideLineWidth, left: slideLinePadd }} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Menu;