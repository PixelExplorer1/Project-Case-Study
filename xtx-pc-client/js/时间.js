let szb = document.querySelector('.sz .szb')
let i = 0
/* let t = setInterval(function(){
    if(i<10){
        szb.innerHTML = '0'+ i
        i++
    }else if(i<24){
        szb.innerHTML = i
        i++
    }else{
        i = 0
    }
},3600000) */
let szb1 = document.querySelector('.sz .szb1')
let i1 = 0
/* let t1 = setInterval(function(){
    if(i1<10){
        szb1.innerHTML = '0'+ i1
        i1++
    }else if(i1<60){
        szb1.innerHTML = i1
        i++
    }else{
        i1 = 0
    }
},60000) */

let szb3 = document.querySelector('.sz .szb3')
let i3 = 0
let t3 = setInterval(function(){
    if(i3<10){
        szb3.innerHTML = '0'+ i3
        i3++
    }else if(i3<60){
        szb3.innerHTML = i3
        i3++
    }else{
        i3 = 0
        if(i1<10){
            szb1.innerHTML = '0'+ i1
            i1++
        }else if(i1<60){
            szb1.innerHTML = i1
            i++
        }else{
            i1 = 0
            if(i<10){
                szb.innerHTML = '0'+ i
                i++
            }else if(i<24){
                szb.innerHTML = i
                i++
            }else{
                i = 0
            }

        }
    }
},1000)