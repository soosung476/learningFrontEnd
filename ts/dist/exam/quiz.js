"use strict";
// ===================================================================
// 퀴즈 앱 구현 가이드
// 아래 주석을 따라 직접 코드를 채워보세요. (함수 시그니처/DOM 선택자는 미리 준비해뒀어요)
// ===================================================================
// 2. 문제 데이터 가져오기 ---------------------------------------------
const quizData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};
// 3. 게임 상태 변수 ----------------------------------------------------
// TODO: 아래 변수들을 게임 진행 중 계속 갱신하면서 사용하게 됩니다.
let questions = []; // fetch로 받아온 전체 문제 목록 (5개만 뽑아 쓸 예정)
let allQuestions = [];
let currentQuestionIndex = 0; // 지금 몇 번째 문제를 보여주고 있는지
let score = 0; // 맞춘 문제 개수(혹은 점수)
let selectedAnswer = null; // 사용자가 고른 보기의 인덱스 (아직 안 골랐으면 null)
let gameState = { playing: true };
const TOTAL_QUESTIONS = 5; // 문제는 5개만 연속으로 출제
// 4. DOM 요소 가져오기 --------------------------------------------------
const quizNum = document.querySelector(".quiz-info #question-number");
const quizScore = document.querySelector(".quiz-info #score");
const progressBar = document.querySelector("#progress-bar");
const questionEl = document.querySelector("#question");
const choicesEl = document.querySelector("#choices");
const nextBtn = document.querySelector("#next-button");
const quizSection = document.querySelector("#quiz-section");
const resultSection = document.querySelector("#result-section");
const resultMsg = document.querySelector("#result-message");
const finalScoreEl = document.querySelector("#final-score");
const restartBtn = document.querySelector("#restart-button");
// 5. 문제 화면에 그리기 --------------------------------------------------
// TODO: renderQuestion 함수를 완성하세요.
// 이 함수는 currentQuestionIndex가 가리키는 문제를 화면에 표시하는 역할입니다.
//
// 해야 할 일:
// 1) questions[currentQuestionIndex] 로 현재 문제 객체를 가져온다.
// 2) quizNum.textContent 를 "문제 {현재순번}/5" 형태로 갱신한다.
//    (currentQuestionIndex는 0부터 시작하니 +1 해줘야 사람이 보기 좋은 번호가 됨)
// 3) questionEl.textContent 에 문제 텍스트(question.question)를 넣는다.
// 4) choicesEl 안을 비우고(innerHTML = ""), choices 배열을 순회하면서
//    버튼(button) 요소를 하나씩 만들어 choicesEl에 추가한다.
//    - 각 버튼에는 몇 번째 보기인지 알 수 있도록 index를 기억시켜둘 것
//      (예: button.dataset.index = String(idx) 또는 클로저로 idx를 캡처)
//    - 각 버튼에 클릭 이벤트를 연결해서 handleChoiceClick(idx, button)을 호출하게 한다.
// 5) selectedAnswer를 null로 초기화하고, nextBtn을 disabled = true 로 되돌린다.
//    (새 문제가 시작될 때마다 "다음 문제" 버튼은 다시 잠겨있어야 함)
// 6) (선택) progressBar의 width를 (currentQuestionIndex / TOTAL_QUESTIONS) * 100 % 로 맞춰서
//    진행률을 시각적으로 보여준다.
function renderQuestion(index) {
    // 여기에 구현
    currentQuestionIndex = index;
    const question = questions[currentQuestionIndex];
    quizNum.textContent = `문제 ${currentQuestionIndex + 1}/5`;
    quizScore.textContent = `점수 : ${score}`;
    questionEl.textContent = question.question;
    choicesEl.innerHTML = "";
    question.choices.forEach((choice, idx) => {
        const button = document.createElement("button");
        button.type = "button";
        button.classList.add("choice-button");
        button.textContent = choice;
        button.dataset.index = String(idx);
        button.addEventListener("click", () => {
            handleChoiceClick(idx, button);
        });
        choicesEl.appendChild(button);
    });
    selectedAnswer = null;
    nextBtn.disabled = true;
    progressBar.style.width = `${(currentQuestionIndex / TOTAL_QUESTIONS) * 100}%`;
}
// 6. 보기(선택지) 클릭 처리 ------------------------------------------------
// TODO: handleChoiceClick 함수를 완성하세요.
// 사용자가 보기 버튼 중 하나를 클릭했을 때 호출됩니다.
//
// 해야 할 일:
// 1) 이미 정답을 고른 상태라면(selectedAnswer !== null) 다시 고르지 못하게 그냥 return.
//    (한 문제당 한 번만 선택 가능하게 하고 싶다면)
// 2) selectedAnswer = chosenIndex 로 저장한다.
// 3) choicesEl 안의 모든 버튼을 순회하면서, 정답/오답을 시각적으로 표시한다.
//    - 정답 인덱스(questions[currentQuestionIndex].answer)에 해당하는 버튼에는 "correct" 클래스 추가
//    - 사용자가 고른 버튼이 오답이었다면 "wrong" 클래스 추가
//    - 모든 보기 버튼은 disabled = true 로 바꿔서 더 이상 못 누르게 한다.
// 4) 고른 답이 정답이면 score += 1.
// 5) quizScore.textContent 를 "점수 : {score}" 형태로 갱신한다.
// 6) nextBtn.disabled = false 로 바꿔서 다음 문제로 넘어갈 수 있게 한다.
function handleChoiceClick(chosenIndex, btn) {
    // 여기에 구현
    if (selectedAnswer !== null)
        return;
    selectedAnswer = chosenIndex;
    choicesEl.querySelectorAll("button").forEach((button) => {
        const idx = Number(button.dataset.index);
        if (questions[currentQuestionIndex].answer === idx) {
            button.classList.add("correct");
        }
        if (idx === chosenIndex && idx !== questions[currentQuestionIndex].answer) {
            button.classList.add("wrong");
        }
        button.disabled = true;
    });
    if (chosenIndex === questions[currentQuestionIndex].answer) {
        score++;
    }
    quizScore.textContent = `점수 : ${score}`;
    nextBtn.disabled = false;
}
// 7. "다음 문제" 버튼 클릭 처리 --------------------------------------------
// TODO: handleNextClick 함수를 완성하세요.
//
// 해야 할 일:
// 1) currentQuestionIndex += 1 로 다음 문제로 넘어간다.
// 2) 만약 currentQuestionIndex가 TOTAL_QUESTIONS(5)에 도달했다면
//    -> showResult() 를 호출하고 끝낸다 (더 이상 renderQuestion 호출하면 안 됨).
// 3) 아직 문제가 남아있다면 renderQuestion(currentQuestionIndex) 를 호출해서
//    다음 문제를 화면에 그린다.
function handleNextClick() {
    // 여기에 구현
    currentQuestionIndex++;
    if (currentQuestionIndex >= TOTAL_QUESTIONS) {
        return showResult();
    }
    renderQuestion(currentQuestionIndex);
}
// 8. 결과 화면 보여주기 ----------------------------------------------------
// TODO: showResult 함수를 완성하세요.
//
// 해야 할 일:
// 1) gameState.playing = false 로 바꾼다.
// 2) quizSection을 숨기고(hidden 클래스 추가 등) resultSection을 보이게 한다.
//    (quiz.html의 result-section에는 이미 "hidden" 클래스가 붙어있으니 그걸 제거/추가하는 방식 활용)
// 3) resultMsg.textContent 에 "5문제 중 {score}문제를 맞췄습니다!" 같은 메시지를 넣는다.
// 4) finalScoreEl.textContent 에 최종 점수를 표시한다.
function showResult() {
    // 여기에 구현
    gameState.playing = false;
    quizSection.classList.add("hidden");
    resultSection.classList.remove("hidden");
    resultMsg.textContent = `${TOTAL_QUESTIONS}문제 중 ${score}문제를 맞췄습니다!`;
    finalScoreEl.textContent = `최종 점수 : ${score}`;
    progressBar.style.width = `${100}%`;
}
// 시작, restart 전에 퀴즈를 섞어서 내보내주는 함수 추가
const pickRandomQuestions = () => {
    const randomQuestions = [...allQuestions];
    randomQuestions.sort(() => Math.random() - 0.5);
    questions = randomQuestions.slice(0, TOTAL_QUESTIONS);
};
// 9. 다시 시작하기 --------------------------------------------------------
// TODO: restartQuiz 함수를 완성하세요.
//
// 해야 할 일:
// 1) currentQuestionIndex = 0, score = 0, selectedAnswer = null 로 초기화한다.
// 2) gameState.playing = true 로 되돌린다.
// 3) resultSection을 다시 숨기고 quizSection을 다시 보이게 한다.
// 4) quizScore.textContent 를 "점수 : 0" 으로 초기화한다.
// 5) renderQuestion(0) 을 호출해서 첫 문제부터 다시 보여준다.
//    (questions 배열은 이미 메모리에 있으니 fetch를 다시 할 필요는 없음)
function restartQuiz() {
    // 여기에 구현
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    gameState.playing = true;
    resultSection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    quizScore.textContent = "점수 : 0";
    pickRandomQuestions();
    renderQuestion(0);
}
// 10. 이벤트 연결 ----------------------------------------------------------
// TODO: nextBtn과 restartBtn에 각각 클릭 이벤트를 연결하세요.
// nextBtn.addEventListener("click", handleNextClick);
// restartBtn.addEventListener("click", restartQuiz);
nextBtn.addEventListener("click", handleNextClick);
restartBtn.addEventListener("click", restartQuiz);
// 11. 시작 -----------------------------------------------------------------
// TODO: main 함수를 완성하세요.
//
// 해야 할 일:
// 1) quizData<Question[]>("./question.json") 로 전체 문제를 fetch 한다.
// 2) 받아온 문제 중 5개만 뽑아서 questions 변수에 저장한다.
//    - 그냥 앞에서 5개를 잘라 써도 되고 (data.slice(0, 5)),
//      매번 다른 문제가 나오게 하고 싶다면 배열을 섞은 뒤 5개를 뽑아도 됨(선택 사항).
// 3) renderQuestion(0) 을 호출해서 첫 문제를 화면에 그린다.
const main = async () => {
    const data = await quizData("./question.json");
    console.log(data);
    allQuestions = data;
    pickRandomQuestions();
    renderQuestion(0);
};
main();
