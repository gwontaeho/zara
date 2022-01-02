import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
`;

export const Main = styled.div`
  padding: 100px 0;
  width: 100vw;
  height: calc(100vh - 200px);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-items: center;
  align-items: end;
`;

export const Info = styled.div`
  width: 50%;
  height: 50%;
  overflow: hidden;
  border: 1px solid black;
`;

export const Image = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  :hover .thumbnails {
    opacity: 1;
  }
`;

export const Slider = styled.div`
  width: calc(100% - 100px);
  height: calc(100vh - 200px);
  overflow: scroll;
  overscroll-behavior: contain;
  ::-webkit-scrollbar {
    display: none;
  }

  div {
    width: fit-contents;
    height: fit-contents;
    display: flex;
    flex-direction: column;
    transition: 0.5s;
  }

  img {
    height: calc(100vh - 200px);
    object-fit: contains;
  }
`;
export const Progress = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  .bar {
    height: 100%;
    width: 2px;
    background-color: lightgray;
  }

  .progress {
    position: absolute;
    height: 20%;
    transition: 0.5s;
    width: 2px;
    background-color: black;
  }
`;
export const Thumbnails = styled.div`
  width: 50px;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  opacity: 0;

  ul {
    width: 100%;
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  img {
    width: 100%;
    object-fit: contains;
    cursor: pointer;
  }
`;

export const Side = styled.div`
  width: 50%;
  border: 1px solid black;

  .name {
    font-size: 1.5rem;
  }

  .colors {
    display: flex;
    align-items: center;
  }

  .color {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    > div {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
  }

  .sizes {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }

  .size {
    :hover {
      background-color: lightgray;
    }
  }
`;

export const Secondary = styled.div`
  width: calc(100vw - 100px);
  padding: 50px;
  .title {
    font-size: 1.5rem;
    padding-bottom: 20px;
  }
  .products {
    width: fit-content;
    display: flex;
  }

  .product {
    width: calc(100vw / 5);
    img {
      width: 100%;
      object-fit: contains;
    }
    :not(:last-child) {
      margin-right: 20px;
    }
    .cart {
      width: fit-content;
      padding: 5px 50px;
      margin-top: 10px;
      border: 1px solid black;
      cursor: pointer;
    }
  }
`;
