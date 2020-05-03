import React from 'react';
import styles from '../styles/Home.module.scss';
import { Search } from '../../../components/Search';
import { useHome } from '../hooks/useHome';
import { Loading } from '../../../components/Loading';
import { Library } from './Library';

type HomeProps = {
  chart: any,
  openChart: (newTask: any) => void,
  closeChart: () => void
}

const Home: React.FunctionComponent<HomeProps> = (props: HomeProps) => {
  const { data, updateFilter, loading } = useHome(props);

  return (
    <main className={styles.home__main}>
      <header>
        <h1>Bundle size</h1>
        <div className={styles.home__logo} />
      </header>
      <nav>
        <h3>Select a library to analyze the bundle size</h3>
        <Search
          updateFilter={updateFilter}
          placeholder={'Search...'}
        />
      </nav>
      <section>
        {loading &&
          <Loading type="search" />
        }
        {!loading &&
          Array.isArray(data) &&
          data.length === 0 &&
          <>
            <Loading type="notfound" />
            <h1>No data found...</h1>
          </>
        }
        {!loading && Array.isArray(data) && data.length > 0 &&
          <Library
            data={data}
            clickChart={props.openChart}
            chart={props.chart}
          />
        }
      </section>
    </main>
  );
}

export default Home;