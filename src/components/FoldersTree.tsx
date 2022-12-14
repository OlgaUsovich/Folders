import { IData } from "../App";
import { chooseStrategy } from "../strategy-func";

interface IProps {
  data: IData;
}

export const FoldersTree = ({ data }: IProps) => {
  return chooseStrategy(data.type)({
    name: data.name,
    children: data.children,
  });
};
