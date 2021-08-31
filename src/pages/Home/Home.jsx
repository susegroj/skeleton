/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '@components';

import './home.scss';

const Home = () => {
  const { t } = useTranslation('common');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);


  const cards = [
    {
      id: 1,
      image: "https://source.unsplash.com/500x501/?code",
      title: "De Figma a CSS en un click con este plugin",
      user: {
        name: "Juan Pablo",
        avatar: "https://i.pravatar.cc/300?u=Leo"
      },
      time: '8 min',
    },
    {
      id: 2,
      image: "https://source.unsplash.com/500x502/?photography",
      title: "Toma Fotografías que luzcan profesionales con tu teléfono",
      user: {
        name: "Carlos",
        avatar: "https://i.pravatar.cc/300?u=Carlos"
      },
      time: '6 min',
    },
    {
      id: 3,
      image: "https://source.unsplash.com/500x502/?books",
      title: "T3 libros para comenzar en UX-UI",
      user: {
        name: "susegroj",
        avatar: "https://i.pravatar.cc/300?u=susegroj"
      },
      time: '8 min',
    },
    {
      id: 4,
      image: "https://source.unsplash.com/500x502/?study",
      title: "Becas por estudiar",
      user: {
        name: "Humberto",
        avatar: "https://i.pravatar.cc/300?u=Humberto"
      },
      time: '8 min',
    },
    {
      id: 5,
      image: "https://source.unsplash.com/500x502/?colors",
      title: "Más que un color bonito",
      user: {
        name: "Sandra",
        avatar: "https://i.pravatar.cc/300?u=Sandra"
      },
      time: '8 min',
    },
    {
      id: 6,
      image: "https://source.unsplash.com/500x502/?write",
      title: "El misterio de las APIs",
      user: {
        name: "Mafer Mazu",
        avatar: "https://i.pravatar.cc/300?u=Mafer-Mazu"
      },
      time: '8 min',
    },
    {
      id: 7,
      image: "https://source.unsplash.com/500x502/?robots",
      title: "Hola Cypress",
      user: {
        name: "Miguel",
        avatar: "https://i.pravatar.cc/300?u=Miguel"
      },
      time: '10 min',
    },
    {
      id: 9,
      image: "https://source.unsplash.com/500x502/?programming",
      title: "Qué har detrás de flex:1;",
      user: {
        name: "Jorge",
        avatar: "https://i.pravatar.cc/300?u=Jorge"
      },
      time: '6 min',
    },
    {
      id: 10,
      image: "https://source.unsplash.com/500x502/?latops",
      title: "Desearás haber comenzado hoy",
      user: {
        name: "Humberto",
        avatar: "https://i.pravatar.cc/300?u=Humberto"
      },
      time: '8 min',
    },
  ];

  const Skeleton = ({ id }) => (
    <div className="card" key={id}>
      <figure className="card-image skeleton" />
      <div className="card-content">
        <div className="text-wrapper">
          <div className="skeleton skeleton-text" />
          <div className="skeleton skeleton-text" />
          <div className="skeleton skeleton-text" />
        </div>
        <figure className="service-image skeleton" />  
        
        <div className="footer">
          <figure className="footer-user skeleton" />

          <div className="text-wrapper">
            <div className="skeleton skeleton-text" />
          </div>
          <div className="text-wrapper">
            <div className="skeleton skeleton-text" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Layout tabTitle={t('tabs.home')}>
      <div className="main-home">
        <h2>{t('tabs.home')}</h2>
        <div className="card-list">
          {
            cards.map((card) => {
              if(isLoading)
                return <Skeleton id={card.id} key={card.id} />;
              return (
                <div className="card" key={card.id}>
                  <figure className="card-image skeleton">
                    <img src={card.image} alt={card.title} />
                  </figure>
                  
                  <div className="card-content">
                    <h3>{card.title}</h3>

                    <div className="footer">
                      <figure className="footer-user">
                        <img src={card.user.avatar} alt={card.user.name} />
                      </figure>
                      <span className="name">{card.user.name}</span>
                      <div className="dot" />
                      <span className="read">
                        {card.time}
                        {' '}
                        read
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </Layout>
  );
};

export default Home;
