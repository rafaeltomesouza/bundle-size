import { useState } from 'react';
import { openChartProps } from '../../../types';
import { fetchSizeLibrary, fetchLibrary } from '../../../api';

type LibraryProps = {
  clickChart: (status: openChartProps) => void
}

type sizeProps = {
  currentVersion: number,
  gzip: number,
  minify: number,
  module: number
};

function useLibrary(props: LibraryProps) {
  const { clickChart } = props;
  const [open, setOpen] = useState(true);
  const [chartSelected, setChartSelected] = useState({});
  const [loading, setLoading] = useState(false);

  const openChart = (name: string) => {
    return () => {
      setLoading(true);

      Promise.all([
        fetchLibrary(name)
          .then(() => { }),
        fetchSizeLibrary(name)
          .then((data) => {
            let currentVersion: Array<Number> = [];
            let gzip: Array<Number> = [];
            let minify: Array<Number> = [];
            let module: Array<Number> = [];

            data.versions.forEach((version: sizeProps) => {
              currentVersion.push(version.currentVersion);
              gzip.push(version.gzip);
              minify.push(version.minify);
              module.push(version.module);
            });
            setChartSelected({
              currentVersion,
              gzip,
              minify,
              module
            });
            clickChart({ name, open });
            setOpen(open);
            setLoading(false);
          })
      ]);
    }
  }

  return {
    openChart,
    chartSelected,
    loading
  }

}

export { useLibrary };
