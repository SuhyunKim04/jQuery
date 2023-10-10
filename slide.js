$('.test').append(`<h1>append</h1>`)
$('.test').prepend(`<h1>prepand</h1>`)


function slideFade() {
    let $container = $('.container');
   let $slides = $('.slide-wrap').find('li');
   let $indi = $('.indicator');
   let count = $slides.length;
   let now = 0;
   const duration = 1500;
   const $pager = $container.find('.pager')
   let $dots;
   let timer;
 
    $pager.click( function(e) {
        console.dir($(this))
        $(this).hasClass('next') ? nextShow() : prevShow();
    })
    
    startFade();
    init();


    function init() {
        createIndicator();
        $dots = $indi.find('button'); 
        $slides.eq(now).fadeIn(); 
        $dots.eq(now).addClass('on')
    }

    $dots.click( function(e) {  
        update($(this).index())
       
    })

    

   function createIndicator() {
       for (let i=1; i <= count; i++){
        $indi.append(`<button type=button><span class="blind">${i}</span></button>`)
        }
   }



    $container.on({
        mouseenter : stopFade,
        mouseleave : startFade
    })
    //    $container.mouseenter(stopFade);
    //    $container.mouseleave(startFade);

   function startFade() {
       timer = setInterval(nextShow, duration);
       
   }

   function stopFade() {
       clearInterval(timer);
     
   }


   function nextShow() { 
    let next = (now + 1) % count;
    update(next)
     
   }

   function prevShow() { 
    let prev = (now - 1) % count;
    update(prev)
    
   }

   function update(slide) {
    $slides.eq(now).fadeOut();
    $slides.eq(slide).fadeIn();
    now = slide;
    $dots.removeClass('on')
    $dots.eq(now).addClass('on')
   }
}

slideFade();



function btnText() {
    let $btn = $('.btn');
    // $btn.click(function(){
    //     $(this).css('background', 'gold');
    // })

    // $btn.on('click', 'span', function() {
    //     console.log($(this).text())
    // })

    let btn = document.querySelector('.btn')

    btn.addEventListener('click',(e) => {

        console.log(e.currentTarget, e.target)
        console.log(e.target.nodeName)
        if(e.target.nodeName == 'SPAN'){
            e.target.style.background = 'red'
        } else(console.log('not span'))
    })
}
btnText();



let $ps = $('.box').find('p');
$ps.css('color', 'red')

$ps.click(function() {
    alert($(this).css('color'))
})

$ps.eq(0).css('font-size', '40px')

let $pick = $('.box').find('span');
$pick.eq(2).css('color', 'orange')

$('.box span:first-of-type').css({
    fontSize : '40px',
    textDecoration:'underline'
})

$pick.first().css('font-style', 'italic');

$ps.last().next().click(function() {
    console.log($(this).text())
})

$('p').nextUntil('div').css('background-color','pink')



