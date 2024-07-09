$('#email_sel').change(function(){
        $("#email_sel option:selected").each(function () {
            
            if($(this).val()== '1'){ //직접입력일 경우
                $("#email_dns").val('');    
                $("#email_dns").attr("disabled",false); //활성화
            }else{ //직접입력이 아닐경우
                $("#email_dns").val($(this).text()); 
                $("#email_dns").attr("disabled",true); //비활성화
            }
        });

    });