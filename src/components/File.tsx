import { ShortData } from "../App";

export const File = ({ name }: ShortData) => {
  return <div>File: {name}</div>;
};

export const fileStrategy = ({ name }: ShortData) => {
  return <File name={name} />;
};
