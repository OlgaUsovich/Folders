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
