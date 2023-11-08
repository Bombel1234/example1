
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
let one_or_two = ''

let b1 = document.getElementById("btn1")
let b2 = document.getElementById("btn2")
let b3 = document.getElementById("btn3")
let b4 = document.getElementById("btn4")
let b5 = document.getElementById("btn5")
let b6 = document.getElementById("btn6")
let b7 = document.getElementById("btn7")
let b8 = document.getElementById("btn8")

let data = {
    h_klamka: [140, 190, 283, 433, 533, 583, 1020],
    width_max: 1600,
    height_min: 280,
    height_max: 2800
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
    count_skr = count
    one_or_two = count
    let inp1 = document.getElementById('inp1').value
    let inp2 = document.getElementById('inp2').value
    if (count_skr == '1') {
        b1.style.backgroundColor = 'red'
        b2.style.backgroundColor = 'blueviolet'
        klamka.style.display = 'block'
        zaw.style.display = 'block'
        stl.style.display = 'none'
        if (start == 'start') {
            if (one_or_two == '2') {
                func_plecy(spos_open, inp2, str_zaw)
                func_zasuwnica(inp2, h_kl, str_zaw)
                func_gora(inp1, spos_open)
                func_dol(inp1)
                
            }
            else if (one_or_two == '1'){
                alert('wybierz wysokosc klamki')
                delete_all_div()
                for (let index = 0; index < document.querySelectorAll('.btn9').length; index++) {
                    const element = document.querySelectorAll('.btn9')[index];
                    if (element.classList.contains('active')){
                        element.classList.remove('active')
                    }
                    
                }
                if (btn_standart.classList.contains('active')){
                    btn_standart.classList.remove('active')
                }
            }

        }

    }
    else if (count_skr == '2') {
        one_or_two = '2'
        b2.style.backgroundColor = 'red'
        b1.style.backgroundColor = 'blueviolet'
        klamka.style.display = 'none'
        zaw.style.display = 'none'
        stl.style.display = 'block'
        if (start == 'start') {
            xx_docisk(inp2, str_slupek, spos_open)
            xx_plecy(inp2, str_slupek)
            xx_top_rozw_uch(inp1, str_slupek)
            xx_slupek_rozw_uch(inp1, str_slupek)
            xx_top_bottom_rozw(inp1, spos_open)
        }
    }



}

function sposob_open(params) {
    let inp2 = document.getElementById('inp2').value
    let inp1 = document.getElementById('inp1').value
    spos_open = params

    if (count_skr == '1') {
        if (start == 'start') {
            func_plecy(spos_open, inp2, str_zaw)
            func_zasuwnica(inp2, h_kl, str_zaw)
            func_gora(inp1, spos_open)
            func_dol(inp1)
        }
    }
    else if (count_skr == '2') {
        if (start == 'start') {
            if (spos_open == 'rozw_uch') {
                xx_plecy(inp2, str_slupek, spos_open)
                xx_docisk(inp2, str_slupek, spos_open)
                xx_top_rozw_uch(inp1, str_slupek)
                xx_slupek_rozw_uch(inp1, str_slupek)
                xx_top_bottom_rozw(inp1, spos_open)
            }
            else {
                xx_docisk(inp2, str_slupek, spos_open)
                xx_top_bottom_rozw(inp1, spos_open)
            }
        }
    }

    if (spos_open == 'rozw_uch') {
        b3.style.backgroundColor = 'red'
        b4.style.backgroundColor = 'blueviolet'
    }
    else {
        b4.style.backgroundColor = 'red'
        b3.style.backgroundColor = 'blueviolet'
        spos_open = 'rozw'
    }

}
function strona_zawiasow(params) {
    let inp2 = document.getElementById('inp2').value
    str_zaw = params
    if (start == 'start') {
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
    let inp2 = document.getElementById('inp2').value
    let inp1 = document.getElementById('inp1').value
    if (str_slupek == 'left') {
        b7.style.backgroundColor = 'red'
        b8.style.backgroundColor = 'blueviolet'
    }
    else {
        b8.style.backgroundColor = 'red'
        b7.style.backgroundColor = 'blueviolet'
    }
    if (start == 'start') {
        if (spos_open == 'rozw_uch') {
            xx_plecy(inp2, str_slupek)
            xx_top_rozw_uch(inp1, str_slupek)
            xx_slupek_rozw_uch(inp1, str_slupek)
            xx_top_bottom_rozw(inp1, spos_open)
        }
        xx_docisk(inp2, str_slupek, spos_open)
        if (spos_open == 'rozw') {
            xx_top_bottom_rozw(inp1, spos_open)
        }
    }
}


document.querySelectorAll('.btn9').forEach(button => {
    button.addEventListener('click', function (param) {
        h_kl = button.textContent
        for (let index = 0; index < document.querySelectorAll('.btn9').length; index++) {
            const element = document.querySelectorAll('.btn9')[index];
            if (element.classList.contains('active')) {
                element.classList.remove('active')
            }
            button.classList.add('active')
        }
        let inp2 = document.getElementById('inp2').value
        let inp1 = document.getElementById('inp1').value
        if (start == 'start' && one_or_two == '2') {
            func_plecy(spos_open, inp2, str_zaw)
            func_zasuwnica(inp2, h_kl, str_zaw)
            func_gora(inp1, spos_open)
            func_dol(inp1)
        }
        if (standart != 'ok') {
            delete_all_div()

        }

    });
});


let btn_standart = document.getElementById('btn_standart')
let btn_er1 = document.getElementById('btn_er1')
let btn_er2 = document.getElementById('btn_er2')
function input_click(){
    if (btn_standart.classList.contains('active')){
        btn_standart.classList.remove('active')
    }
}

function click_button_standart() {
    btn_standart.classList.add('active')
    if (btn_er1.classList.contains('active') || btn_er2.classList.contains('active')){
        btn_er1.classList.remove('active')
        btn_er2.classList.remove('active')
    }
    start = 'start'
    let inp1 = document.getElementById('inp1').value
    let inp2 = document.getElementById('inp2').value

    if (count_skr == '1' && inp1 != '' && inp2 != '') {
        if (h_kl != '') {
            if (inp2 >= data.height_min && inp2 <= data.height_max && inp1 <= data.width_max) {
                res_box_x(inp1, inp2, h_kl, str_zaw, spos_open)
            }
            else {
                alert('nie mamy takich wymiarow')
            }
        }
        else {
            alert('wyberi wysotu klamky')
            btn_standart.classList.remove('active')
        }
    }
    else if (count_skr == '2' && inp1 != '' && inp2 != '') {
        if (inp2 >= data.height_min && inp2 <= data.height_max && inp1 <= data.width_max) {
            res_box_xx(inp1, inp2, str_slupek, spos_open)
        }
        else {
            console.log('nie mamy takich wymiarow')
        }
    }
    else {
        alert('wwedit wymiarun skrzydla')
    }
}
function click_button_er1(){
    btn_er1.classList.add('active')
    if (btn_standart.classList.contains('active') || btn_er2.classList.contains('active')){
        btn_standart.classList.remove('active')
        btn_er2.classList.remove('active')
    }
}
function click_button_er2(){
    btn_er2.classList.add('active')
    if (btn_standart.classList.contains('active') || btn_er1.classList.contains('active')){
        btn_er1.classList.remove('active')
        btn_standart.classList.remove('active')
    }
}


