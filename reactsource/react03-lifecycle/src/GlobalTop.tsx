import { useEffect, useState } from "react";
import type { UserType } from "./LocalJsonFetcher";

const GlobalTop = ({ myLinkClick }: { myLinkClick: (num: number) => void }) => {
  console.log("1. 컴포넌트 실행");
  // myData.json 가져오기
  //
  const [myList, setMyList] = useState<UserType[]>([]);

  const getData = async () => {
    const response = await fetch(`/data/myData.json`);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    console.log("3. useEffect 실행");
    // get myData.json after rendering
    const fetchData = async () => {
      const localData = await getData();
      setMyList(localData);
    };
    fetchData();
  }, []);

  console.log("2. return 실행 (rendering)");
  return (
    <div>
      <ul>
        {myList.map((data) => (
          <li key={data.id}>
            <a
              href={data.id}
              data-id={data.num}
              onClick={(e) => {
                e.preventDefault();
                // a태그 내의 href 막기
                myLinkClick(Number(e.currentTarget.dataset.id));
              }}
            >
              {data.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GlobalTop;
