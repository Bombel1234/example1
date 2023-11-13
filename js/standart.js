
let l1 = document.getElementById('l-1')
let l2 = document.getElementById('l-2')
let l3 = document.getElementById('l-3')
let l4 = document.getElementById('l-4')

let p1 = document.getElementById('p-1')
let p2 = document.getElementById('p-2')
let p3 = document.getElementById('p-3')
let p4 = document.getElementById('p-4')

let t1 = document.getElementById('t-1')
let t2 = document.getElementById('t-2')
let t3 = document.getElementById('t-3')

let bot1 = document.getElementById('b-1')
let bot2 = document.getElementById('b-2')
let bot3 = document.getElementById('b-3')

let standart

function delete_all_div() {
    p1.innerText = ''
    p2.innerText = ''
    p3.innerText = ''
    p4.innerText = ''
    l1.innerText = ''
    l2.innerText = ''
    l3.innerText = ''
    l4.innerText = ''
    t1.innerText = ''
    t2.innerText = ''
    t3.innerText = ''
    bot1.innerText = ''
    bot2.innerText = ''
    bot3.innerText = ''

}

function func_plecy(spos_open, height, str_zaw) {
    if (spos_open == 'rozw_uch') {
        if (height < 801) {
            if (str_zaw == 'left') {
                l1.innerText = ''
                l2.innerText = ''
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = ''
                p2.innerText = ''
                p3.innerText = ''
                p4.innerText = ''
            }

        }
        else if (height >= 801 && height <= 1200) {
            if (str_zaw == 'left') {
                l1.innerText = '400'
                l2.innerText = ''
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '400'
                p2.innerText = ''
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (height >= 1201 && height <= 1600) {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = ''
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = ''
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (height >= 1601 && height <= 2000) {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = '400'
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = '400'
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (height >= 2001 && height <= 2400) {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = '600'
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = '600'
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (height >= 2401 && height <= 2600) {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = '600'
                l3.innerText = '400'
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = '600'
                p3.innerText = '400'
                p4.innerText = ''
            }
        }
        else if (height >= 2601 && height <= 2800) {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = '600'
                l3.innerText = '600'
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = '600'
                p3.innerText = '600'
                p4.innerText = ''
            }
        }
    }
    else if (spos_open == 'rozw') {
        if (height >= 801 && height <= 1600) {
            if (str_zaw == 'left') {
                l1.innerText = ''
                l2.innerText = 'd-kr'
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw = 'right') {
                p1.innerText = ''
                p2.innerText = 'd-kr'
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (height >= 1601) {
            if (str_zaw == 'left') {
                l1.innerText = ''
                l2.innerText = 'd-kr'
                l3.innerText = 'd-kr'
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = ''
                p2.innerText = 'd-kr'
                p3.innerText = 'd-kr'
                p4.innerText = ''
            }

        }
    }
}

function func_zasuwnica(height, height_klamka, str_zaw) {
    if (height >= 280 && height <= 570 && height_klamka == 140) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
        }
    }
    else if (height >= 511 && height <= 600 && height_klamka == 190) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = ''
            p3.innerText = '262'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = ''
            l3.innerText = '262'
            l4.innerText = ''
        }

    }
    else if (height >= 601 && height <= 800 && height_klamka == 283) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = ''
            p3.innerText = '350'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = ''
            l3.innerText = '350'
            l4.innerText = ''
        }

    }
    else if (height >= 801 && height <= 1000 && height_klamka == 433) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = '550'
            p3.innerText = '283'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = '550'
            l3.innerText = '283'
            l4.innerText = ''
        }
    }
    else if (height >= 1001 && height <= 1200 && height_klamka == 533) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = '700'
            p3.innerText = '388'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = '700'
            l3.innerText = '388'
            l4.innerText = ''
        }
    }
    else if (height >= 1201 && height <= 1400 && height_klamka == 583) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = '700'
            p3.innerText = '388'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = '700'
            l3.innerText = '388'
            l4.innerText = ''
        }
    }
    else if (height >= 1401 && height <= 1600 && height_klamka == 583) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = '1170'
            p2.innerText = '700'
            p3.innerText = '388'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = '1170'
            l2.innerText = '700'
            l3.innerText = '388'
            l4.innerText = ''
        }
    }
    else if (height >= 1601 && height <= 1800 && height_klamka == 583) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = '1370'
            p2.innerText = '700'
            p3.innerText = '388'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = '1370'
            l2.innerText = '700'
            l3.innerText = '388'
            l4.innerText = ''
        }
    }
    else if (height >= 1601 && height <= 1800 && height_klamka == 1020) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = '1370'
            p2.innerText = '1121'
            p3.innerText = '700'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = '1370'
            l2.innerText = '1121'
            l3.innerText = '700'
            l4.innerText = ''
        }
    }
    else if (height >= 1801 && height <= 2000 && height_klamka == 1020) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = '1370'
            p2.innerText = '1121'
            p3.innerText = '700'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = '1370'
            l2.innerText = '1121'
            l3.innerText = '700'
            l4.innerText = ''
        }
    }
    else if (height >= 2001 && height <= 2800 && height_klamka == 1020) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = '1770'
            p2.innerText = '1370'
            p3.innerText = '1121'
            p4.innerText = '700'
        }
        else if (str_zaw == 'right') {
            l1.innerText = '1770'
            l2.innerText = '1370'
            l3.innerText = '1121'
            l4.innerText = '700'
        }
    }
    else {
        alert('uwaga: niestandart-- func zasuwnica')
        delete_all_div()
        standart = ''
        delete_active_button()
        
    }
}
function delete_active_button(){
    if (btn_standart.classList.contains('active')){
        btn_standart.classList.remove('active')
    }
    else if (btn_er1.classList.contains('active')){
        btn_er1.classList.remove('active')
    }
}
function func_gora(widht, spos_open) {
    if (spos_open == 'rozw_uch') {
        if (widht < 801) {
            t2.innerText = ''
            t1.innerText = ''
            t3.innerText = ''
        }
        if (widht >= 801 && widht <= 1000) {
            t2.innerText = 'AX-600'
            t1.innerText = ''
            t3.innerText = ''
        }
        else if (widht >= 1001) {
            t2.innerText = 'AX-750'
            t1.innerText = ''
            t3.innerText = ''
        }
    }
    else if (spos_open == 'rozw') {
        if (widht >= 801 && widht <= 1200) {
            t2.innerText = '400'
            t1.innerText = ''
            t3.innerText = ''
        }
        else if (widht >= 1201 && widht <= 1400) {
            t2.innerText = '600'
            t1.innerText = ''
            t3.innerText = ''
        }
        if (widht >= 1401 && widht <= 1600) {
            t2.innerText = '600 400'
            t1.innerText = ''
            t3.innerText = ''
        }
    }
}
function func_dol(widht) {
    if (widht < 801) {
        bot2.innerText = ''
        bot1.innerText = ''
        bot3.innerText = ''
    }
    else if (widht >= 801 && widht <= 1200) {
        bot2.innerText = '400'
        bot1.innerText = ''
        bot3.innerText = ''
    }
    else if (widht >= 1201 && widht <= 1400) {
        bot2.innerText = '600'
        bot1.innerText = ''
        bot3.innerText = ''
    }
    else if (widht >= 1401 && widht <= 1600) {
        bot2.innerText = '600 400'
        bot1.innerText = ''
        bot3.innerText = ''
    }
}

function res_box_x(widht, height, height_klamka, str_zaw, spos_open) {
    func_zasuwnica(height, height_klamka, str_zaw)
    if (standart == 'ok') {
        func_plecy(spos_open, height, str_zaw)
        func_gora(widht, spos_open)
        func_dol(widht)
    }
}
function res_box_xx(widht, height, str_slupek, spos_open) {
    if (spos_open == 'rozw_uch') {
        xx_plecy(height, str_slupek, spos_open)
        xx_top_rozw_uch(widht, str_slupek)
        xx_slupek_rozw_uch(widht, str_slupek)
        xx_top_bottom_rozw(widht, spos_open)
    }
    
    xx_docisk(height, str_slupek, spos_open)
    if (spos_open == 'rozw'){
        xx_top_bottom_rozw(widht, spos_open)
    }
    

}
function xx_plecy(height, str_slupek, spos_open) {
    if (height < 801) {
        if (str_slupek == 'left') {
            l1.innerText = ''
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_slupek == 'right') {
            p1.innerText = ''
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }

    }
    else if (height >= 801 && height <= 1200) {
        if (str_slupek == 'right') {
            l1.innerText = '400'
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_slupek == 'left') {
            p1.innerText = '400'
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }

    }
    else if (height >= 1201 && height <= 1600) {
        if (str_slupek == 'right') {
            l1.innerText = '600'
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_slupek == 'left') {
            p1.innerText = '600'
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }

    }
    else if (height >= 1601 && height <= 2000) {
        if (str_slupek == 'right') {
            l1.innerText = '600'
            l2.innerText = '400'
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_slupek == 'left') {
            p1.innerText = '600'
            p2.innerText = '400'
            p3.innerText = ''
            p4.innerText = ''
        }

    }
    else if (height >= 2001 && height <= 2400) {
        if (str_slupek == 'right') {
            l1.innerText = '600'
            l2.innerText = '600'
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_slupek == 'left') {
            p1.innerText = '600'
            p2.innerText = '600'
            p3.innerText = ''
            p4.innerText = ''
        }

    }
    else if (height >= 2401 && height <= 2800) {
        if (str_slupek == 'right') {
            l1.innerText = '600'
            l2.innerText = '600'
            l3.innerText = '400'
            l4.innerText = ''
        }
        else if (str_slupek == 'left') {
            p1.innerText = '600'
            p2.innerText = '600'
            p3.innerText = '400'
            p4.innerText = ''
        }

    }
}
function xx_docisk(height, str_slupek, spos_open) {
    if (height < 801) {
        if (spos_open == 'row_uch') {
            if (str_slupek == 'left') {
                l1.innerText = ''
                l2.innerText = ''
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_slupek == 'right') {
                p1.innerText = ''
                p2.innerText = ''
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (spos_open == 'rozw') {
            p1.innerText = ''
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
            l1.innerText = ''
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
        }

    }
    else if (height >= 801 && height < 1601) {
        if (spos_open == 'rozw_uch') {
            if (str_slupek == 'left') {
                l1.innerText = ''
                l2.innerText = 'd-kr'
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_slupek == 'right') {
                p1.innerText = ''
                p2.innerText = 'd-kr'
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (spos_open == 'rozw') {
            p1.innerText = ''
            p2.innerText = 'd-kr'
            p3.innerText = ''
            p4.innerText = ''
            l1.innerText = ''
            l2.innerText = 'd-kr'
            l3.innerText = ''
            l4.innerText = ''
        }

    }
    else if (height >= 1601) {
        if (spos_open == 'rozw_uch') {
            if (str_slupek == 'left') {
                l1.innerText = ''
                l2.innerText = 'd-kr'
                l3.innerText = 'd-kr'
                l4.innerText = ''
            }
            else if (str_slupek == 'right') {
                p1.innerText = ''
                p2.innerText = 'd-kr'
                p3.innerText = 'd-kr'
                p4.innerText = ''
            }
        }
        else if (spos_open == 'rozw') {
            p1.innerText = ''
            p2.innerText = 'd-kr'
            p3.innerText = 'd-kr'
            p4.innerText = ''
            l1.innerText = ''
            l2.innerText = 'd-kr'
            l3.innerText = 'd-kr'
            l4.innerText = ''
        }
    }
}
function xx_top_rozw_uch(widht, str_slupek){
    if (widht < 801){
        if(str_slupek == 'left'){
            t3.innerText = ''
            t2.innerText = ''
        }
        else if(str_slupek == 'right'){
            t1.innerText = ''
            t2.innerText = ''
        }
    } 
    else if(widht >= 801 && widht < 1001){
        if (str_slupek == 'left'){
            t3.innerText = 'AX-600'
            t1.innerText = ''
            t2.innerText = ''
        }
        else if(str_slupek == 'right'){
            t1.innerText = 'AX-600'
            t3.innerText = ''
            t2.innerText = ''
        }
    }
    else if (widht >= 1001){
        if(str_slupek == 'left'){
            t3.innerText = 'AX-750'
            t1.innerText = ''
            t2.innerText = ''
        }
        else if(str_slupek == 'right'){
            t1.innerText = 'AX-750'
            t3.innerText = ''
            t2.innerText = ''
        }
    } 
          
}
function xx_slupek_rozw_uch(widht, str_slupek) {
    if (widht < 801){
        if(str_slupek == 'left'){
            t1.innerText = ''
            t2.innerText = ''
        }
        else if(str_slupek == 'right'){
            t3.innerText = ''
            t2.innerText = ''
        }
    }
    else if(widht >= 801 && widht < 1201){
        if(str_slupek == 'left'){
            t1.innerText = '400'
            t2.innerText = ''
        }
        else if(str_slupek == 'right'){
            t3.innerText = '400'
            t2.innerText = ''
        }
    }
    else if(widht >= 1201 && widht < 1401){
        if(str_slupek == 'left'){
            t1.innerText = '600'
            t2.innerText = ''
        }
        else if(str_slupek == 'right'){
            t3.innerText = '600'
            t2.innerText = ''
        }
    }
    else if(widht >= 1401 && widht < 1601){
        if(str_slupek == 'left'){
            t1.innerText = '600 400'
            t2.innerText = ''
        }
        else if(str_slupek == 'right'){
            t3.innerText = '600 400'
            t2.innerText = ''
        }
    }
    
}
function xx_top_bottom_rozw(widht, spos_open){
    if (widht < 801){
        if (spos_open == 'rozw_uch'){
            bot1.innerText = ''
            bot3.innerText = ''
            bot2.innerText = ''
        }
        else if(spos_open == 'rozw'){
            t1.innerText = ''
            t3.innerText = ''
            bot1.innerText = ''
            bot3.innerText = ''
            bot2.innerText = ''
        }
        
    }
    else if(widht >= 801 && widht < 1201){
        if (spos_open == 'rozw_uch'){
            bot1.innerText = '400'
            bot3.innerText = '400'
            bot2.innerText = ''
        }
        else if(spos_open == 'rozw'){
            t1.innerText = '400'
            t3.innerText = '400'
            bot1.innerText = '400'
            bot3.innerText = '400'
            bot2.innerText = ''
        }
        
    }
    else if(widht >= 1201 && widht < 1401){
        if (spos_open == 'rozw_uch'){
            bot1.innerText = '600'
            bot3.innerText = '600'
            bot2.innerText = ''
        }
        else if(spos_open == 'rozw'){
            t1.innerText = '600'
            t3.innerText = '600'
            bot1.innerText = '600'
            bot3.innerText = '600'
            bot2.innerText = ''
        }
        
    }
    else if(widht >= 1401 && widht < 1601){
        if (spos_open == 'rozw_uch'){
            bot1.innerText = '600 400'
            bot3.innerText = '600 400'
            bot2.innerText = ''
        }
        else if(spos_open == 'rozw'){
            t1.innerText = '600 400'
            t3.innerText = '600 400'
            bot1.innerText = '600 400'
            bot3.innerText = '600 400'
            bot2.innerText = ''
        }
        
    }
}