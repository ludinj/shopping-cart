import styled from "styled-components";
import { IconButton } from "@material-ui/core";
export const WrapperHome = styled.div`
  display: flex;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8rem;
`;

export const StyledButton = styled(IconButton)`
  position: fixed !important;
  z-index: 2;
  right: 20px;
  top: 100px;
`;
