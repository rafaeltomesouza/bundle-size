import { openChartProps } from '../types';
export const OPEN_STATUS = "OPEN_STATUS";
export const CLOSE_CHART = "CLOSE_CHART";

export const openChart = (status: openChartProps) => {
  return { type: OPEN_STATUS, status };
}

export const closeChart = () => {
  return { type: CLOSE_CHART };
}
