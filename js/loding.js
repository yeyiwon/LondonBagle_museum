document.addEventListener("DOMContentLoaded", function() {
    const loading = document.getElementById('loading');

    // 로컬 스토리지에서 'loadingDisplayed' 값을 가져옴
    const loadingDisplayed = localStorage.getItem('loadingDisplayed');

    if (!loadingDisplayed) {
        // 처음 한 번만 로딩 화면을 보이게 한 후, 로컬 스토리지에 표시
        loading.style.opacity = '1';
        loading.style.transition = 'opacity 1s ease-in-out';

        // 2.5초 후에 로딩 화면을 숨김
        setTimeout(() => {
            loading.style.opacity = '0';
            
            // 0.5초 후 완전히 사라지게 설정
            setTimeout(() => {
                loading.style.display = 'none';
                localStorage.setItem('loadingDisplayed', 'true');
            }, 500);
        }, 3000);
    } else {
        // 이미 한 번 로딩 화면을 보인 경우, 감추기
        loading.style.display = 'none';
    }
});
