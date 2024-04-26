import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    if (window.innerWidth < 1024) {
      const HAMBURGER_ID = "hamburger-menu-btn";
      const HIDDEN_CLASS = "hidden";

      const hamburgerMenuBtn = document.querySelector(`#${HAMBURGER_ID}`);
      const closeMenuBtn = document.querySelector("#close-menu-btn");
      const menuOverlay = document.querySelector("#menu-overlay");
      const mainMenu = document.querySelector("#nav-links");

      const hideOpenMenuBtn = () =>
        hamburgerMenuBtn?.classList.add(HIDDEN_CLASS);
      const showCloseMenuBtn = () =>
        closeMenuBtn?.classList.remove(HIDDEN_CLASS);
      const showOverlay = () => menuOverlay?.classList.remove(HIDDEN_CLASS);
      const showMenu = () => {
        mainMenu?.classList.remove(HIDDEN_CLASS);
        mainMenu?.classList.add("max-lg:flex");
      };
      const showOpenMenuBtn = () =>
        hamburgerMenuBtn?.classList.remove(HIDDEN_CLASS);
      const hideCloseMenuButton = () =>
        closeMenuBtn?.classList.add(HIDDEN_CLASS);
      const hideOverlay = () => menuOverlay?.classList.add(HIDDEN_CLASS);
      const hideMenu = () => {
        mainMenu?.classList.add(HIDDEN_CLASS);
        mainMenu?.classList.remove("max-lg:flex");
      };
      const disablePageScroll = () => {
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";
      };
      const enablePageScroll = () => {
        document.body.style.height = "auto";
        document.body.style.overflow = "unset";
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const toggleMenu = (event: any) => {
        if (event.currentTarget.id === HAMBURGER_ID) {
          hideOpenMenuBtn();
          showCloseMenuBtn();
          showOverlay();
          showMenu();
          disablePageScroll();
        } else {
          showOpenMenuBtn();
          hideCloseMenuButton();
          hideOverlay();
          hideMenu();
          enablePageScroll();
        }
      };

      hamburgerMenuBtn?.addEventListener("click", toggleMenu);
      closeMenuBtn?.addEventListener("click", toggleMenu);
    }
  }, []);

  return (
    <nav className="w-full md:px-[var(--desktop-padding)] px-[var(--mobile-padding)] bg-white relative z-50 flex md:justify-between md:items-center max-md:h-16 md:h-[5rem] pt-[1.125rem] max-lg:justify-between">
      <div className="logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>

      <button
        id="hamburger-menu-btn"
        className="lg:hidden w-[1.25rem] h-[1.25rem]"
        type="button"
      >
        <img
          src="/images/icon-hamburger.svg"
          className="h-full w-full"
          alt="menu icon"
        />
      </button>

      <button
        id="close-menu-btn"
        className="hidden lg:hidden w-[1.25rem] h-[1.25rem]"
        type="button"
      >
        <img
          src="/images/icon-close.svg"
          className="h-full w-full"
          alt="menu icon"
        />
      </button>

      <div
        id="menu-overlay"
        className="overlay w-full top-[2.5rem] md:top-[5rem] left-0 hidden lg:hidden absolute z-40 bg-[url('/images/overlay-mobile-menu.png')] h-[90vh] bg-no-repeat bg-cover"
      ></div>

      <ul
        role="menu"
        id="nav-links"
        className="hidden max-lg:flex-col max-lg:absolute max-lg:top-[4.5rem] max-lg:w-[83.84%] max-lg:z-50 max-lg:gap-6 max-lg:text-center max-lg:py-8 max-lg:h-auto max-lg:rounded-[4px] max-lg:bg-white lg:flex lg:flex-row md max-lg:justify-between max-lg:items-center md:gap-[30px] h-[2.75rem] mt-[1.3rem]"
      >
        <li
          className="menuitem md:text-[var(--text-light-grey)] md:text-[0.875rem] max-md:text-[1.125rem] h-full cursor-pointer flex flex-col justify-between"
          role="menuitem"
        >
          Home
        </li>
        <li
          className="menuitem md:text-[var(--text-light-grey)] md:text-[0.875rem] max-md:text-[1.125rem] h-full cursor-pointer flex flex-col justify-between"
          role="menuitem"
        >
          About
        </li>
        <li
          className="menuitem md:text-[var(--text-light-grey)] md:text-[0.875rem] max-md:text-[1.125rem] h-full cursor-pointer flex flex-col justify-between"
          role="menuitem"
        >
          Contact
        </li>
        <li
          className="menuitem md:text-[var(--text-light-grey)] md:text-[0.875rem] max-md:text-[1.125rem] h-full cursor-pointer flex flex-col justify-between"
          role="menuitem"
        >
          Blog
        </li>
        <li
          className="menuitem md:text-[var(--text-light-grey)] md:text-[0.875rem] max-md:text-[1.125rem] h-full cursor-pointer flex flex-col justify-between"
          role="menuitem"
        >
          Careers
        </li>
      </ul>

      <button className="call-to-action max-lg:hidden lg:block text-white text-[0.875rem] rounded-[22px] text-center px-[34px] py-[0.5rem] bg-center">
        Request Invite
      </button>
    </nav>
  );
};

export default Navbar;
