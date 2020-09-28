define([],function(){
    return{
        init:function(){
            $.ajax({
                url:"http://192.168.13.41/project_jiuxian/php/test.php",
                dataType:"json"
            }).done(function(data){
                console.log(data);
                let strhtml='';
                $.each(data,function (index,value) {
                    strhtml +=`
                        <li>
                        <div class="listPic">
                        <img src="${value.url}" alt="">
                        </div>
                        <div class="listName">
                            <p>${value.introduce}</p>
                        </div>
                        <div class="listPrice">
                            <p>${value.price}</p>
                        </div>
                        </li>
                    ` ;
                });
                $('.bridgeList').html(strhtml);
            })
        }
    }
})