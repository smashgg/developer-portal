import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const UserLink = ({ infoLink, image, caption }) => (
  <a
    className={styles.showcaseLink}
    href={infoLink}
    key={infoLink}
    target="_blank">
    <img src={image} alt={caption} title={caption} />
    <span className={styles.showcaseCaption}>{caption}</span>
  </a>
);

UserLink.propTypes = {
  infoLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export const Showcase = ({ users }) => (
  <div className={styles.showcase}>
    {users.map(user => (
      <UserLink key={user.infoLink} {...user} />
    ))}
  </div>
);

Showcase.propTypes = {
  users: PropTypes.array.isRequired,
};

Showcase.defaultProps = {
  users: [],
};
