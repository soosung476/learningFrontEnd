import { useState } from "react";
import seoul2 from "../assets/img/seoul2.jpg";
import seoul3 from "../assets/img/seoul3.jpg";

const Poster = () => {
  const [src, setSrc] = useState(seoul2);
  const [flag, setFlag] = useState(true);

  const onToggle = () => {
    setSrc(flag ? seoul3 : seoul2);
    setFlag(!flag);
  };

  return (
    <div>
      <img src={src} alt="서울의 봄 영화포스터" width={300} height={500} />
      <button onClick={onToggle}>이미지 변경</button>
    </div>
  );
};

export default Poster;
