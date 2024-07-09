$(document).ready(function(){
    //장바구니 값 불러오기
    const read_item = window.localStorage.getItem('item_data');
    const read_location = window.localStorage.getItem('selectedLocation');
    const item_value = JSON.parse(read_item);
    const location_value = JSON.parse(read_location);

    $(".location_name").text(location_value.name);
    $(".location_nearby").text(location_value.nearby);

    let total_prcie = 0;

    for(i = 0; i < item_value.length; i++){
        //이름 같은거 찾아와서 src불러오기
        const find_src = Item_list.find((item) => item.title === item_value[i].name);
        const find_src_sandwich = Sandwich.find((item) => item.title === item_value[i].name);
        const find_src_soup = Soup.find((item) => item.title === item_value[i].name);
        const find_src_side = Side_item.find((item) => item.title === item_value[i].name);

        if(find_src){
            src = find_src.src;
        }else if(find_src_sandwich){
            src = find_src_sandwich.src;
        }else if(find_src_soup){
            src = find_src_soup.src;
        }else if(find_src_side){
            src = find_src_side.src;
        }

        if(item_value[i].cheese_size){
            cheese_size_cont = item_value[i].cheese_size;
        }else{
            cheese_size_cont = "";
        }
        total_prcie += parseInt(item_value[i].total_price);

        $(".payment_box_wrap").append(`
        <div class="payment_box">
            <img src="${src}" alt="${item_value[i].name}">
            <div class="payment_text">
                <p>상품명 : <span>${item_value[i].name}${cheese_size_cont}</span></p>
                <p>갯수 : <span>${item_value[i].count}</span></p>
                <p>가격 : <span>${item_value[i].total_price}</span></p>
            </div>
        </div>
        `);
    }
    
    $(".payment_total_prcie").text(total_prcie);

});