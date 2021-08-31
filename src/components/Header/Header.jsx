import React from 'react';
import { useTranslation } from 'react-i18next';
import launch from '@images/launch.png';
import './header.scss';

const Header = () => {
  const { t } = useTranslation('common');
  return (
    <header className="header">
      <figure className="header__logo">
        <img src={launch} alt="logo" />
      </figure>
      <h1>
        Red Minds Development
      </h1>
    </header>
  );
};

export default Header;
