
// 헤더: 캐러셀 동작 기능
let carousel = document.querySelector(`.headerCarousel`);
let c1 = document.querySelector(`.c1`);
let c2 = document.querySelector(`.c2`);
let c3 = document.querySelector(`.c3`);
let hLeftButton = document.querySelector(`.hcLeft`);
let hRightButton = document.querySelector(`.hcRight`);
let hcIndex = 0;

hLeftButton.addEventListener(`mousedown`, () => {
    hLeftButton.classList.add(`hcLClicked`);
})
hLeftButton.addEventListener(`mouseup`, () => {
    hLeftButton.classList.remove(`hcLClicked`);
    hcIndex -= 1;
    if (hcIndex === -1) hcIndex = 2;
    c1.style.transform = `translate3d(-${100 * hcIndex}%, 0, 0)`;
    c2.style.transform = `translate3d(-${100 * hcIndex}%, 0, 0)`;
    c3.style.transform = `translate3d(-${100 * hcIndex}%, 0, 0)`;
})
hRightButton.addEventListener(`mousedown`, () => {
    hRightButton.classList.add(`hcRClicked`);
})
hRightButton.addEventListener(`mouseup`, () => {
    hRightButton.classList.remove(`hcRClicked`);
    hcIndex += 1;
    if (hcIndex === 3) hcIndex = 0;
    c1.style.transform = `translate3d(-${100 * hcIndex}%, 0, 0)`;
    c2.style.transform = `translate3d(-${100 * hcIndex}%, 0, 0)`;
    c3.style.transform = `translate3d(-${100 * hcIndex}%, 0, 0)`;
})


// 헤더: 내비게이션 검색창 켜고 끄기 기능
let navSearch = document.querySelector(`.navSearch`);
let navSearchIcon = document.querySelector(`#navSearchIcon`);
let nsClose = document.querySelector(`#nsClose`);

navSearchIcon.addEventListener('click', () => {
    navSearch.classList.add(`nsActive`);
})
nsClose.addEventListener('click', () => {
    navSearch.classList.remove(`nsActive`);
})


// 핫이슈: 메뉴 영역 - 상단 버튼 포커스 기능
let actUpper1 = document.querySelector(`#actUpper1`);
let actUpper2 = document.querySelector(`#actUpper2`);
let actUpper3 = document.querySelector(`#actUpper3`);

actUpper1.addEventListener(`focus`, () => {
    actUpper1.classList.add(`imUpperFocus`);
    actUpper2.classList.remove(`imUpperFocus`);
    actUpper3.classList.remove(`imUpperFocus`);
})
actUpper2.addEventListener(`focus`, () => {
    actUpper1.classList.remove(`imUpperFocus`);
    actUpper2.classList.add(`imUpperFocus`);
    actUpper3.classList.remove(`imUpperFocus`);
})
actUpper3.addEventListener(`focus`, () => {
    actUpper1.classList.remove(`imUpperFocus`);
    actUpper2.classList.remove(`imUpperFocus`);
    actUpper3.classList.add(`imUpperFocus`);
})


// 핫이슈: 메뉴 영역 - 상단 버튼 포커스 시 메뉴 변경 기능
let fcsUpper1 = document.querySelector(`.fcsUpper1`);
let fcsUpper2 = document.querySelector(`.fcsUpper2`);
let fcsUpper3 = document.querySelector(`.fcsUpper3`);

actUpper1.addEventListener('click', () => {
    fcsUpper1.classList.add(`imActive`);
    fcsUpper2.classList.remove(`imActive`);
    fcsUpper3.classList.remove(`imActive`);
})
actUpper2.addEventListener('click', () => {
    fcsUpper1.classList.remove(`imActive`);
    fcsUpper2.classList.add(`imActive`);
    fcsUpper3.classList.remove(`imActive`);
})
actUpper3.addEventListener('click', () => {
    fcsUpper1.classList.remove(`imActive`);
    fcsUpper2.classList.remove(`imActive`);
    fcsUpper3.classList.add(`imActive`);
})


// 플렉스: 캐러셀 동작 기능
let flexCarousel = document.querySelector(`.flexCarousel`);
let fLeftButton = document.querySelector(`.fcLeft`);
let fRightButton = document.querySelector(`.fcRight`);
let fcIndex = 0;

fLeftButton.addEventListener(`mousedown`, () => {
    fLeftButton.classList.add(`fcLClicked`);
})
fLeftButton.addEventListener(`mouseup`, () => {
    fLeftButton.classList.remove(`fcLClicked`);
    fcIndex -= 1;
    if (fcIndex === -1) fcIndex = 5;
    flexCarousel.style.transform = `translate3d(-${432 * fcIndex}px, 0, 0)`;
})
fRightButton.addEventListener(`mousedown`, () => {
    fRightButton.classList.add(`fcRClicked`);
})
fRightButton.addEventListener(`mouseup`, () => {
    fRightButton.classList.remove(`fcRClicked`);
    fcIndex += 1;
    if (fcIndex === 6) fcIndex = 0;
    flexCarousel.style.transform = `translate3d(-${432 * fcIndex}px, 0, 0)`;
})


// 패밀리사이트 select문 url 연결
let familySiteForm = document.querySelector(`#familySiteForm`);
let familySiteSelect = document.querySelector(`#familySiteSelect`);

familySiteForm.addEventListener('submit', () => {
    let url = document.querySelector(`#familySiteSelect`).value;
    if (url) window.open(url);
    else alert("패밀리사이트가 선택되지 않았습니다.")
    return false;
})