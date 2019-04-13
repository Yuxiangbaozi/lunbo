/********************普通轮播**************************/
let n = 0
let $lunbo = $('.wraper > #lunbo')
let $img = $lunbo.children('div')
let $index = $img.length - 1
var naozhong = setInterval( () => {
    $(`#lunbo`).css({transform: 'translateY('+ k(n)*-200 +'px)'})
    $(`.wraper > .button > button:nth-child(${k(n)+1})`).addClass('active')
    $(`.wraper > .button > button:nth-child(${k(n)+1})`).siblings().removeClass('active')
    n++
} , 3000)

$('.wraper').on('mouseenter',function () {
    window.clearInterval(naozhong)
})

$('.wraper').on('mouseleave',function () {
    naozhong = setInterval( () => {
        if(n>$index){
            n=0
        }
        $(`#lunbo`).css({transform: 'translateY('+ n*-200 +'px)'})
        $(`.wraper > .button > button:nth-child(${n+1})`).addClass('active')
        $(`.wraper > .button > button:nth-child(${n+1})`).siblings().removeClass('active')
        n++
    } , 3000)
})

$('.wraper > .button > button').on('click',function (cl) {
    let n = cl.currentTarget.id
    $(`#lunbo`).css({transform: 'translateY('+ n*-200 +'px)'})
    $(`.wraper > .button > #${n}`).addClass('active')
    $(`.wraper > .button > #${n}`).siblings().removeClass('active')
})

document.addEventListener('visibilitychange',function(){
    if(document.hidden){
        window.clearInterval(naozhong)
    }else{
        naozhong = setInterval( () => {
            $(`#lunbo`).css({transform: 'translateY('+ k(n)*-200 +'px)'})
            $(`.wraper > .button > button:nth-child(${k(n)+1})`).addClass('active')
            $(`.wraper > .button > button:nth-child(${k(n)+1})`).siblings().removeClass('active')
            n++
        } , 3000)
    }
})

/********************无缝轮播**************************/
let n1
初始化()
var timeID = setInterval( () => {
    //cur($(`.box > img:nth-child(${(n+2)%3+1})`))
    //ready($(`.box > img:nth-child(${(n)%3+1})`))
    //end($(`.box > img:nth-child(${(n+1)%3+1})`))
    end($(`.box > img:nth-child(${k1(n1)})`))
        .one(`transitionend`, (k) =>{ready($(k.currentTarget))})
    cur($(`.box > img:nth-child(${k1(n1+1)})`))
    n1++
} , 3000)

$('.yanshi > .box').on('mouseenter',function () {
    window.clearInterval(timeID)
})

$('.yanshi > .box').on('mouseleave',function () {
    timeID = setInterval( () => {
        //cur($(`.box > img:nth-child(${(n+2)%3+1})`))
        //ready($(`.box > img:nth-child(${(n)%3+1})`))
        //end($(`.box > img:nth-child(${(n+1)%3+1})`))
        end($(`.box > img:nth-child(${k1(n1)})`))
            .one(`transitionend`, (k) =>{ready($(k.currentTarget))})
        cur($(`.box > img:nth-child(${k1(n1+1)})`))
        n1++
    } , 3000)
})
//监控页面是否在后台
document.addEventListener('visibilitychange',function(){
    if(document.hidden){
        window.clearInterval(timeID)
    }else{
        timeID = setInterval( () => {
            //cur($(`.box > img:nth-child(${(n+2)%3+1})`))
            //ready($(`.box > img:nth-child(${(n)%3+1})`))
            //end($(`.box > img:nth-child(${(n+1)%3+1})`))
            end($(`.box > img:nth-child(${k1(n1)})`))
                .one(`transitionend`, (k) =>{ready($(k.currentTarget))})
            cur($(`.box > img:nth-child(${k1(n1+1)})`))
            n1++
        } , 3000)
    }
})

$(`.yanshi > button`).on('click',function(i){
    n1 = i.currentTarget.id
    end($(`.box > img.cur`))
        .one(`transitionend`, (k) =>{ready($(k.currentTarget))})
    cur($(`.box > img:nth-child(${k1(n1)})`))
})

function k1(n1){
    if(n1 > 3){
        n1 = n1%3
        if (n1 === 0) {
            n1 = 3
        }
    }
    return n1
}
function cur(node){
    return node.removeClass('end ready').addClass('cur')
}
function end(node){
    return node.removeClass('cur ready').addClass('end')
}
function ready(node){
    return node.removeClass('end cur').addClass('ready')
}
function 初始化(){
    n1 = 1
    cur($(`.box > img:nth-child(1)`))
    ready($(`.box > img:nth-child(2)`))
    ready($(`.box > img:nth-child(3)`))
}

function k(n){//取值 0 1 2
    if(n >= 3){
        n = n%3
    }
    return n
}


/********************无缝轮播PLUS**************************/

let $buttonwraper2 = $('.wflbplus>.wraper>.buttonwraper')
let $lunbo2 = $('.wflbplus>.wraper>.lunbo')
let $img2 = $lunbo2.children('img')
let $index2 = $img2.length //取值 3
let $firstcopy = $img2.eq(0).clone(true)
let $lastcopy = $img2.eq($img2.length - 1).clone(true)
let n2 = 1
let courrent = 0

$lunbo2.append($firstcopy)//在最后一张后面添加$firstcopy
$lunbo2.prepend($lastcopy)//在第一张前面添加$lastcopy

let time2 = setInterval(
    function(){
        huanye(courrent+1)
    }, 2000)

//监听鼠标点击按钮
$buttonwraper2.on('click', 'button', function(cl){
    let $button2 = $(cl.currentTarget)
    /*console.log($button2[0].outerHTML)*/
    n2 = $button2.index()
    /*console.log(n2) //取值 0 1 2*/
    huanye(n2)
})
$('.wflbplus>.wraper>.but>button:nth-child(1)').on('click',function(){
    huanye(courrent-1)
})
$('.wflbplus>.wraper>.but>button:nth-child(2)').on('click',function(){
    huanye(courrent+1)
})

//监控鼠标是否悬停在轮播上面
$('.wflbplus>.wraper').on('mouseenter', function(){
    window.clearInterval(time2)
})
$('.wflbplus>.wraper').on('mouseleave', function(){
    time2 = setInterval(
        function(){
            huanye(courrent+1)
        }, 2000)
})

//监听页面是否在后台
document.addEventListener('visibilitychange',function(){
    if(document.hidden){
        window.clearInterval(time2)
    }else{
        time2 = setInterval(
            function(){
                huanye(courrent+1)
            }, 2000)
    }
})

function huanye(n2){
    if( n2 >= $index2 ){
        n2 = 0
    }else if( n2 < 0 ){
        n2 = $index2 - 1
    }
    if(n2 === 0 && courrent === $index2 - 1){
    $lunbo2.css({transform: `translateX(${-($index2+1)*1200}px)`})
        .one('transitionend', function(){
            $lunbo2.hide()
                .offset()
            $lunbo2.css({transform: `translateX(${-(n2+1)*1200}px)`})
                .show()
    })
    }else if(courrent === 0 && n2 === $index2 - 1){
        $lunbo2.css({transform: `translateX(0px)`})
            .one('transitionend', function(){
                $lunbo2.hide()
                    .offset()
                $lunbo2.css({transform: `translateX(${-(n2+1)*1200}px)`})
                    .show()
        })
    }else{
        $lunbo2.css({transform: `translateX(${-(n2+1)*1200}px)`})
    }
    courrent = n2
}
