
let klamka = document.getElementById('klamka')
let zaw = document.getElementById('zawias')
let stl = document.getElementById('slup')

let box_left = document.querySelector('.box-left')
let box_right = document.querySelector('.box-right')

let count_skr = '1'
let spos_open = 'rozw_uch'
let str_zaw = 'left'
let str_slupek = 'left'
let h_kl = ''
let start = 'stop'

let b1 = document.getElementById("btn1")
let b2 = document.getElementById("btn2")
let b3 = document.getElementById("btn3")
let b4 = document.getElementById("btn4")
let b5 = document.getElementById("btn5")
let b6 = document.getElementById("btn6")
let b7 = document.getElementById("btn7")
let b8 = document.getElementById("btn8")

let data = {
    h_klamka:[140, 190, 283, 433, 533, 583, 1020],
    width_max:1600,
    height_min:280,
    height_max:2800
}

window.addEventListener('load', () => {
    b1.style.backgroundColor = 'red'
    b3.style.backgroundColor = 'red'
    b5.style.backgroundColor = 'red'
    b7.style.backgroundColor = 'red'
    stl.style.display = 'none'
    for (let index = 0; index < document.querySelectorAll('.btn9').length; index++) {
        const element = document.querySelectorAll('.btn9')[index];
        element.innerHTML = data.h_klamka[index]
    }

})

function count_skrzydla(count) {
    if (count == 1) {
        b1.style.backgroundColor = 'red'
        b2.style.backgroundColor = 'blueviolet'
        klamka.style.display = 'block'
        zaw.style.display = 'block'
        stl.style.display = 'none'
        count_skr = '1'
    }
    else {
        b2.style.backgroundColor = 'red'
        b1.style.backgroundColor = 'blueviolet'
        klamka.style.display = 'none'
        zaw.style.display = 'none'
        stl.style.display = 'block'
        count_skr = '2'
    }

}

function sposob_open(params){
    let inp2 = document.getElementById('inp2').value
    let inp1 = document.getElementById('inp1').value
    spos_open = params
    if (start == 'start'){
        func_plecy(spos_open, inp2, str_zaw)
        func_zasuwnica(inp2, h_kl, str_zaw)
        func_gora(inp1, spos_open)
        func_dol(inp1)
    }
    
    if (spos_open == 'rozw_uch'){
        b3.style.backgroundColor = 'red'
        b4.style.backgroundColor = 'blueviolet'
    }
    else{
        b4.style.backgroundColor = 'red'
        b3.style.backgroundColor = 'blueviolet'
        spos_open = 'rozw'
    }
    
}
function strona_zawiasow(params) {
    let inp2 = document.getElementById('inp2').value
    str_zaw = params
    if (start == 'start'){
        func_plecy(spos_open, inp2, str_zaw)
        func_zasuwnica(inp2, h_kl, str_zaw)
    }
    
    if (str_zaw == 'left') {
        b5.style.backgroundColor = 'red'
        b6.style.backgroundColor = 'blueviolet'
    }
    else {
        b6.style.backgroundColor = 'red'
        b5.style.backgroundColor = 'blueviolet'
    }
}

function slupek(value_slupek) {
    str_slupek = value_slupek
    if (str_slupek == 'left') {
        b7.style.backgroundColor = 'red'
        b8.style.backgroundColor = 'blueviolet'
    }
    else {
        b8.style.backgroundColor = 'red'
        b7.style.backgroundColor = 'blueviolet'
    }
}


document.querySelectorAll('.btn9').forEach(button => {
    button.addEventListener('click', function(param) {
        h_kl = button.textContent
        for (let index = 0; index < document.querySelectorAll('.btn9').length; index++) {
            const element = document.querySelectorAll('.btn9')[index];
            if (element.classList.contains('active')){
                element.classList.remove('active')
            }
            button.classList.add('active')
        }
        let inp2 = document.getElementById('inp2').value
        let inp1 = document.getElementById('inp1').value
        if (start == 'start'){
            func_plecy(spos_open, inp2, str_zaw)
            func_zasuwnica(inp2, h_kl, str_zaw)
            func_gora(inp1, spos_open)
            func_dol(inp1)
        }
        if (standart != 'ok'){
            delete_all_div()
            
        }
        
    });
  });


function click_button_standart() {
    start = 'start'
    let inp1 = document.getElementById('inp1').value
    let inp2 = document.getElementById('inp2').value
    
    if (count_skr == '1' && inp1 != '' && inp2 != '') {
        if (h_kl != '') {
            if (inp2 >= data.height_min && inp2 <= data.height_max && inp1 <= data.width_max){
                res_box(inp1, inp2, h_kl, str_zaw, spos_open, count_skr)
            }
            else{
                alert('nie mamy takich wymiarow')
            }
        }
        else {
            alert('wyberi wysotu klamky')
        }
    }
    else if (count_skr == '2' && inp1 != '' && inp2 != '') {
        if (inp2 >= data.height_min && inp2 <= data.height_max && inp1 <= data.width_max){
            console.log('okuwamy dwuskrzydlowke')
        }
        else{
            console.log('nie mamy takich wymiarow')
        }
    }
    else {
        alert('wwedit wymiarun skrzydla')
    }
}



