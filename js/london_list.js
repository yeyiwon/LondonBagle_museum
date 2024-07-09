const Item_list = [
    {item_no : 1, src: './img/베이글/갈릭.png', title: '갈릭 베이글', price: 5300, info: '마치 마늘바게트를 먹는 기분! 쫀득하고 부드러운 빵에 갈릭향이 가득!'},
    {item_no : 2, src: './img/베이글/감자치즈.png', title: '감자치즈 베이글', price: 5500, info: '베이글 속에 감자치즈가 듬뿍 채워져있는 쫀득쫀득 담백한 베이글!'},
    {item_no : 3, src: './img/베이글/스윗펌킨.png', title: '스윗 펌킨 치즈 윌넛 베이글', price: 5500, info: '베이글 속에 달달하고 고소한 단호박 필링이 가득!'},
    {item_no : 4, src: './img/베이글/무화과.png', title: '무화과 베이글', price: 4700, info: '쫀득한 베이글과 향기롭고 달짝지근한 무화과 과육이 동시에 씹히는 베이글!'},
    {item_no : 5, src: './img/베이글/바질.png', title: '바질 베이글', price: 4700, info: '쫀득하고 촉촉한 베이글에 바질향이 가득!'},
    {item_no : 6, src: './img/베이글/블랙올리브.png', title: '블랙올리브 베이글', price: 4700, info: '쫀득한 베이글 사이사이 향기로운 블랙 올리브가 한 가득!'},
    {item_no : 7, src: './img/베이글/블루베리.png', title: '블루베리 베이글', price: 4700, info: '베이글 속에 새콤달콤한 블루베리 필링이 가득! 새콤달콤한 맛을 좋아한다면 강추!'},
    {item_no : 8, src: './img/베이글/소금빵.png', title: '소금빵 베이글', price: 4700, info: '담백한 베이글에 소금의 짭짤한 맛이 어우러진 베이글!'},
    {item_no : 9, src: './img/베이글/어니언.png', title: '어니언 베이글', price: 4700, info: '쫄깃한 베이글에 어니언 향이 한 가득!'},
    {item_no : 10, src: './img/베이글/에브리띵.png', title: '에브리띵 베이글', price: 4700, info: '고소한 깨와 견과류가 잔뜩 묻은 베이글! 고소하고 쫀득 담백한 맛이 일품!'},
    {item_no : 11, src: './img/베이글/참깨.png', title: '참깨 베이글', price: 4700, info: '담백한 플레인 베이글에 고소한 참깨가 잔뜩 뿌려져 있는 참깨 베이글!'},
    {item_no : 12, src: './img/베이글/초코.png', title: '다크 초코 베이글', price: 4900, info: '베이글 속에 초코가 가득! 베이글의 풍미와 초코의 풍미 2가지를 느낄 수 있는 베이글'},
    {item_no : 13, src: './img/베이글/토마토.png', title: '토마토 허브 베이글', price: 4700, info: '은은한 토마토와 허브향이 느껴지는 짭쪼름한 베이글!'},
    {item_no : 14, src: './img/베이글/트러플버터.png', title: '트러플버터 베이글', price: 5500, info: '트러플의 향기와 버터의 향기를 동시에 느낄 수 있는 베이글!'},
    {item_no : 15, src: './img/베이글/페페로니.png', title: '페페로니 치즈 베이글', price: 5500, info: '치즈, 할라피뇨, 페퍼로니가 만난 베이글! 마치 피자를 먹는 기분!'},
    {item_no : 16, src: './img/베이글/프레첼버터솔트.png', title: '프레첼버터솔트 베이글', price: 5900, info: '쫄깃하고 짭쪼름한 베이글과 버터와의 환상조합!'},
    {item_no : 17, src: './img/베이글/플레인.png', title: '플레인 베이글', price: 3800, info: '호불호 없는 누구나 좋아할 쫀득 담백한 베이글! 크림치즈를 발라먹으면 더 맛있습니다!'},
    {item_no : 18, src: './img/베이글/시나몬피칸.png', title: '시나몬 피칸 베이글', price: 4700, info: '겉에 설탕과 달달한 소스가 잔뜩! 피칸도 듬뿍 들어있어 달달고소한 베이글!'},

]   

const Side_item =[
    {side_no : 1, src: './img/사이드/당근라페.png', title: '당근라페', price: 3800, info: '새콤한맛과 아삭하게 씹히는 당근라페!'},
    {side_no : 2, src: './img/사이드/코울슬로.png', title: '코울슬로', price: 3500, info: '살짝 느끼해질 때쯤 먹어주면 너무나 맛있는 코울슬로!'},
    {side_no : 3, src: './img/사이드/라즈베리홈메이드잼크림치즈.png', title: '라즈베리 홈메이드잼 크림치즈', price: 3800 + '~' + 7500, info: '새콤달콤한 향의 라즈베리 크림치즈!'},
    {side_no : 4, src: './img/사이드/레몬커드크림치즈.png', title: '레몬커드 크림치즈', price: 3800 + '~' + 7500, info: '새콤달콤한 향의 레몬커드 크림치즈!'},
    {side_no : 5, src: './img/사이드/메이플피칸크림치즈.png', title: '메이플 피칸 크림치즈', price: 3800 + '~' + 7500, info: '바삭한 메이플 피칸과 크림치즈의 조합!'},
    {side_no : 6, src: './img/사이드/무화과호두크림치즈.png', title: '무화과 호두 크림치즈', price: 4300 + '~' + 8500, info: '달달한 무화과, 담백고소한 호두, 크림치즈의 조합!'},
    {side_no : 7, src: './img/사이드/바질페스토크림치즈.png', title: '바질 페스토 크림치즈', price: 3800 + '~' + 7500, info: '바질의 향기로움과 크림치즈의 조화로운 맛!'},
    {side_no : 8, src: './img/사이드/베이컨어니언크림치즈.png', title: '베이컨 어니언 크림치즈', price: 4300 + '~' + 8500, info: '베이컨 토마토느낌의 소스와 크림치즈의 조합!'},
    {side_no : 9, src: './img/사이드/블루베리크림치즈.png', title: '블루베리 크림치즈', price: 3800 + '~' + 7500, info: '호불호 없는 상큼달달한 크림치즈!'},
    {side_no : 10, src: './img/사이드/얼그레이밀크잼크림치즈.png', title: '얼그레이 밀크잼 크림치즈', price: 3800 + '~' + 7500, info: '너무 달지 않고 얼그레이 향이 진한 크림치즈!'},
    {side_no : 11, src: './img/사이드/쪽파갈릭크림치즈.png', title: '쪽파갈릭 크림치즈', price: 3800 + '~' + 8500, info: '향긋한 쪽파와 매력적인 갈릭향이 섞인 크림치즈!'},
    {side_no : 12, src: './img/사이드/트러플페스토크림치즈.png', title: '트러플 페스토 크림치즈', price: 4300 + '~' + 7500, info: '짭쪼름한 맛에 트러플향이 진한 크림치즈!'},
    {side_no : 13, src: './img/사이드/플레인크림치즈.png', title: '오리지널 플레인 크림치즈', price: 3300 + '~' + 6500, info: '입맛을 당기는 치즈향이 느껴지는 꾸덕한 크림치즈'},
    {side_no : 14, src: './img/사이드/피치망고크림치즈.png', title: '피치망고 크림치즈', price: 4300 + '~' + 8500, info: '달달하면서 상큼한 망고맛이 잘 느껴지는 크림치즈!'},

]

const Sandwich = [
    {Sandwich_no : 1, src:'./img/샌드위치/베이컨포테이토.png', title: '베이컨 포테이토 샌드위치', price: 14800, info: '플레인 베이글 사이에 매쉬 포테이토, 토마토, 수제 베이컨 햄이 듬뿍 들어간 샌드위치!'},
    {Sandwich_no : 2, src:'./img/샌드위치/브릭레인.png', title: '브릭레인 샌드위치', price: 6800, info: '쫄깃 담백한 베이글 위에 고소한 깨가 가득! 그 사이에 꾸덕한 크림치즈가 한 가득! 꿀 뿌려서 먹으면 더 맛있습니다!!'},
    {Sandwich_no : 3, src:'./img/샌드위치/쪽파프레첼.png', title: '쪽파 프레첼 샌드위치', price: 8500, info: '쪽파와 진한 크림치즈가 듬뿍 들어있는 베이글 샌드위치! 쫀득쫀득한 베이글과 크림치즈의 꾸덕한 식감이 더해진 묵직한 베이글'},
    {Sandwich_no : 4, src:'./img/샌드위치/잠봉뵈르.png', title: '잠봉 버터 샌드위치', price: 8500, info: '깨가 듬뿍 뿌려진 베이글 사이에 햄과 치즈가 들어있는 매력있는 샌드위치!'},
    {Sandwich_no : 5, src:'./img/샌드위치/트러플샌드.png', title: '트러플 페퍼 샌드위치', price: 8500, info: '트러플 향이 한 가득! 고소한 깨와 향기로운 트러플 향이 어우러진 샌드위치'}
]

const Soup = [
    {Soup_no : 1, src:'./img/수프/수프토마토로제.png', title: '토마토 로제 스프', price: 10500, info: '향기로운 토마토와 로제향이 어우러진 스프!'},
    {Soup_no : 2, src:'./img/수프/수프트러플머쉬룸.png', title: '트러플 머쉬룸 스프', price: 12800, info: '진한 버섯향에 든든하게 걸쭉한 질감, 살포시 헍혀진 치즈가 매력적인 스프!'}
]

localStorage.setItem('Item_list', JSON.stringify(Item_list));
localStorage.setItem('Side_item', JSON.stringify(Side_item));
localStorage.setItem('Sandwich', JSON.stringify(Sandwich));
localStorage.setItem('Soup', JSON.stringify(Soup));


