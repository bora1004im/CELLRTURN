
function init(){
    /*버거메뉴 나타나기*/
    $('.wrapper').click(function(){
        $(".burger").css('display','block');
    });

    $('.x').click(function(){
        $(".burger").css('display','none');
    });

    /*버거메뉴 슬라이드*/
    $('.burger-main ul li ').click(function(){
        const _this = $(this);

        _this.toggleClass('active'); //조건문을 위해 li toggleclass 넣기 
    
        $('.burger-main ul li div').stop(300).slideUp(300); //슬라이드 올렸다 내리기
        _this.find('div').stop(300).slideToggle(300); 

        
        $('.burger-main ul li h3').removeClass("active3"); //h3 클릭 active3 빼기
        
        if($(this).hasClass('active')){ //조건문으로 클릭할때만 active 넣기 
            $(this).find('h3').toggleClass("active3");
        }
    
    });

    /*메인1 슬라이드*/
    $(".slide").slick({
        arrows : false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    });

    /*메인2 클릭 서브 올라오기*/
    $('.photo span').click(function(){
        $(".photo").toggleClass('active')
    });

    /*메인3 헤더*/
    $(window).scroll(function(){
        let hScroll = $(".main-3").offset().top;
        let offsetTop  = $(window).scrollTop();

        if( hScroll <= offsetTop ){
                $("header").addClass("active");
        } else {
            $("header").removeClass("active");
        }
    });

    /*메인3 슬라이드*/
    $(".slide-product").slick({
        // arrows : false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    });

    /*메인4 인터벌*/
    $('main-4.title').on('scroll',function(){
    });

    let count=0;
    let count1=0;
    let count2=0;
    let count3=0;

    let countInterval = setInterval(function(){
        if(count<90000){
            count+=100;
            $('.main-4 ul li:nth-of-type(1) h3').text(count);
        }else{
            clearInterval(countInterval);
        }
    },2)

    let countInterval2 =setInterval(function(){
        if(count1<204){
            count1++;
            $('.main-4 ul li:nth-of-type(2) h3').text(count1);
        }else{
            clearInterval(countInterval2);
        }
    },20)

    let countInterval3 = setInterval(function(){
        if(count2<81){
            count2++;
            $('.main-4 ul li:nth-of-type(3) h3').text(count2);
        }else{
            clearInterval(countInterval3);
        }
    },50)

    let countInterval4 = setInterval(function(){
        if(count3<12){
            count3++;
            $('.main-4 ul li:nth-of-type(4) h3').text(count3);
        }else{
            clearInterval(countInterval4);
        }
    },150)

    /*메인4 슬라이드*/
    $(".main4-silde").slick({
        arrows : false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    });

    /*footer*/
    $('.on').click(function(){
        $(".area").slideToggle(500)
        if($('.on p').text() == '사업자정보 열기'){
            $('.on p').text('사업자정보 닫기');
        }else{
            $('.on p').text('사업자정보 열기');
        }
    });
};

// $('.btn').click(function(){
//     $('html').scrollTop(0);
// },200)

$(window).on('load',init);
