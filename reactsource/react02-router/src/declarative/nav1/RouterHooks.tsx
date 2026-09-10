import { useLocation, useSearchParams } from "react-router-dom";

const RouterHooks = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  // ?로 전달되는 파라메터를 가져옴
  // http://localhost:5173/intro/router?mode=list&pageNum=1
  const mode = searchParams.get("mode");
  const pageNum = searchParams.get("pageNum");

  const changeMode = () => {
    const nextMode = mode === "list" ? "view" : "list";
    setSearchParams({
      mode: nextMode,
      pageNum: pageNum ?? "", // pageNum = pageNum, 값이 null, undefined 일 경우 문자열 "" 대입,
    });
  };
  const nextPage = () => {
    const pageTemp =
      pageNum === null || isNaN(Number(pageNum)) ? 1 : parseInt(pageNum) + 1;
    setSearchParams({
      mode: mode ?? "",
      pageNum: pageTemp.toString(),
    });
  };
  const prevPage = () => {
    const pageTemp =
      pageNum === null || isNaN(Number(pageNum)) ? 1 : parseInt(pageNum) - 1;
    setSearchParams({
      mode: mode ?? "",
      pageNum: pageTemp.toString(),
    });
  };
  return (
    <div>
      <h2>라우터 관련 Hook</h2>
      <div>
        <ul>
          {/* /intro/router */}
          <li>URL : {location.pathname}</li>
          {/* ?mode=view&pageNum= */}
          <li>쿼리스트링 :{location.search}</li>
          <li>mode : {mode}</li>
          <li>pageNum : {pageNum}</li>
        </ul>
        <button onClick={changeMode} className="bg-amber-200 p-2 m-2 ">
          mode change
        </button>
        <button onClick={prevPage} className="bg-amber-200 p-2 m-2 ">
          이전 page
        </button>
        <button onClick={nextPage} className="bg-amber-200 p-2 m-2 ">
          다음 page
        </button>
      </div>
    </div>
  );
};

export default RouterHooks;
