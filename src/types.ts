export type InputOnChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type InputKeyEvent = React.KeyboardEvent<HTMLInputElement>;

export type Package = {
  package: {
    name: string,
    description: string,
  }
}
export type Status = {
  name: string,
  checked: number,
  position: number
}

export type openChartProps = {
  name: string,
  open: Boolean
}