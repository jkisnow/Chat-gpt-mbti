document.addEventListener('DOMContentLoaded', function() {
    // 로컬 스토리지에서 mbti_result 값 가져오기
    const mbtiResult = localStorage.getItem('mbti_result');
    const resultElement = document.getElementById('result');
    const restartButton = document.getElementById('restart-button');

    // mbti_result 값이 있는지 확인
    if (mbtiResult) {
        resultElement.textContent = `${mbtiResult}입니다!`;
    } else {
        resultElement.textContent = '아직 테스트를 진행하지 않았습니다!';
        restartButton.textContent = '테스트 하러 가기';
    }
});
