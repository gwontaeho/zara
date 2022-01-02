import { useCallback, useEffect, useRef, useState } from "react";

import {
  Container,
  Main,
  Info,
  Image,
  Slider,
  Progress,
  Thumbnails,
  Side,
  Secondary,
} from "./styles";
import Footer from "../../components/footer";

import { product } from "../../data";

const Detail = () => {
  const sliderRef = useRef();
  const progressRef = useRef();

  const [selectedColor, setSelectedColor] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    sliderRef.current.style.transform = `translateY(calc(-100% / ${product.colors[selectedColor].images.length} * ${progress}))`;
    progressRef.current.style.height = `calc(100% / ${
      product.colors[selectedColor].images.length
    } * ${progress + 1})`;
  }, [progress]);

  const onWheel = useCallback(
    (e) => {
      if (e.deltaY > 0) {
        if (progress === product.colors[selectedColor].images.length - 1)
          return;
        setProgress(progress + 1);
      } else {
        if (progress === 0) return;
        setProgress(progress - 1);
      }
    },
    [selectedColor, progress]
  );

  const onScroll = useCallback((e) => {
    e.currentTarget.scroll(0, 0);
  }, []);

  const onClick = useCallback((i) => {
    setProgress(i);
  }, []);

  const onClickColor = useCallback((color) => {
    setSelectedColor(color);
    setProgress(0);
  }, []);

  return (
    <Container>
      <Main>
        <Info>
          <div>소재, 세탁 방법 및 원산지</div>
          <div>JOIN LIFE</div>
          <div>Care for fiber & water: 50% 이상 재생 폴리에스터 사용.</div>
          <div>
            환경에 미치는 영향을 줄일 수 있는 기법과 원자재를 이용하여 제조되는
            제품에 Join Life라는 이름의 태그를 부착합니다.
          </div>
          <div>소재</div>
          <div>
            ZARA는 제품의 안전, 보건 및 품질 기준 준수를 보장하기 위해 모니터링
            프로그램을 실행하고 있습니다.
          </div>
          <div>
            Green to Wear 2.0 표준은 섬유 생산이 환경에 미치는 영향을 최소화하는
            것을 목표로 합니다. 이를 위해 생산 공정의 청결과 의류의 안전 및
            보건을 모두 보장하는 데 도움이 되는 Inditex The List 프로그램을
            개발했습니다.
          </div>
          <div>겉감</div>
          <div>100% 폴리에스터</div>
          <div>안감</div>
          <div>100% 폴리에스터</div>
          <div>재생 폴리에스터</div>
          <div>
            재생 폴리에스터는 플라스틱병과 같은 PET 플라스틱을 재활용하여
            생산합니다.
          </div>
          <div>
            플라스틱병은 재활용 쓰레기통에 버려질 때마다 폐기물을 선택하고
            분류하는 처리장으로 이동합니다. 이곳에서 가장 적합한 용도로 사용될
            수 있도록 다양한 플라스틱 유형별로 분류됩니다. PET 플라스틱은 세척,
            분쇄 및 재생되어 새로운 재생 폴리에스터 섬유로 만들어집니다.
          </div>
          <div>
            이런 방법으로 플라스틱 폐기물에 새로운 용도를 주고, 천연 원자재
            소비를 줄여 물과 에너지 소비와 폐기물 생성을 줄일 수 있습니다.
          </div>
          <div>
            재생사는 원래의 폴리에스터와 유사한 특성을 가져 내구성이 뛰어나고
            강하며 언제나 다시 재활용될 수 있습니다.
          </div>
          <div>인증</div>
          <div>
            ZARA는 원자재에서 최종 제품이 만들어지기까지의 절차를 모니터링하는
            단체의 인증을 받은 재생 폴리에스터만을 사용합니다. 현재 다음과 같은
            단체와 협력합니다.
          </div>
          <div>Global Recycled Standard(GRS)</div>
          <div>Recycled Content Standard(RCS)</div>
        </Info>
        <Image>
          <Slider onWheel={onWheel} onScroll={onScroll}>
            <div ref={sliderRef}>
              {product.colors[selectedColor].images.map((image, i) => {
                return <img key={i} src={image} alt="product" />;
              })}
            </div>
          </Slider>
          <Progress>
            <div className="bar" />
            <div className="progress" ref={progressRef} />
          </Progress>
          <Thumbnails className="thumbnails">
            <ul>
              {product.colors[selectedColor].images.map((image, i) => {
                console.log(i);
                return (
                  <li key={i}>
                    <img src={image} alt="product" onClick={() => onClick(i)} />
                  </li>
                );
              })}
            </ul>
          </Thumbnails>
        </Image>
        <Side>
          <div className="name">{product.name}</div>
          <div>{product.text}</div>
          <div>{product.price}</div>
          <div>색상 {product.colors[selectedColor].color} | 3046/032</div>
          <div className="colors">
            {product.colors.map((color) => {
              return (
                <div
                  key={color.id}
                  className="color"
                  style={{
                    border: selectedColor === color.id ? "1px solid black" : "",
                  }}
                  onClick={() => onClickColor(color.id)}
                >
                  <div style={{ backgroundColor: color.code }} />
                </div>
              );
            })}
          </div>
          <div className="sizes">
            {product.sizes.map((size) => {
              return (
                <div className="size" key={size}>
                  {size}
                </div>
              );
            })}
          </div>
          <div>사이즈 찾기</div>
          <div>장바구니</div>
          <div>오프라인 매장에 재고 상태 보기</div>
          <div>배송, 교환 및 반품</div>
          <div>공유하기</div>
        </Side>
      </Main>
      {!!product.looks.length && (
        <Secondary>
          <div className="title">룩 완성하기</div>
          <div className="products">
            {product.looks.map((look) => {
              return (
                <div key={look.id} className="product">
                  <img src={look.image} alt={look.name} />
                  <div>
                    {look.new && "NEW"}
                    {look.new && !!look.color && " / "}
                    {!!look.color && `+${look.color} 컬러`}
                  </div>
                  <div>{look.name}</div>
                  <div>{look.price}</div>
                  <div className="cart">장바구니</div>
                </div>
              );
            })}
          </div>
        </Secondary>
      )}
      {!!product.suggestions.length && (
        <Secondary>
          <div className="title">추천 제품</div>
          <div className="products">
            {product.suggestions.map((suggestion) => {
              return (
                <div key={suggestion.id} className="product">
                  <img src={suggestion.image} alt={suggestion.name} />
                  <div>
                    {suggestion.new && "NEW"}
                    {suggestion.new && !!suggestion.color && " / "}
                    {!!suggestion.color && `+${suggestion.color} 컬러`}
                  </div>
                  <div>{suggestion.name}</div>
                  <div>{suggestion.price}</div>
                  <div className="cart">장바구니</div>
                </div>
              );
            })}
          </div>
        </Secondary>
      )}
      <Footer />
    </Container>
  );
};

export default Detail;
