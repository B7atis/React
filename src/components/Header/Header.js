import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container> 
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name='cat' />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/FAQ' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;

// Spraw, by komponent renderował:
// element <header> z klasą komponentu wziętą z pliku styli;
// wewnątrz niego – element Container;
// wewnątrz elementu Container – element <div> z klasą wrapper wziętą z pliku styli;
// wewnątrz wrappera – komponent Link z klasą logo wziętą z pliku stylów i propsem to ustawionym na '/';
// wewnątrz komponentu Link – komponent Icon wyświetlający dowolną ikonę z FontAwesome;
// pod komponentem Link – element <nav>, w środku którego znajdą się dwa linki do naszych widoków:
// <NavLink exact to='/'>Home</NavLink>
// <NavLink exact to='/info'>Info</NavLink>