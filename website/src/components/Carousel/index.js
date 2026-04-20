import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './styles.module.css';

const CARDS = [
  {
    img: '/img/card1.jpg',
    title: 'Lucky Stats',
    text: 'A Melee analytics platform featuring statistics, Elo rankings, and tournaments powered by Start.gg',
    link: 'https://luckystats.gg/',
  },
  {
    img: '/img/card5.png',
    title: 'Netplay Event Starter Tools',
    text: 'A set of tools for running online Start.gg events with Adomin Discord bot, Discord server template, and OBS stream scenes',
    link: 'https://enpicie.github.io/nest/',
  },
  {
    img: '/img/card2.png',
    title: 'S.M.A.R.T.',
    text: 'Computer vision app that integrates with Start.gg to automatically report fighting game match results',
    link: 'https://skpeter.github.io/smart-user-guide/',
  },
  {
    img: '/img/card4.png',
    title: 'BracketFlow',
    text: 'Broadcast overlay connecting Start.gg to your stream with real-time scores, dynamic animations, and viewer engagement.',
    link: 'https://bracketflow.fr/',
  },
  {
    img: '/img/card3.png',
    title: 'FindMyFGC',
    text: 'Live map tool to find fighting game events in your area using the Start.gg API',
    link: 'https://www.findmyfgc.cc/',
  },
];

const DURATION = 600;

function Card({ card, className }) {
  const inner = (
    <>
      <div className={styles.thumbnail}>
        <img src={card.img} alt={card.title} />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <p className={styles.cardText}>{card.text}</p>
      </div>
    </>
  );
  if (card.link) {
    return (
      <a className={className} href={card.link} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return <div className={className}>{inner}</div>;
}

export default function Carousel() {
  // Single state object avoids intermediate renders between multiple setStates
  const [slide, setSlide] = useState({
    current: 0,
    next: null,
    direction: 'right',
    transitioning: false,
  });

  const busyRef = useRef(false);
  const autoPlayRef = useRef(true);

  const navigate = useCallback((dir, fromIndex, manual = false) => {
    if (manual) autoPlayRef.current = false;
    if (busyRef.current) return;
    const newIndex = dir === 'right'
      ? (fromIndex + 1) % CARDS.length
      : (fromIndex - 1 + CARDS.length) % CARDS.length;
    busyRef.current = true;
    setSlide({ current: fromIndex, next: newIndex, direction: dir, transitioning: true });
    setTimeout(() => {
      setSlide({ current: newIndex, next: null, direction: dir, transitioning: false });
      busyRef.current = false;
    }, DURATION);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide(prev => {
        if (!busyRef.current && autoPlayRef.current) {
          navigate('right', prev.current);
        }
        return prev;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [navigate]);

  const { current, next, direction, transitioning } = slide;

  const exitClass = direction === 'right' ? styles.exitLeft : styles.exitRight;
  const enterClass = direction === 'right' ? styles.enterRight : styles.enterLeft;
  const activeIndex = transitioning ? next : current;

  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.heading}>Featured Projects</h2>
      <div className={styles.wrapper}>
        <button className={styles.arrow} onClick={() => navigate('left', current, true)} aria-label="Previous">&#8249;</button>
        <div className={styles.cardWrapper}>
          {transitioning && (
            <Card card={CARDS[current]} className={[styles.card, exitClass].join(' ')} />
          )}
          <Card card={CARDS[activeIndex]} className={[styles.card, transitioning ? enterClass : ''].join(' ')} />
        </div>
        <button className={styles.arrow} onClick={() => navigate('right', current, true)} aria-label="Next">&#8250;</button>
      </div>
      <div className={styles.dots}>
        {CARDS.map((_, i) => (
          <button
            key={i}
            className={[styles.dot, i === activeIndex ? styles.dotActive : ''].join(' ')}
            onClick={() => {
              if (i !== current) navigate(i > current ? 'right' : 'left', current);
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      <a className={styles.viewMore} href="/projects">
        View All
      </a>
    </section>
  );
}
