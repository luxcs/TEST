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
        },
        tabChance1:(function(){
            const $btns = $('.navWrap .nav2ndMenu .catItem');
            const $divs = $('.navWrap .nav2ndMenu .menuBox');
        
            $btns.on('mouseout',function(){
                $divs.hide();
            })
            $btns.on('mouseover', function() {
                $divs.eq($(this).index()).show().siblings('div').hide();
            });
        })(),
        tabChance2:(function(){
            const $btns1 = $('.indexTabNav li');
            const $divs1 = $('.indexTabCon');
            $btns1.on('mouseover', function() {
                $(this).addClass('on').siblings('li').removeClass('on');
                $divs1.eq($(this).index()).show().siblings('.indexTabCon').hide();
            });
        })(),
        tabChance3:(function(){
            const $btns2 = $('.indexTabNewNav li');
            const $divs2 = $('.indexTabNavConBox');
            $btns2.on('mouseover', function() {
                $(this).addClass('on').siblings('li').removeClass('on');
                $divs2.eq($(this).index()).show().siblings('.indexTabNavConBox').hide();
            });
        })(),
        tabChance4:(function(){
            const $btns3 = $('.topTenNavBox a');
            const $divs3 = $('.topTenCon .clearfix');
            $btns3.on('mouseover', function() {
                console.log($divs3);
                $(this).addClass('on').siblings("a").removeClass('on');
                $divs3.eq($(this).index()).show().siblings(".clearfix").hide();
            });
        })(),
        banner:(function(){

        })()
    }
})