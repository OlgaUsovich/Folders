import { v4 as uuidv4 } from "uuid";
import { ShortData } from "../App";
import { chooseStrategy } from "../strategy-func";

export const Folder = ({ name, children }: ShortData) => {
  return (
    <div>
      Folder:{name}
      {children && (
        <ul>
          {children.map((child) => (
            <li key={uuidv4()}>
              {chooseStrategy(child.type)({
                name: child.name,
                children: child.children,
              })}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const folderStrategy = ({ name, children }: ShortData) => {
  return <Folder name={name} children={children} />;
};
