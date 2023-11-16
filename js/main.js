
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
let poziom_okucia = 'standart'

let b1 = document.getElementById("btn1")
let b2 = document.getElementById("btn2")
let b3 = document.getElementById("btn3")
let b4 = document.getElementById("btn4")
let b5 = document.getElementById("btn5")
let b6 = document.getElementById("btn6")
let b7 = document.getElementById("btn7")
let b8 = document.getElementById("btn8")

let btn_standart = document.getElementById('btn_standart')
let btn_er1 = document.getElementById('btn_er1')
let btn_er2 = document.getElementById('btn_er2')

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
function add_style_button(){
    btn_standart.style.backgroundColor = 'blueviolet'
    btn_er1.style.backgroundColor = 'blueviolet'
    btn_er2.style.backgroundColor = 'blueviolet'
    btn_standart.disabled = false
    btn_er1.disabled = false
    btn_er2.disabled = false
}

function count_skrzydla(count) {
    delete_all_div()
    count_skr = count
    one_or_two = count
    add_style_button()
    if (count_skr == '1') {
        b1.style.backgroundColor = 'red'
        b2.style.backgroundColor = 'blueviolet'
        klamka.style.display = 'block'
        zaw.style.display = 'block'
        stl.style.display = 'none'
        if (start == 'start') {
            if (one_or_two == '1') {
                delete_all_div()
                for (let index = 0; index < document.querySelectorAll('.btn9').length; index++) {
                    const element = document.querySelectorAll('.btn9')[index];
                    if (element.classList.contains('active')) {
                        element.classList.remove('active')
                    }

                }
                if (btn_standart.classList.contains('active')) {
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
    }
    for (let index = 0; index < document.querySelectorAll('.btn9').length; index++) {
        const element = document.querySelectorAll('.btn9')[index];
        if (element.classList.contains('active')) {
            element.classList.remove('active')
        }
    }

}

function sposob_open(params) {
    spos_open = params
    if (spos_open == 'rozw_uch') {
        b3.style.backgroundColor = 'red'
        b4.style.backgroundColor = 'blueviolet'
    }
    else {
        b4.style.backgroundColor = 'red'
        b3.style.backgroundColor = 'blueviolet'
        spos_open = 'rozw'
    }
    for (let index = 0; index < document.querySelectorAll('.btn9').length; index++) {
        const element = document.querySelectorAll('.btn9')[index];
        if (element.classList.contains('active')) {
            element.classList.remove('active')
        }
    }
    delete_all_div()
    add_style_button()
}

function strona_zawiasow(params) {
    str_zaw = params
    if (str_zaw == 'left') {
        b5.style.backgroundColor = 'red'
        b6.style.backgroundColor = 'blueviolet'
    }
    else {
        b6.style.backgroundColor = 'red'
        b5.style.backgroundColor = 'blueviolet'
    }
    for (let index = 0; index < document.querySelectorAll('.btn9').length; index++) {
        const element = document.querySelectorAll('.btn9')[index];
        if (element.classList.contains('active')) {
            element.classList.remove('active')
        }
    }
    add_style_button()
    delete_all_div()
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

    for (let index = 0; index < document.querySelectorAll('.btn9').length; index++) {
        const element = document.querySelectorAll('.btn9')[index];
        if (element.classList.contains('active')) {
            element.classList.remove('active')
        }
    }
    add_style_button()
    delete_all_div()
}

document.querySelectorAll('.btn9').forEach(button => {
    button.addEventListener('click', function (param) {
        h_kl = button.textContent
        btn_standart.style.backgroundColor = 'blueviolet'
        btn_er1.style.backgroundColor = 'blueviolet'
        btn_er2.style.backgroundColor = 'blueviolet'
        for (let index = 0; index < document.querySelectorAll('.btn9').length; index++) {
            const element = document.querySelectorAll('.btn9')[index];
            if (element.classList.contains('active')) {
                element.classList.remove('active')
            }
            button.classList.add('active')

        }
        if (standart != 'ok') {
            delete_all_div()

        }

    });
});



function input_click() {
    delete_all_div()
    btn_standart.style.backgroundColor = 'blueviolet'
    btn_er1.style.backgroundColor = 'blueviolet'
    btn_er2.style.backgroundColor = 'blueviolet'
    for (let index = 0; index < document.querySelectorAll('.btn9').length; index++) {
        const element = document.querySelectorAll('.btn9')[index];
        if (element.classList.contains('active')) {
            element.classList.remove('active')
        }
    }
    btn_standart.disabled = false
    btn_er1.disabled = false
    btn_er2.disabled = false
}

function click_button_standart() {
    start = 'start'
    let inp1 = document.getElementById('inp1').value
    let inp2 = document.getElementById('inp2').value
    if (btn_er1.classList.contains('active') || btn_er2.classList.contains('active')) {
        btn_er1.classList.remove('active')
        btn_er2.classList.remove('active')
    }
    

    if (count_skr == '1' && inp1 != '' && inp2 != '') {
        if (h_kl != '') {
            if (inp2 >= data.height_min && inp2 <= data.height_max && inp1 <= data.width_max) {
                res_box_x(inp1, inp2, h_kl, str_zaw, spos_open)
                h_kl = ''
                btn_er1.disabled = true
                btn_er2.disabled = true
            }
            else {
                alert('nie mamy takich wymiarow')
            }
        }
        else {
            alert('wyberi wysotu klamky')
            delete_all_div()
            btn_standart.classList.remove('active')
        }
    }
    else if (count_skr == '2' && inp1 != '' && inp2 != '') {
        if (inp2 >= data.height_min && inp2 <= data.height_max && inp1 <= data.width_max) {
            res_box_xx(inp1, inp2, str_slupek, spos_open)
            btn_standart.style.backgroundColor = 'red'
            btn_er1.disabled = true
            btn_er2.disabled = true
        }
        else {
            console.log('nie mamy takich wymiarow')
        }
    }
    else {
        alert('wwedit wymiarun skrzydla')
    }
}
function click_button_er1() {
    start = 'start'
    let inp1 = document.getElementById('inp1').value
    let inp2 = document.getElementById('inp2').value
    
    if (btn_standart.classList.contains('active') || btn_er2.classList.contains('active')) {
        btn_standart.classList.remove('active')
        btn_er2.classList.remove('active')
    }

    if (count_skr == '1' && inp1 != '' && inp2 != '') {
        if (h_kl != '') {
            if (inp2 >= data.height_min && inp2 <= data.height_max && inp1 <= data.width_max) {
                func_zasuwnica(inp2, h_kl, str_zaw)
                h_kl = ''
                if (standart == 'ok') {
                    btn_er1.style.backgroundColor = 'red'
                    func_plecy_er1(inp2, str_zaw)
                    func_dol_er1(inp1, count_skr)
                    func_gora_er1(inp1, spos_open, count_skr)
                    btn_standart.disabled = true
                    btn_er2.disabled = true
                }

            }
            else {
                alert('nie mamy takich wymiarow')
            }
        }
        else {
            alert('wyberi wysotu klamky')
            btn_er1.classList.remove('active')
        }
    }
    else if (count_skr == '2' && inp1 != '' && inp2 != '') {
        if (inp2 >= data.height_min && inp2 <= data.height_max && inp1 <= data.width_max) {
            res_box_xx_er1(inp1, inp2, str_slupek, spos_open, count_skr)
            btn_er1.style.backgroundColor = 'red'
            btn_standart.disabled = true
            btn_er2.disabled = true
        }
        else {
            console.log('nie mamy takich wymiarow')
        }
    }
    else {
        alert('wwedit wymiarun skrzydla')
    }
}
function click_button_er2() {
    let inp1 = document.getElementById('inp1').value
    let inp2 = document.getElementById('inp2').value
    start = 'start'

    if (btn_standart.classList.contains('active') || btn_er1.classList.contains('active')) {
        btn_er1.classList.remove('active')
        btn_standart.classList.remove('active')
    }

    if (count_skr == '1' && inp1 != '' && inp2 != '') {
        if (h_kl != '') {
            if (inp2 >= 490 && inp2 <= 2600 && inp1 <= data.width_max) {
                res_box_x_er2(inp1, inp2, h_kl, str_zaw, count_skr)
                btn_er2.classList.add('active')
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
        if (inp2 >= 490 && inp2 <= 2600 && inp1 <= 1600) {
            res_box_xx_er2(inp1, inp2, str_slupek, spos_open)
        }
        else {
            console.log('nie mamy takich wymiarow')
        }
    }
    else {
        alert('wwedit wymiarun skrzydla')
    }
}


