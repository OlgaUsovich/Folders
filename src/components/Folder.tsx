import { v4 as uuidv4 } from 'uuid';
import { IData } from '../App';
import { chooseStrategy } from "../strategy-func";

export const Folder = ({name, children}: Omit<IData, "type">) => {
  return (
    <div>
      Folder:{name}
      {children &&
      <ul>
        {children.map((child) =><li key={uuidv4()}>{chooseStrategy(child.type)(child.name, child.children)}</li>
        )}
      </ul>}
    </div>
  );
};

export const folderStrategy = (name: string, children?: IData[]) => {
    return <Folder name={name} children={children} />
}