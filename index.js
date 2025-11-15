 
// JavaScript 코드 (위에 제공된 자동 슬라이드 코드)
let slideIndex = 1;
showSlide(slideIndex);

// 이전 슬라이드 버튼 클릭 시
document.querySelector('.prev').addEventListener('click', function() {
    showSlide(slideIndex -= 1);
});

// 다음 슬라이드 버튼 클릭 시
document.querySelector('.next').addEventListener('click', function() {
    showSlide(slideIndex += 1);
});

// 슬라이드를 지정된 인덱스로 설정
function currentSlide(n) {
    showSlide(slideIndex = n);
}

// 슬라이드 표시 함수
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    // 인덱스가 범위를 벗어나지 않도록 처리
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // 모든 슬라이드 숨기기
    slides.forEach((slide, index) => {
        slide.style.opacity = 0;
        dots[index].classList.remove('active');
    });

    // 현재 슬라이드 보이기
    slides[slideIndex - 1].style.opacity = 1;
    dots[slideIndex - 1].classList.add('active');
}

// 자동으로 슬라이드 전환
setInterval(function() {
    showSlide(slideIndex += 1);  // 슬라이드를 하나씩 자동으로 넘김
}, 4500);  // 4.5

// 버튼과 슬라이드 요소 선택
const bestBtn = document.getElementById('best-btn');
const newBtn = document.getElementById('new-btn');
const bestProducts = document.querySelector('.best-products');
const newProducts = document.querySelector('.new-products');

// 현재 슬라이드 위치
let currentSlide2 = 0;
let totalSlides = 4; // 기본 슬라이드 개수 (예: 4개의 Best 상품, 3개의 New 상품)
let currentProductList = bestProducts; // 초기에는 Best 상품이 보이도록 설정

// Best, New 버튼 클릭 시, 해당 버튼을 활성화
bestBtn.addEventListener('click', () => {
    bestBtn.classList.add('active');
    newBtn.classList.remove('active');
 
    updateSlide();
    newProducts.style.display = 'none'; // Ne품 숨기기
    bestProducts.style.display = 'flex'; // Best 상품 보이기
});

newBtn.addEventListener('click', () => {
    newBtn.classList.add('active');
    bestBtn.classList.remove('active');
 
    updateSlide();
    bestProducts.style.display = 'none'; // Best 상품 숨기기
    newProducts.style.display = 'flex'; // New 상품 보이기
});

// 좌측 버튼 클릭 시
prevBtns2.addEventListener('click', () => {
    if (currentSlide2 > 0) {
        currentSlide2--; // 슬라이드 한 칸 왼쪽으로 이동
        updateSlide();
    }
});

// 우측 버튼 클릭 시
nextBtns2.addEventListener('click', () => {
    if (currentSlide2 < totalSlides - 1) { // 현재 보여지고 있는 상품 리스트의 슬라이드 개수에 맞춰 처리
        currentSlide2++;
        updateSlide();
    }
});

// 슬라이드 업데이트 함수
function updateSlide() {
    const slideWidth = document.querySelector('.product').offsetWidth;
    currentProductList.style.transform = `translateX(-${currentSlide2 * slideWidth}px)`; // currentSlide2를 사용
}

// 페이지 로드 시 자동으로 Best 상품을 보여주고 슬라이드를 시작하도록 설정
document.addEventListener('DOMContentLoaded', () => {
    bestBtn.classList.add('active'); // Best 버튼을 활성화
    newBtn.classList.remove('active'); // New 버튼 비활성화
    currentProductList = bestProducts;
    totalSlides = 4; // Best 상품 슬라이드 개수
    updateSlide(); // 초기 슬라이드 이동
});
