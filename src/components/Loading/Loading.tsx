import React from 'react';
import styles from './styles/Loading.module.scss';
import search from '../../assets/images/search.svg';
import notfound from '../../assets/images/notfound.gif';

type LoadingProps = {
  type: string
}

function Loading(props: { type: string; }) {
  return (
    <div className={styles.loading}>
      {props.type === 'search' ? <img src={search} alt="magifier" />
        : <img src={notfound} alt="not found" />}
    </div>
  )
}

export default Loading;