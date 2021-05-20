import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    return (
      <h4 className={styles.component}>{this.props.title}</h4>
    );
  }
}

export default Card;