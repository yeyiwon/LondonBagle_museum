$(document).ready(function() {
    $('#show_pwd').click(function() {
        var pwinput = $('#upw');
        var icon = $('#pwd_icon');
        
        if (pwinput.attr('type') === 'password') {
            pwinput.attr('type', 'text');
            icon.attr('src', 'img/icon/visibility.png'); // 비밀번호가 보이는 상태의 이미지
        } else {
            pwinput.attr('type', 'password');
            icon.attr('src', 'img/icon/visibilityoff.png'); // 비밀번호가 숨겨진 상태의 이미지
        }
    });
});