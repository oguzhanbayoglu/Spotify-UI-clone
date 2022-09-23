import React from "react";
import { Menu } from "@headlessui/react";
import down from "img/down.svg";
import up from "img/up.svg";
import neww from "img/new.svg";

function Auth() {
  const user = {
    name: "Oguzhan Bayoglu",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  };

  return (
    <div className="auth">
      <Menu as="div" className="menu-container">
        {({ open }) => (
          <>
            <Menu.Button className="menu-btn">
              <img className="user-avatar" src={user.avatar} alt="" />
              Profile
              {open ? (
                <img className="menu-arrow" src={up} alt="up" />
              ) : (
                <img className="menu-arrow" src={down} alt="down" />
              )}
            </Menu.Button>
            <Menu.Items className="menu-item-container">
              <Menu.Item className="menu-item">
                {({ active }) => (
                  <a
                    className={`${active && "menu-item-active"}`}
                    href="/account"
                  >
                    Account
                    <img className="new" src={neww} alt="new" />
                  </a>
                )}
              </Menu.Item>
              <Menu.Item className="menu-item">
                {({ active }) => (
                  <a
                    className={`${active && "menu-item-active"}`}
                    href="/profile"
                  >
                    Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item className="menu-item">
                {({ active }) => (
                  <a
                    className={`${active && "menu-item-active"}`}
                    href="/upgrade"
                  >
                    Upgrade to Premium
                    <img className="new" src={neww} alt="new" />
                  </a>
                )}
              </Menu.Item>
              <Menu.Item className="menu-item">
                {({ active }) => (
                  <a
                    className={`${active && "menu-item-active"}`}
                    href="/settings"
                  >
                    Settings
                  </a>
                )}
              </Menu.Item>
              <div className="hr"></div>
              <Menu.Item className="menu-item">
                {({ active }) => (
                  <a
                    className={`${active && "menu-item-active"}`}
                    href="/logout"
                  >
                    Log out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}

export default Auth;
