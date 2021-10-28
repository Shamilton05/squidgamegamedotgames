import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>SQUIDGAMEGAME.GAMES</div>
        <nav>
          <ul>
            <li>
              <a href='/'>squid</a>
            </li>
            <li>
              <a href='/'>game</a>
            </li>
            <li>
              <a href='/'>game</a>
            </li>
            <li>
              <a href='/'>.games</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
