const urlParams = new URL(location.href).searchParams;
        const menu = urlParams.get('menu');

        //로그인 했는지 확인
        const user = window.localStorage.getItem('loggedInUser');
        const user_info = JSON.parse(user);

        //팝업 띄우기
        function openPop() {
            $("#popup_layer").css("display", "block");
            $("body").addClass("no-scroll");
        }
        //팝업 닫기
        function closePop() {
            $("#popup_layer").css("display", "none");
            //크림치즈 라디오버튼 해제
            $("input:radio[name='cream_cheese_radio']").prop('checked', false);
            $("body").removeClass("no-scroll");
        }
        $(document).ready(function(){

            //메뉴 리스트 띄우기
            $.each(Item_list, function(key, value) {
                $('.bagel_list').append('<li><img src="' + value.src + '"><h3>' + value.title + '</h3></li>');
            });
            $.each(Sandwich, function(key, value) {
                $('.sandwich_list').append('<li><img src="' + value.src + '"><h3>' + value.title + '</h3></li>');
            });
            $.each(Soup, function(key, value) {
                $('.soup_list').append('<li><img src="' + value.src + '"><h3>' + value.title + '</h3></li>');
            });
            $.each(Side_item, function(key, value) {
                $('.side_list').append('<li><img src="' + value.src + '"><h3>' + value.title + '</h3></li>');
            });

            if(menu == "bagel"){
                menu_select = "베이글";
                menu_status = Item_list;
                $(".bagel_list").css("display", "grid");
                $(".sandwich_list").css("display", "none");
                $(".soup_list").css("display", "none");
                $(".side_list").css("display", "none");
            }else if(menu == "sandwich"){
                menu_select = "샌드위치";
                menu_status = Sandwich;
                $(".bagel_list").css("display", "none");
                $(".sandwich_list").css("display", "grid");
                $(".soup_list").css("display", "none");
                $(".side_list").css("display", "none");
            }else if(menu == "soup"){
                menu_select = "스프";
                menu_status = Soup;
                $(".bagel_list").css("display", "none");
                $(".sandwich_list").css("display", "none");
                $(".soup_list").css("display", "grid");
                $(".side_list").css("display", "none");
            }else if(menu == "side"){
                menu_select = "크림치즈 및 사이드";
                menu_status = Side_item;
                $(".bagel_list").css("display", "none");
                $(".sandwich_list").css("display", "none");
                $(".soup_list").css("display", "none");
                $(".side_list").css("display", "grid");
            }else{
                menu_select = "베이글";
                menu_status = Item_list;
                $(".bagel_list").css("display", "grid");
                $(".sandwich_list").css("display", "none");
                $(".soup_list").css("display", "none");
                $(".side_list").css("display", "none");
            }

            
            let click_origin_price = 0;

            //클릭한 메뉴 내용 팝업 보여주기
            $(".order_menu li").on('click', function(){
                
                //값 가져오기
                let index_no = $(this).index();
                let index_src = menu_status[index_no].src;
                let index_title = menu_status[index_no].title;
                let index_price = menu_status[index_no].price;
                let total_price = menu_status[index_no].price;
                let index_info = menu_status[index_no].info;
                let quantity = 1;

                click_origin_price = index_price;

                $(".item_info").text(index_info);

                //갯수 리셋
                $(".quantity").text(quantity);
                
                // 크림치즈일 경우 s, l 사이즈 선택
                var cream_cheese = index_title.match('크림치즈');
                if(cream_cheese == "크림치즈"){
                    var small = index_price.substr(0, 4);
                    var large = index_price.substr(5, 8);
                    $(".cream_cheese_select").css("display", "flex");
                }else{
                    $(".cream_cheese_select").css("display", "none");
                }

                // 크림치즈 사이즈, 가격 변경
                $("input[name='cream_cheese_radio']").change(function(){
                    var radio_check = $("input[name='cream_cheese_radio']:checked").val();
                    //갯수 리셋
                    quantity = 1;
                    $(".quantity").text(quantity);
                    if(radio_check == "_S"){
                        index_price = small;
                        index_price = parseInt(index_price);
                        total_price = index_price;
                        $(".bagel_price").text(index_price);
                        click_origin_price = index_price;
                    }else{
                        index_price = large;
                        index_price = parseInt(index_price);
                        total_price = index_price;
                        $(".bagel_price").text(index_price);
                        click_origin_price = index_price;
                    }
                });

                //이미지 및 텍스트 채워넣기
                $("#bagel_img_box").attr("src", index_src);
                $(".bagel_title").text(index_title);
                $(".bagel_price").text(index_price);

                //갯수 마이너스
                $(".minus_btn").on('click', function(){
                    if(quantity == 1){
                        alert("1개 미만으로 내릴 수 없습니다.");
                        return false;
                    }else{
                        quantity -= 1;
                        total_price -= index_price;
                        $(".quantity").text(quantity);
                        $(".bagel_price").text(total_price);
                    }
                })
                //갯수 플러스
                $(".plus_btn").on('click', function(){
                    var radio_check = $("input[name='cream_cheese_radio']:checked").val();
                    if(cream_cheese == "크림치즈"){
                        if(radio_check == undefined){
                            alert("사이즈를 선택해 주세요");
                            return false;
                        }else{
                            quantity += 1;
                            total_price += index_price;
                            $(".quantity").text(quantity);
                            $(".bagel_price").text(total_price);    
                        }
                    }else{
                        quantity += 1;
                        total_price += index_price;
                        $(".quantity").text(quantity);
                        $(".bagel_price").text(total_price);
                    }
                })
              
                openPop();
            });

            //장바구니 배열 생성
            let order_list = [];

            //전체 장바구니 가격
            let order_total_price = 0;

            //로컬스토리지
            let local_item;

            //장바구니 버튼
            $("#order_btn").on('click', function(){
                if(!user_info){
                    alert("로그인 한 뒤 장바구니에 넣을 수 있습니다.");
                    location.href='login.html';
                    return false;
                }
                let a = $(".quantity").text();
                let b = click_origin_price;
                let c = $(".bagel_title").text();
                let d = $(".bagel_price").text();
                var cheese_SL = $("input:radio[name='cream_cheese_radio']:checked").val();

                var title_chk = c.match('크림치즈');

                if(cheese_SL == undefined && !title_chk){
                    cheese_SL = "";
                }else if(title_chk){
                    if(!cheese_SL){
                        alert("크림치즈 사이즈를 선택해 주세요.");
                        return false;
                    }
                }

                a = parseInt(a);
                b = parseInt(b);

                let order_item = {"count": a, "price": b, "name": c, "total_price": d, "cheese_size": cheese_SL};
                let int_total_price = parseInt(order_item.total_price);
                order_total_price += int_total_price;
                
                //장바구니에 이름 비교해서 같은상품 들어있으면 안들어가게
                var same_check = order_list.find(i => i.name == order_item.name);

                if(order_item.cheese_size){
                    var cheese_same_check = order_list.find(i => i.cheese_size == order_item.cheese_size);
                }

                if(!order_item.cheese_size){
                    order_item.cheese_size = "";
                }

                if(!same_check){
                    //장바구니에 같은 상품 없을 때 중복 아니면 값 담기
                    order_list.push(order_item);

                                                            
                    $(document).find(".total_prcie").text(order_total_price);

                    $(".order_list").append(`
                        <li class="order_item">
                            <div class="item_name">${c}</div>
                            <div>
                                <span class="item_price">${d}</span>원
                                <span class="quantity_btn">
                                    <span class="material-symbols-outlined draggable minus_count">remove</span>
                                    <span class="item_count">${a}</span>개
                                    <span class="material-symbols-outlined draggable plus_count">add</span>
                                </span>
                            </div>
                        </li>
                    `);

                    //크림치즈 라디오버튼 해제
                    $("input:radio[name='cream_cheese_radio']").prop('checked', false);

                    closePop();
                }else if(same_check && order_item.cheese_size != ""){
                    //크림치즈 사이즈 같으면 실행 X 다르면 실행 O
                    if(cheese_same_check){
                        alert("이미 장바구니에 상품이 있습니다.");
                        closePop();
                        return false;
                    }else{
                        order_list.push(order_item);
                             
                        $(document).find(".total_prcie").text(order_total_price);

                        $(".order_list").append(`
                            <li class="order_item">
                                <div class="item_name">${c}</div>
                                <div>
                                    <span class="item_price">${d}</span>원
                                    <span class="quantity_btn">
                                        <span class="material-symbols-outlined draggable minus_count">remove</span>
                                        <span class="item_count">${a}</span>개
                                        <span class="material-symbols-outlined draggable plus_count">add</span>
                                    </span>
                                </div>
                            </li>
                        `);

                        //크림치즈 라디오버튼 해제
                        $("input:radio[name='cream_cheese_radio']").prop('checked', false);

                        closePop();
                    }
                }else{
                    //장바구니에 같은 상품 있을 때
                    alert("이미 장바구니에 상품이 있습니다.");
                    closePop();
                    return false;
                }
            })

            $(document).on('click', ".plus_count", function(){
                //이름 가져오고 장바구니의 몇번째 배열인지 확인
                let this_title = $(this).parent().parent().siblings(".item_name").text();

                //몇번째 인덱스인지 확인
                const check_arr_count = order_list.findIndex((item) => item.name === this_title);

                //갯수 및 가격 추가
                order_list[check_arr_count].count += 1;
                var tot_pr = parseInt(order_list[check_arr_count].total_price);

                //한 제품의 총 가격
                tot_pr += order_list[check_arr_count].price;

                //배열에 값 넣기
                order_list[check_arr_count].total_price = tot_pr;
                
                //장바구니 총 가격
                order_total_price += order_list[check_arr_count].price;

                //갯수 및 가격 텍스트 입력
                $(this).siblings(".item_count").text(order_list[check_arr_count].count);
                $(this).parent().siblings(".item_price").text(tot_pr);
                $(document).find(".total_prcie").text(order_total_price);
            })

            $(document).on('click', ".minus_count", function(){ 
                //이름 가져오고 장바구니의 몇번째 배열인지 확인
                let this_title = $(this).parent().parent().siblings(".item_name").text();
                //몇번째 인덱스인지 확인
                const check_arr_count = order_list.findIndex((item) => item.name === this_title);

                var tot_pr = parseInt(order_list[check_arr_count].total_price);

                //제품이 1개 이하라면 삭제 아니면 -1
                if(order_list[check_arr_count].count == 1){
                    order_total_price -= order_list[check_arr_count].price
                    order_list.splice(check_arr_count, 1);
                    $(this).closest(".order_item").remove();
                    $(document).find(".total_prcie").text(order_total_price);
                }else{                  
                    order_list[check_arr_count].count -= 1;  

                    if(order_list[check_arr_count].cheese_size){
                        if(order_list[check_arr_count].cheese_size == "_S"){
                            tot_pr -= order_list[check_arr_count].price;
                        }else if(order_list[check_arr_count].cheese_size == "_L"){
                            tot_pr -= order_list[check_arr_count].price;
                        }
                    }
                    
                    //배열에 값 넣기
                    order_list[check_arr_count].total_price = tot_pr;

                    //장바구니 총 가격
                    order_total_price -= order_list[check_arr_count].price;

                    //갯수 및 가격 텍스트 입력
                    $(this).siblings(".item_count").text(order_list[check_arr_count].count);
                    $(this).parent().siblings(".item_price").text(tot_pr);
                    $(document).find(".total_prcie").text(order_total_price);
                }
            })

            //카테고리 누르면 메뉴 보여지는
            $(".category_wrap li").on('click', function(){
                menu_select = $(this).text();
                // alert(menu_select);
                //나중에 수정 일단 되게만 해놨
                switch(menu_select){
                    case '베이글':
                        menu_status = Item_list;
                        $(".bagel_list").css("display", "grid");
                        $(".sandwich_list").css("display", "none");
                        $(".soup_list").css("display", "none");
                        $(".side_list").css("display", "none");
                        break;
                    case '샌드위치':
                        menu_status = Sandwich;
                        $(".bagel_list").css("display", "none");
                        $(".sandwich_list").css("display", "grid");
                        $(".soup_list").css("display", "none");
                        $(".side_list").css("display", "none");
                        break;
                    case '스프':
                        menu_status = Soup;
                        $(".bagel_list").css("display", "none");
                        $(".sandwich_list").css("display", "none");
                        $(".soup_list").css("display", "grid");
                        $(".side_list").css("display", "none");
                        break;
                    case '크림치즈 및 사이드':
                        menu_status = Side_item;
                        $(".bagel_list").css("display", "none");
                        $(".sandwich_list").css("display", "none");
                        $(".soup_list").css("display", "none");
                        $(".side_list").css("display", "grid");
                        break;
                }
            });

            $(".all_buy").on('click', function(){
                //로그인 안했으면 구매 X
                if(!user_info){
                    alert("로그인 한 뒤 장바구니에 넣을 수 있습니다.");
                    location.href='login.html';
                    return false;
                }
                //로컬스토리지에 값 넣기
                if(order_list == ""){
                    alert("장바구니에 메뉴가 1개 이상 있어야 합니다");
                    return false;
                }else{
                    local_item = JSON.stringify(order_list);
                    window.localStorage.setItem('item_data', local_item);
                    location.href='payment.html';
                }
            })

            //한개만 구매
            $(".one_buy").on('click', function(){
                if(!user_info){
                    alert("로그인 한 뒤 구매할 수 있습니다.");
                    location.href='login.html';
                    return false;
                }
                let one_a = $(".quantity").text();
                let one_b = click_origin_price;
                let one_c = $(".bagel_title").text();
                let one_d = $(".bagel_price").text();
                var cheese_SL = $("input:radio[name='cream_cheese_radio']:checked").val();

                var title_chk = one_c.match('크림치즈');

                if(cheese_SL == undefined && !title_chk){
                    cheese_SL = "";
                }else if(title_chk){
                    if(!cheese_SL){
                        alert("크림치즈 사이즈를 선택해 주세요.");
                        return false;
                    }
                }

                one_a = parseInt(one_a);
                one_b = parseInt(one_b);

                let order_item = {"count": one_a, "price": one_b, "name": one_c, "total_price": one_d, "cheese_size": cheese_SL};

                order_list.push(order_item);

                local_item = JSON.stringify(order_list);
                window.localStorage.setItem('item_data', local_item);
                location.href='payment.html'
            })

            $(".delete_local").on('click', function(){
                window.localStorage.removeItem('item_data');
            })
         });


