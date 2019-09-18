import React from 'react';
import { compose, withStateHandlers, withHandlers, withProps } from 'recompose';
import injectSheet from 'react-jss';
import styles from './styles';
import { inject, observer } from "mobx-react";

const enhance = compose(
  inject('store'),

  withProps(({ store: { userStore } }) => ({
    store: userStore,
  })),

  withHandlers({
    getDiveSitesList: ({ store }) => () => {
      fetch('http://api.divesites.com/?mode=sites&lat=47.6031537682643&lng=-122.336164712906', { method: 'POST' }).then((resp) => console.log(resp.json()))
    }
  }),

  withStateHandlers(() => ({
    inputWidth: 200
  }),{
    setInputWidth: () => (width) => ({
      inputWidth: width
    }),
  }),

  injectSheet(styles),
  observer
);

const Search = ({ classes, setInputWidth, getDiveSitesList }) => (
  <div>
    <input
      type='text'
      name='searchField'
      className={classes.search}
      onFocus={() => setInputWidth(400)}
      onBlur={() => setInputWidth(200)}
      onChange={getDiveSitesList}
    />
  </div>
);

export default enhance(Search);
