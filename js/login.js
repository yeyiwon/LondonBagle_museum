document.addEventListener('DOMContentLoaded', () => {
    
    const users = [
        { id: 1, uid: "111111", upw: "1234", uname: '유저1' },
        { id: 2, uid: "222222", upw: "1234", uname: '유저2' },
        { id: 3, uid: "333333", upw: "1234", uname: '유저3' },
        { id: 4, uid: "444444", upw: "1234", uname: '유저4' },
        { id: 5, uid: "yiwon5555", upw: "yiwon55*A", uname: '예이원' },
        { id: 6, uid: "yiwon6666", upw: "yiwon66*A", uname: '예이원6' },
        { id: 7, uid: "lmeme1234", upw: "lmeme11*A", uname: '이쭈낙' }
    ];

    // 사용자 배열 로컬스토리지에 저장
    localStorage.setItem('users', JSON.stringify(users));

    const userinfo = JSON.parse(localStorage.getItem('users'));
    console.log(userinfo); // 전체 사용자 정보 배열 출력

// 회원가입 
    const signupForm = document.getElementById('signup_form');
    const usersInfo = JSON.parse(localStorage.getItem('users')) || [];
// 로그인
    const loginForm = document.getElementById('login_form');
    const idValue = document.getElementById('uid');
    const pwValue = document.getElementById('upw');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const userId = idValue.value;
        const userPw = pwValue.value;

        const userinfo = JSON.parse(localStorage.getItem('users'));

        // 입력된 아이디 비번 가진 사용자 찾기
        const user = userinfo.find(u => u.uid === userId && u.upw === userPw);

        if (user) {
            // 로그인 성공
            alert(`환영합니다, ${user.uname}님.`);
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = 'index.html';
        } else {
            // 로그인 실패
            alert('아이디 또는 비밀번호를 확인해주세요.');
        }
    });
});
