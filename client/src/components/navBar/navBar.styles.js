import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 2, 0.9);
  padding: 0 4rem;
  z-index: 100;
  height: 5rem;
  color: darkgray;
  box-sizing: border-box;
`;

export const Logo = styled.div`
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 4rem;
  list-style: none;
  transition: all 0.5s ease-in-out;
  li {
    font-size: 20px;
    cursor: pointer;
    padding: 0 0.5rem;
    h3 {
      padding: 0px;
      margin: 0px;
    }
    &:hover {
      color: white;
    }
  }
`;
export const User = styled.div`
  display: flex;

  gap: 2rem;
  font-size: 18px;
  a {
    text-decoration: none;
    outline: none;
    color: inherit;
  }
`;

export const Avatar = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  img {
    object-fit: cover;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;
export const UserModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 160px;
  top: 4rem;
  right: 1rem;
  z-index: 10;
  padding: 2rem;
  background-color: white;
  position: absolute;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  -webkit-box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.66);
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.66);
  font-size: 18px;
  color: black;
  span {
    cursor: pointer;
    width: max-content;
    &:hover {
      border-bottom: 2px solid black;
    }
  }
  a {
    text-decoration: none;
    outline: none;
    color: inherit;
  }
`;
