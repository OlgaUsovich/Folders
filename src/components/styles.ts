import styled, { css } from "styled-components";
import { FileIcon, FolderIcon } from "../assets";

const sharedIconStyle = css`
  width: 20px;
  height: 20px;
`;

export const SizedFolderIcon = styled(FolderIcon)`
  ${sharedIconStyle};
`;

export const SizedFileIcon = styled(FileIcon)`
  ${sharedIconStyle};
`;

export const DataList = styled.ul`
    list-style: none;
`

export const Button = styled.button<{ isOpen: boolean, hasChildren: boolean }>`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  transform: ${(props) => (props.isOpen && props.hasChildren ? "rotate(90deg)" : 0 )};
`;
