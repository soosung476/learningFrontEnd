import type { MouseEventHandler, ReactNode } from "react";

type Button3Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

type PlayButtonProps = {
  movieName: string;
};

const Button3 = ({ onClick, children }: Button3Props) => {
  return (
    <div>
      <button className="p-4 bg-orange-100 m-2" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

const PlayButton = ({ movieName }: PlayButtonProps) => {
  return (
    <div>
      <Button3 onClick={() => alert(`Playing ${movieName}`)}>Play</Button3>
    </div>
  );
};
const UploadButton = () => {
  return (
    <div>
      <Button3 onClick={() => alert(`Uploading!`)}>Upload Image</Button3>
    </div>
  );
};
const Toolbar = () => {
  return (
    <div>
      <PlayButton movieName={"스파이더맨"} />
      <UploadButton />
    </div>
  );
};

export default Toolbar;
