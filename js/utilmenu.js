document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.getElementById('login_link');
    const signupLink = document.getElementById('signup_link');
    const mypageLink = document.getElementById('mypage_link');
    const logoutLink = document.getElementById('logout_link');
    // const unameElement = document.getElementById('username');

    const mobileLoginLink = document.getElementById('login_link_mobile');
    const mobileMypageLink = document.getElementById('mypage_link_mobile');
    const mobileSignupLink = document.getElementById('signup_link_mobile');
    const mobileLogoutLink = document.getElementById('logout_link_mobile');



    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    
    
    if (loggedInUser) {
        // 로그인된 상태
        // const unameElement = document.getElementById('username');
        // unameElement.textContent = `${loggedInUser.uname} 님 안녕하세요`;
        loginLink.style.display = 'none'; 
        signupLink.style.display = 'none'; 
        mypageLink.style.display = 'inline-block'; 
        logoutLink.style.display = 'inline-block'; 

        // 모바일 메뉴 업데이트
        mobileLoginLink.style.display = 'none';
        mobileSignupLink.style.display = 'none';
        mobileMypageLink.style.display = 'inline-block';
        mobileLogoutLink.style.display = 'inline-block';
    } else {
        // 로그인되지 않은 상태
        loginLink.style.display = 'inline-block'; 
        signupLink.style.display = 'inline-block';
        mypageLink.style.display = 'none'; 
        logoutLink.style.display = 'none'; 

        // 모바일 메뉴 업데이트
        mobileLoginLink.style.display = 'inline-block';
        mobileSignupLink.style.display = 'inline-block';
        mobileMypageLink.style.display = 'none';
        mobileLogoutLink.style.display = 'none';
    }

    // 로그아웃 링크 클릭 시 로그아웃 처리
    logoutLink.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser'); // 로그인 정보 제거
        window.location.href = 'index.html'; // 페이지 새로고침
    });

        // 모바일 메뉴에서도 로그아웃 처리
    mobileLogoutLink.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser'); // 로그인 정보 제거
        window.location.href = 'index.html'; // 페이지 새로고침
    });

});
