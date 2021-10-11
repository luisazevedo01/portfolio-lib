import React, { FC } from 'react';
import { GoHome } from 'react-icons/go';
import { ImProfile } from 'react-icons/im';
import { ImNewspaper } from 'react-icons/im';
import { RiMailSendLine } from 'react-icons/ri';
import { GiBookCover } from 'react-icons/gi';
import './Header.css';

//TODO: Routing system.
//TODO: Change components nomenclature
export const Header: FC = () => {
  const redirect = (location: string): void => {
    window.location.href = location;
  };

  return (
    <section className="header">
      <ul className="header_list">
        <GoHome size="30" onClick={() => redirect('/home')} />
        <GiBookCover size="30" onClick={() => redirect('/work')} />
        <ImProfile size="30" onClick={() => redirect('/about')} />
        <ImNewspaper size="30" onClick={() => redirect('/blog')} />
        <RiMailSendLine size="30" onClick={() => redirect('/contact')} />
      </ul>
    </section>
  );
};
