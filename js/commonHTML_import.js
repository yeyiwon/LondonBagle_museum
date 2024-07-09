document.addEventListener('DOMContentLoaded', () => {
    //헤더
    const headerContent = `
    <header id="header" class="header">
            <h1 class="logo">
                <a href="index.html">
                    <img src="./img/logo/logo.png" alt="런던 베이글 뮤지엄">
                </a>
            </h1>

            <nav class="gnb">
                <h2 class="hide">주요 메뉴</h2>
                <ul class="gnb_ul clear">
                    <li class="gnb_li">Brand
                        <ul class="submenu">
                            <li><a href="locationlist.html">매장 찾기</a></li>
                        </ul>
                    </li>
                    <li class="gnb_li"><a href="./order.html">Menu</a>
                        <ul class="submenu">
                            <li><a href="order.html?menu=bagel">베이글</a></li>
                            <li><a href="order.html?menu=sandwich">샌드위치</a></li>
                            <li><a href="order.html?menu=soup">스프</a></li>
                            <li><a href="order.html?menu=side">크림치즈</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <div class="util">
                <h2 class="hide">유틸 메뉴</h2>
                <ul>
                    <li><a href="login.html" id="login_link">Login</a></li>
                    <li><a href="mypage.html" id="mypage_link" style="display:none;">My Page</a></li>
                    <li><a href="signUp.html" id="signup_link">Sign Up</a></li>
                    <li><a href="index.html" id="logout_link" style="display:none;">Logout</a></li>
                    <li class="bar"></li>
                </ul>
            </div>
        <!-- 모바일 -->
        <div class="hambtn">
            <img class="menu_icon activebtn" src="./img/icon/menu.png" alt="">
            <img class="close_icon" src="./img/icon/closebtn.png" alt="">
        </div>
        <div class="menupan_mobile" id="menupan_mobile">
            <div class="mml">
            <ul class="menupan_mobile_ul">
                <li><a href="locationlist.html">매장 찾기</a></li>
                <li><a href="order.html">Menu</a></li>
                <li><a href="login.html" id="login_link_mobile">Login</a></li>
                <li><a href="mypage.html" id="mypage_link_mobile" style="display:none;">My Page</a></li>
                <li><a href="signUp.html" id="signup_link_mobile">Sign Up</a></li>
                <li><a href="index.html" id="logout_link_mobile" style="display:none;">Logout</a></li>
            </ul>
        </div>
    </header>
    `;

    //푸터
    const footerContent = `
        <footer id="footer" class="footer">
            <div class="f_wrap">
                <ul class="f_wrap_ul">
                    <li class="f_icon" data-tooltip="인스타그램">
                        <a href="https://www.instagram.com/london.bagel.museum/">
                            <img src="./img/icon/instagram.png" alt="인스타그램">
                        </a>
                    </li>
                    <li class="f_icon" data-tooltip="카카오톡 문의">
                        <a href="https://pf.kakao.com/_Cgxlxib">
                            <img src="./img/icon/kakao_talk.png" alt="카카오톡채널">
                        </a>
                    </li>
                    <li class="f_icon" data-tooltip="캐치테이블">
                        <a href="https://app.catchtable.co.kr/ct/shop/london_bagel_museum_anguk">
                            <img src="./img/icon/캐치테이블.png" style="border-radius: 50%;" alt="캐치테이블">
                        </a>
                    </li>
                </ul>
                <p>런던베이글 뮤지엄 안국점</p>
                <address class="address_style">서울 종로구 북촌로4길 20 연화빌딩 1층</address>
                <p> &copy; Copyright London Bagel Museum </p>
            </div>
        </footer>
    `;

    const darkModeToggleContent = `
        <div class="tog_wrap" onclick="toggleMenu()">
            <img src="./img/icon/sun.png" alt="" id="sun_icon" class="icon sun_icon">
            <img src="./img/icon/moon.png" alt="" id="moon_icon" class="icon moon_icon">
            <label class="toggle_switch" data-tooltip="다크모드">
                <input type="checkbox" id="dark_mode">
                <span class="slider round"></span>
            </label>
        </div>
    `;
    // const m_cart = `
    
    // `;

    document.getElementById('header').innerHTML = headerContent;
    document.getElementById('footer').innerHTML = footerContent;
    document.getElementById('darkmode_toggle').innerHTML = darkModeToggleContent;

    const darkModeToggle = document.getElementById('dark_mode');
    const toggleSwitch = document.querySelector('.toggle_switch');
    const sunIcon = document.getElementById('sun_icon');
    const moonIcon = document.getElementById('moon_icon');
    const togWrap = document.querySelector('.tog_wrap');

    const setMode = (mode) => {
        if (mode === 'dark') {
            document.body.classList.add('dark_mode');
            document.body.classList.remove('light_mode');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
            togWrap.style.background = 'rgba(255, 255, 255, 0.8)';
            toggleSwitch.setAttribute('data-tooltip', '다크 모드');
        } else {
            document.body.classList.add('light_mode');
            document.body.classList.remove('dark_mode');
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
            // togWrap.style.background = 'rgba(255, 255, 255, 0.8)';

            togWrap.style.background = 'rgb(20, 30, 70)';
            toggleSwitch.setAttribute('data-tooltip', '라이트 모드');
        }
    };
// 기본값 라이트 모드 
    const currentMode = localStorage.getItem('darkMode') || 'light';
    darkModeToggle.checked = currentMode === 'dark';
    setMode(currentMode);

    darkModeToggle.addEventListener('change', () => {
        const mode = darkModeToggle.checked ? 'dark' : 'light';
        localStorage.setItem('darkMode', mode);
        setMode(mode);
        //로컬 스토리지에 저장한 후 불러오기 
    });

    togWrap.addEventListener('click', () => {
        togWrap.classList.toggle('open');
    });
});