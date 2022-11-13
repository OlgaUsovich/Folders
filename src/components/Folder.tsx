import { v4 as uuidv4 } from "uuid";
import { MdArrowForwardIos } from "react-icons/md";
import { ShortData } from "../App";
import { chooseStrategy } from "../strategy-func";
import { Button, DataList, SizedFolderIcon } from "./styles";
import { useState } from "react";

export const Folder = ({ name, children }: ShortData) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Button
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        hasChildren={!!children?.length}
        disabled={!children?.length}
      >
        <MdArrowForwardIos />
      </Button>
      <SizedFolderIcon /> {name}
      {isOpen && children && (
        <DataList>
          {children.map((child) => (
            <li key={uuidv4()}>
              {chooseStrategy(child.type)({
                name: child.name,
                children: child.children,
              })}
            </li>
          ))}
        </DataList>
      )}
    </div>
  );
};

export const folderStrategy = ({ name, children }: ShortData) => {
  return <Folder name={name} children={children} />;
};
