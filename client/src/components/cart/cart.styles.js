import styled from "styled-components";

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background-color: rgba(0, 0, 0, 0.8);

    font-size: 16px;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    &:hover {
      -webkit-box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.66);
      box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.66);
    }
  }
`;
