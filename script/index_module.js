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
        tab2ndMenu:(function(){
            const $btns = $('.navWrap .nav2ndMenu .catItem');
            const $divs = $('.navWrap .nav2ndMenu .menuBox');
        
            $btns.on('mouseout',function(){
                $divs.hide();
            })
            $btns.on('mouseover', function() {
                $divs.eq($(this).index()).show().siblings('div').hide();
            });
        })(),
        tabChance1:(function(){  
            const chance = function(value1,value2){
                const $btns1 = $(value1);
                const $divs1 = $(value2);
                $btns1.on('mouseover', function() {
                    console.log($(this).index());
                    $(this).addClass('on').siblings(value1).removeClass('on');
                    $divs1.eq($(this).index()).show().siblings(value2).hide();
                });
            };
            chance('.indexTabNav li','.indexTabCon');
            chance('.indexTabNewNav li','.indexTabNavConBox');
            chance('.topTenNavBox a','.topTenCon .clearfix');
        })(),
        tabChance2:(function(){  
            const chance2 = function(value1,value2){
                const $btns1 = $(value1);
                const $divs1 = $(value2);
                $btns1.on('mouseover', function() {
                    $(this).addClass('on').siblings(value1).removeClass('on');
                    $divs1.eq(($(this).index())/2).show().siblings(value2).hide();
                });
            };
            chance2('.topTenNavBox a','.topTenCon .clearfix');
        })(),
        banner:(function() {
            const $slide = $(".mainBanner");
            const $picli = $('.mainBannerLi');
            const $btnli = $('.smallBtn .smallUl li');
            let $index = 0; 
            let $timer = null;
            
            const banner=function(){
              $btnli.on('mouseover',function(){
                $(this).addClass('active').siblings("li").removeClass('active');
                $picli.eq($(this).index()).stop(true).animate({
                    opacity:1,
                }).siblings("li").stop(true).animate({
                    opacity:0,
                });
              })
            }
            banner()
            const bannerFree=function(){
                $index++;
                if($index>$btnli.length-1){
                    $index=0;
                }
               $btnli.eq($index).addClass('active').siblings("li").removeClass('active');
               $picli.eq($index).animate({
                opacity:1,
                },1000).siblings("li").animate({
                opacity:0,
                },1000);
            }
            $slide.on('mouseout',function() {
                $timer = setInterval(() => {
                  bannerFree();
                },1000)
            })
            $slide.on('mouseover',function() {
                clearInterval($timer);
            })
        })()
    }
})





