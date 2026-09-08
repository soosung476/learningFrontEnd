import type { ReactNode } from "react";

type AlertButtonProps = {
  message: string;
  children: ReactNode;
};
// 자식
const AlertButton = ({ message, children }: AlertButtonProps) => {
  return (
    <div>
      <button className="p-4 bg-orange-300" onClick={() => alert(message)}>
        {children}
      </button>
    </div>
  );
};

// 부모
const Button2 = () => {
  return (
    <div>
      <AlertButton message={"Playing!"}>Play Movie</AlertButton>
      <AlertButton message={"uploading!"}>Upload Image</AlertButton>
    </div>
  );
};

export default Button2;
