import React from 'react';
import { Package } from '../../../types';
import styles from '../styles/Library.module.scss';
import { useLibrary } from '../hooks/useLibrary';
import { Statics } from './Statics';
import { openChartProps } from '../../../types';
import { Loading } from '../../../components/Loading';

type LibraryProps = {
  data: Array<Package>,
  chart: any,
  clickChart: (status: openChartProps) => void
}

const Library: React.FC<LibraryProps> = (props) => {
  const { data, clickChart, chart } = props;
  const { openChart, chartSelected, loading } = useLibrary({
    clickChart
  });
  return (
    <div className={`${styles.home__content} ${loading ? styles.home__cursor : ''}`}>
      {loading && <div className={styles.home__content__loading}>
        <Loading type="search" />
      </div>}
      <h1>Libraries found...</h1>
      <ul>
        {data.map((item: Package) => {
          return (
            <dl id={item.package.name} key={item.package.name} onClick={openChart(item.package.name)}>
              <dt>{item.package.name}</dt>
              <dd>{item.package.description}</dd>
              {!loading && chart.open
                && chart.name === item.package.name
                && <Statics data={chartSelected} />
              }
            </dl>
          );
        }
        )}
      </ul>
    </div>
  );
}

export { Library };
