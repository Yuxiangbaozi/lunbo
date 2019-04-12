let n = 0
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
        $(`#lunbo`).css({transform: 'translateY('+ k(n)*-200 +'px)'})
        $(`.wraper > .button > button:nth-child(${k(n)+1})`).addClass('active')
        $(`.wraper > .button > button:nth-child(${k(n)+1})`).siblings().removeClass('active')
        n++
    } , 3000)
})

$('.wraper > .button > button').on('click',function (cl) {
    let n = cl.currentTarget.id
    $(`#lunbo`).css({transform: 'translateY('+ n*-200 +'px)'})
    $(`.wraper > .button > #${n}`).addClass('active')
    $(`.wraper > .button > #${n}`).siblings().removeClass('active')
})

function k(n){
    if(n >= 3){
        n = n%3
    }
    return n
}

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




/********************不关事**************************/
//ES5
var kkkbb = [1,2,5,3,2,4,5,3,1,6]
function unique(array){
    return(
    array.reduce(function(arr,n){ 
        if( arr.indexOf(n) === -1 ){ 
            arr.push(n) 
        }
        return arr
    },[])
)}



//ES6
var set = new Set(kkkbb)
set.__proto__ = Array.prototype
