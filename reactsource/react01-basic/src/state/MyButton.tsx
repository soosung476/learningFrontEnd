import type { CSSProperties, MouseEventHandler } from "react";

type MyButtonProps = {
  style: CSSProperties;
  onClick: MouseEventHandler;
  count: number;
};
const MyButton = ({ style, onClick, count }: MyButtonProps) => {
  //const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={onClick} style={style}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default MyButton;
