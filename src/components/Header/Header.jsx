import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

import Search from '../Search';
import Logo from '!svg-inline-loader!../../assets/images/svg/DDLogo.svg'

const Header = ({ classes }) => (
  <header className={classes.header}>
    <a href='/' dangerouslySetInnerHTML={{ __html: Logo }} className={classes.logo} />
    <Search />
  </header>
);

Header.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default injectSheet(styles)(Header);
