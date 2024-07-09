
        // 위치 데이터 배열
        const locations = [
            {loc_num: 1, name: '안국점', address: '서울 종로구 북촌로4길 20', nearby: '안국역 2번 출구에서 304m',
                opening: '08:00 ~ 18:00', holidays: '연중 무휴', parking: '주차 불가', pickup: '08:00 ~ 17:30', lastorder: '17:30', src: './img/location/locationanguk.jpg', loc_x : 37.57927, loc_y: 126.9862},
            {loc_num: 2, name: '도산점', address: '서울 강남구 언주로168길 33 1, 2층', nearby: '압구정로데오역 5번 출구에서 455m',
                opening: '08:00 ~ 18:00', holidays: '연중 무휴', parking: '유료 : 최초 60분 4,000원, 추가 요금 10분당 1,000원, 최대 100,000원', pickup: '08:00 ~ 17:30', lastorder: '17:30',src: './img/location/locationdosan.jpg', loc_x : 37.52629, loc_y : 127.0365},
            {loc_num: 3, name: '잠실점', address: '서울 송파구 올림픽로 300 롯데월드몰 1층', nearby: '잠실역 11번 출구에서 216m',
                opening: '10:30 ~ 22:00', holidays: '연중 무휴', parking: '유료 : 최초 10분 300원, 추가 요금 60분당 300원, 최대 45,000원', pickup: '10:30 ~ 21:30', lastorder: '21:30', src: './img/location/locationjamsil.jpg', loc_x : 37.51351, loc_y: 127.1037},
            {loc_num: 4, name: '수원점', address: '경기 수원시 장안구 수성로 175', nearby: '화서역 1번 출구에서 255m',
                opening: '10:00 ~ 22:00', holidays: '연중 무휴', parking: '유료 : 추가 요금 10분당 500원, 최대 18,000원', pickup: '10:30 ~ 21:30', lastorder: '21:30',src: './img/location/locaitionsuwon.jpg', loc_x : 37.28731, loc_y: 126.9916},
            {loc_num: 5, name: '제주점', address: '제주 제주시 구좌읍 동복로 85 제2동 1층', nearby: '화서역 1번 출구에서 255m',
                opening: '08:00 ~ 22:00', holidays: '연중 무휴', parking: '무료 주차장 : 제주시 구좌읍 동복리 1352', pickup: '08:30 ~ 21:30', lastorder: '21:30', src: './img/location/locationjeju.jpg', loc_x : 33.55371, loc_y: 126.7156}
        ];

        // 전역 변수로 map 선언
        let map;

        // 위치 목록 생성 함수
        //함수를 선언해서 각 위치마다 li 추가 
        function generateLocationList() {
            const locationList = document.getElementById('locationList');
            // 기존 목록 초기화
            locationList.innerHTML = '';

            // locations 배열을 순회하며 목록 생성
            // 예약 링크(.reservation_link)에 클릭 이벤트 리스너를 추가하여 클릭 시 선택된 위치 정보를 로컬 스토리지에 저장하고 예약 페이지로 이동
            locations.forEach(location => {
                const li = document.createElement('li');
                li.classList.add('location_box');

                li.innerHTML = `
                    <div class="l_img_box" data-tooltip="${location.name}">
                        <img src="${location.src}" alt="${location.name}">
                    <div class="l_text_box">
                        <dl>
                            <dt><img src="./img/icon/location.png" alt="위치 이미지">${location.name}</dt>
                            <dd><address>${location.address}</address></dd>
                            <dd>매일 : ${location.opening}</dd>
                        </dl>
                        <div class="more_btn l_pickup_btn">

                            <a href="order.html" class="reservation_link"> ${location.name} 예약하러 가기 <img src="./img/icon/shoppingBag.png" alt=""></a>
                        </div>
                    </div>
                </div>
                `;
                // 목록에 항목 추가
                locationList.appendChild(li);

                // 위치 박스 클릭 이벤트 등록
                li.addEventListener('click', () => {
                    const markerPosition = new kakao.maps.LatLng(location.loc_x, location.loc_y);
                    // 지도 중심 이동
                    map.setCenter(markerPosition);
                });

                const reservationLink = li.querySelector('.reservation_link');
                reservationLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    // 선택된 위치 정보를 로컬 스토리지에 저장
                    localStorage.setItem('selectedLocation', JSON.stringify(location));
                    // 예약 페이지로 이동
                    window.location.href = 'order.html'; // 예약 페이지 URL로 수정할 것
                });
            });
        }

document.addEventListener('DOMContentLoaded', function() {
    generateLocationList(); // 위치 목록 생성

    var mapContainer = document.getElementById('map');
    var mapOption = {
        center: new kakao.maps.LatLng(locations[0].loc_x, locations[0].loc_y),
        level: 3
    };

    map = new kakao.maps.Map(mapContainer, mapOption);

        // 마우스 휠과 모바일 터치를 이용한 지도 확대, 축소를 막습니다
        map.setZoomable(false);

    var imageSrc = "./img/icon/address.png";
    var imageSize = new kakao.maps.Size(60, 60);
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // 모든 위치에 대해 마커와 정보창 추가하기
    locations.forEach(location => {
        const markerPosition = new kakao.maps.LatLng(location.loc_x, location.loc_y);

        // 마커 생성
        var marker = new kakao.maps.Marker({
            position: markerPosition,
            map: map,
            title: location.name,
            image: markerImage
        });

        // 마커를 클릭했을 때 정보창 열기
        kakao.maps.event.addListener(marker, 'click', function() {
            openInfoWindow(location.loc_x, location.loc_y);
        });




        // 커스텀 오버레이 생성
        var content = `
            <div class="customoverlay" data-tooltip="${location.name}"></div>
        `;
        var customOverlay = new kakao.maps.CustomOverlay({
            map: map,
            position: markerPosition,
            content: content,
            yAnchor: 1
        });
    });
});


        
