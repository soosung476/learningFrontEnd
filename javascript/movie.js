const today = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  console.log(date.toISOString().split("T")[0]);
  return date.toISOString().split("T")[0];
};

let userDate = document.querySelector("#date");
userDate.max = today();
let date;
let url;
let movieInfoCode;
async function load() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
    console.log(dailyBoxOfficeList);
    const ranking = document.querySelectorAll("small");
    const specifics = document.querySelectorAll(".list-unstyled");
    dailyBoxOfficeList.forEach((items, idx) => {
      ranking[idx].innerHTML = `<span>순위 </span>: ${items.rank}`;
      specifics[idx].innerHTML =
        `<li>제목 :<a href='${items.movieCd}'> ${items.movieNm}</a></li> <li>개봉일 : ${items.openDt} </li> <li>총 관객수 : ${items.audiAcc}</li>`;
    });
  } catch (error) {
    console.log("error", error);
  }
}

userDate.addEventListener("change", async (e) => {
  date = e.target.value.replaceAll("-", "");
  url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=3a5e0abfc7ea7895a7828947b5fb6e57&targetDt=${date}`;
  movieList = await load();
});

const mvcard = document.querySelector("#mvcard");

mvcard.addEventListener("click", async (e) => {
  const aTag = e.target.closest("a");

  if (!aTag) return;
  e.preventDefault();
  const movieCd = aTag.getAttribute("href");
  await loadInfo(movieCd);
});
const loadInfo = async (movieCd) => {
  const infoUrl = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=3a5e0abfc7ea7895a7828947b5fb6e57&movieCd=${movieCd}`;

  try {
    const response = await fetch(infoUrl);
    const data = await response.json();
    console.log(data);
    const movieInfo = data.movieInfoResult.movieInfo;

    let genres = "";
    movieInfo.genres.forEach((genre) => {
      genres += `${genre.genreNm}`;
    });
    let directors = "";
    movieInfo.directors.forEach((director) => {
      directors += `${director.peopleNm}`;
    });
    document.querySelector("#movie-detail").innerHTML =
      `<h2>${movieInfo.movieNm}</h2>
      <p>영어 영화명: ${movieInfo.movieNmEn}</p>
      <p>장르 : ${genres}</p>
      <p>디렉터 : ${directors} </p>
      <p>영화등급 : ${movieInfo.audits[0].watchGradeNm} </p>
      <p>개봉일: ${movieInfo.openDt}</p>
      <p>상영 시간: ${movieInfo.showTm}분</p>
    `;
  } catch (error) {}
};
// movieCd 가져오기: href
// a태그 기능 중지;
