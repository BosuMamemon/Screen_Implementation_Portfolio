// 회원가입 기능 정지
let register = document.querySelector(`.register`);

register.addEventListener(`click`, () => {
    alert(`지금은 가입신청할 수 없습니다.`);
});

// 취소 버튼 클릭 시 창닫힘
let cancel = document.querySelector(`.cancel`);

cancel.addEventListener(`click`, () => {
    window.close();
})