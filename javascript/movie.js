let userDate = document.querySelector("#date");
let date;
let url;
userDate.addEventListener("change", (e) => {
  date = e.target.value.replaceAll("-", "");
  url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=3a5e0abfc7ea7895a7828947b5fb6e57&targetDt=${date}`;
  async function load() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
    console.log(dailyBoxOfficeList);
    const ranking = document.querySelectorAll("small");
    const specifics = document.querySelectorAll(".list-unstyled");
    dailyBoxOfficeList.forEach((items, idx) => {
      ranking[idx].innerText = items.rank;
      specifics[idx].innerHTML =
        `<li>제목 : ${items.movieNm}</li> <li>개봉일 : ${items.openDt} </li> <li>총 관객수 : ${items.audiAcc}</li>`;
    });
  }
  load();
});
