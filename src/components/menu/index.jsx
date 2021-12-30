import { Container, Button, Nav } from "./styles";

const Menu = () => {
  const nav = ["WOMAN", "MAN", "KIDS", "BEAUTY", "SHOES & BAGS"].map(
    (category) => {
      return (
        <div key={category}>
          <div>{category}</div>
          <div>
            <div>패딩</div>
            <div>코트 | 자켓</div>
            <div>니트 | 가디건</div>
            <div>티셔츠 | 맨투맨</div>
            <div>팬츠</div>
          </div>
        </div>
      );
    }
  );

  return (
    <Container>
      <Button>
        <svg viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 5.3 5.957 l 0.707 -0.707 l 12.728 12.728 l -0.707 0.707 L 5.3 5.957 Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 6.007 18.685 l -0.707 -0.707 L 18.028 5.25 l 0.707 0.707 L 6.007 18.685 Z"
          />
        </svg>
      </Button>
      <Nav>{nav}</Nav>
    </Container>
  );
};

export default Menu;
