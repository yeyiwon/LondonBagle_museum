$(document).ready(function(){
    const read_item = window.localStorage.getItem('item_data');
    const read_location = window.localStorage.getItem('selectedLocation');
    const item_value = JSON.parse(read_item);
    const location_value = JSON.parse(read_location);


    for(i = 0; i < item_value.length; i++){
        $(".mypage_table").append(`
            <tr>
                <td>
                    <h4 class="mypage_item_name">${item_value[i].name}${item_value[i].cheese_size}</h4>  
                </td>
                <td>
                    <p class="mypage_item_count">${item_value[i].count}</p>
                </td>
                <td>
                    <p class="nypage_item_price">${item_value[i].price}</p>
                </td>
                <td>
                    <p class="mypage_location">${location_value.name}</p>
                </td>
            </tr>
        `)
    }
})