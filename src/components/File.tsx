import { ShortData } from "../App";
import { SizedFileIcon } from "./styles";

export const File = ({ name }: ShortData) => {
  return (
    <div>
      <SizedFileIcon /> {name}
    </div>
  );
};

export const fileStrategy = ({ name }: ShortData) => {
  return <File name={name} />;
};
