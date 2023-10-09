 
function slideFade() {
   let $slides = $('.slide-wrap').find('li');
   let count = $slides.length;
   let now = 0;
   const duration = 1500;
    

   $slides.eq(now).fadeIn();
//    setInterval(nextShow,duration);


   function nextShow() {
    console.log(`now : ${now}`)
    // console.log(`next : ${now + 1}`)
    let next = (now + 1) % count;
    $slides.eq(now).fadeOut();
    $slides.eq(next).fadeIn();

    now = next
    
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