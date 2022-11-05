import { FoldersTree } from "./components";

export interface IData {
  name: string;
  type: "FOLDER" | "FILE";
  children?: IData[];
}

export type ShortData = Omit<IData, "type">;

const data: IData = {
  name: "tree",
  type: "FOLDER",
  children: [
    { name: "folder1", type: "FOLDER", children: [] },
    {
      name: "folder2",
      type: "FOLDER",
      children: [
        {
          name: "folder21",
          type: "FOLDER",
          children: [
            { name: "file211", type: "FILE" },
            { name: "file212", type: "FILE" },
            { name: "file213", type: "FILE" },
          ],
        },
        { name: "folder22", type: "FOLDER", children: [] },
      ],
    },
    {
      name: "folder3",
      type: "FOLDER",
      children: [{ name: "file31", type: "FILE" }],
    },
  ],
};

const App = () => {
  return <FoldersTree data={data} />;
};

export default App;
