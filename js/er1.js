

function func_plecy_er1(height, str_zaw) {
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
    else if (height >= 801 && height < 1201) {
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
    else if (height >= 1201 && height < 1601) {
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
    else if (height >= 1601 && height < 2001) {
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
    else if (height >= 2001 && height < 2401) {
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
    else if (height >= 2401 && height < 2601) {
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
    else if (height >= 2601 && height < 2800) {
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
function func_dol_er1(widht, count_skr) {
    if (count_skr == '1') {
        if (widht < 400) {
            bot1.innerText = ''
            bot2.innerText = ''
            bot3.innerText = ''
        }
        else if (widht >= 400 && widht < 601) {
            bot1.innerText = ''
            bot2.innerText = '200'
            bot3.innerText = ''
        }
        else if (widht >= 601 && widht < 801) {
            bot1.innerText = ''
            bot2.innerText = '400'
            bot3.innerText = ''
        }
        else if (widht >= 801 && widht < 1001) {
            bot1.innerText = ''
            bot2.innerText = '600'
            bot3.innerText = ''
        }
        else if (widht >= 1001 && widht < 1201) {
            bot1.innerText = ''
            bot2.innerText = '600 200'
            bot3.innerText = ''
        }
        else if (widht >= 1201 && widht < 1601) {
            bot1.innerText = ''
            bot2.innerText = '600 400'
            bot3.innerText = ''
        }
    }
    else if (count_skr == '2') {
        if (widht < 400) {
            bot1.innerText = ''
            bot2.innerText = ''
            bot3.innerText = ''
        }
        else if (widht >= 400 && widht < 601) {
            bot1.innerText = '200'
            bot2.innerText = ''
            bot3.innerText = '200'
        }
        else if (widht >= 601 && widht < 801) {
            bot1.innerText = '400'
            bot2.innerText = ''
            bot3.innerText = '400'
        }
        else if (widht >= 801 && widht < 1001) {
            bot1.innerText = '600'
            bot2.innerText = ''
            bot3.innerText = '600'
        }
        else if (widht >= 1001 && widht < 1201) {
            bot1.innerText = '600 200'
            bot2.innerText = ''
            bot3.innerText = '600 200'
        }
        else if (widht >= 1201 && widht < 1601) {
            bot1.innerText = '600 400'
            bot2.innerText = ''
            bot3.innerText = '600 400'
        }
    }
}
function func_gora_er1(widht, spos_open, count_skr) {
    if (spos_open == 'rozw_uch') {
        func_gora(widht, spos_open)
    }
    else if (spos_open == 'rozw') {
        func_gora_er1_rozw(widht, count_skr)
    }
}
function func_gora_er1_rozw(widht) {
    if (count_skr == '1') {
        if (widht < 801) {
            t1.innerText = ''
            t2.innerText = ''
            t3.innerText = ''
        }
        else if (widht >= 801 && widht < 1001) {
            t1.innerText = ''
            t2.innerText = 'AX-600'
            t3.innerText = ''
        }
        else if (widht >= 1001) {
            t1.innerText = ''
            t2.innerText = 'AX-750'
            t3.innerText = ''
        }
    }
    else if(count_skr == '2'){
        if (widht < 801) {
            t1.innerText = ''
            t2.innerText = ''
            t3.innerText = ''
        }
        else if (widht >= 801 && widht < 1001) {
            t1.innerText = 'AX-600'
            t2.innerText = ''
            t3.innerText = 'AX-600'
        }
        else if (widht >= 1001) {
            t1.innerText = 'AX-750'
            t2.innerText = ''
            t3.innerText = 'AX-750'
        }
    }
}
function res_box_xx_er1(widht, height, str_slupek, spos_open, count_skr) {
    res_box_left_right_er1(height)
    func_dol_er1(widht, count_skr)
    func_gora_er1_rozw(widht, count_skr)
}
function res_box_left_right_er1(height) {
    if (height < 801) {
        l1.innerText = ''
        l2.innerText = ''
        l3.innerText = ''
        l4.innerText = ''
        p1.innerText = ''
        p2.innerText = ''
        p3.innerText = ''
        p4.innerText = ''
    }
    else if (height >= 801 && height < 1201) {
        l1.innerText = '400'
        l2.innerText = ''
        l3.innerText = ''
        l4.innerText = ''
        p1.innerText = '400'
        p2.innerText = ''
        p3.innerText = ''
        p4.innerText = ''
    }
    else if (height >= 1201 && height < 1601) {
        l1.innerText = '600'
        l2.innerText = ''
        l3.innerText = ''
        l4.innerText = ''
        p1.innerText = '600'
        p2.innerText = ''
        p3.innerText = ''
        p4.innerText = ''
    }
    else if (height >= 1601 && height < 2001) {
        l1.innerText = '600'
        l2.innerText = '400'
        l3.innerText = ''
        l4.innerText = ''
        p1.innerText = '600'
        p2.innerText = '400'
        p3.innerText = ''
        p4.innerText = ''
    }
    else if (height >= 2001 && height < 2401) {
        l1.innerText = '600'
        l2.innerText = '600'
        l3.innerText = ''
        l4.innerText = ''
        p1.innerText = '600'
        p2.innerText = '600'
        p3.innerText = ''
        p4.innerText = ''
    }
    else if (height >= 2401 && height < 2601) {
        l1.innerText = '600'
        l2.innerText = '600'
        l3.innerText = '400'
        l4.innerText = ''
        p1.innerText = '600'
        p2.innerText = '600'
        p3.innerText = '400'
        p4.innerText = ''
    }
    else if (height >= 2601 && height < 2801) {
        l1.innerText = '600'
        l2.innerText = '600'
        l3.innerText = '600'
        l4.innerText = ''
        p1.innerText = '600'
        p2.innerText = '600'
        p3.innerText = '600'
        p4.innerText = ''
    }
}