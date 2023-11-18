function res_box_x_er2(widht, height, h_kl, str_zaw, count_skr) {
    res_box_zasuwnica_er2(height, h_kl, str_zaw)
    if (standart == 'ok') {
        res_box_gora_er2(widht, count_skr)
        res_box_dol_er2(widht, count_skr)
        res_box_plecy_er2(height, count_skr, str_zaw)
        btn_er2.style.backgroundColor = 'red'
    }

}
function res_box_zasuwnica_er2(height, height_klamka, str_zaw) {
    if (height < 601) {
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
    else if (height >= 601 && height < 801 && h_kl == 283) {
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
    else if (height >= 801 && height < 1001 && h_kl == 433) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = '550'
            p3.innerText = '288'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = '550'
            l3.innerText = '288'
            l4.innerText = ''
        }
    }
    else if (height >= 1001 && height < 1201 && h_kl == 533) {
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
    else if (height >= 1201 && height < 1401 && h_kl == 583) {
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
    else if (height >= 1401 && height < 1601 && h_kl == 583) {
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
    else if (height >= 1601 && height < 1801 && h_kl == 583) {
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
    else if (height >= 1601 && height < 1801 && h_kl == 1020) {
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
    else if (height >= 1801 && height < 2001 && h_kl == 1020) {
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
    else if (height >= 2001 && height < 2601 && h_kl == 1020) {
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
        alert('uwaga: niestandart!!! -- er2')
        standart = ''
        delete_all_div()
    }
}
function res_box_plecy_er2(height, count_skr, str_zaw) {
    if (height < 490) {
        if (count_skr == '1') {
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
        else if (count_skr == '2') {
            l1.innerText = ''
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
            p1.innerText = ''
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 490 && height < 801) {
        if (count_skr == '1') {
            if (str_zaw == 'left') {
                l1.innerText = '200'
                l2.innerText = ''
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '200'
                p2.innerText = ''
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (count_skr == '2') {
            l1.innerText = '200'
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
            p1.innerText = '200'
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height <= 801 && height > 1001) {
        if (count_skr == '1') {
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
        else if (count_skr == '2') {
            l1.innerText = '400'
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
            p1.innerText = '400'
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 1001 && height < 1201) {
        if (count_skr == '1') {
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
        else if (count_skr == '2') {
            l1.innerText = '600'
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
            p1.innerText = '600'
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 1201 && height < 1401) {
        if (count_skr == '1') {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = '200'
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = '200'
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (count_skr == '2') {
            l1.innerText = '600'
            l2.innerText = '200'
            l3.innerText = ''
            l4.innerText = ''
            p1.innerText = '600'
            p2.innerText = '200'
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 1401 && height < 1601) {
        if (count_skr == '1') {
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
        else if (count_skr == '2') {
            l1.innerText = '600'
            l2.innerText = '400'
            l3.innerText = ''
            l4.innerText = ''
            p1.innerText = '600'
            p2.innerText = '400'
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 1601 && height < 1801) {
        if (count_skr == '1') {
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
        else if (count_skr == '2') {
            l1.innerText = '600'
            l2.innerText = '600'
            l3.innerText = ''
            l4.innerText = ''
            p1.innerText = '600'
            p2.innerText = '600'
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 1801 && height < 2001) {
        if (count_skr == '1') {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = '600'
                l3.innerText = '200'
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = '600'
                p3.innerText = '200'
                p4.innerText = ''
            }
        }
        else if (count_skr == '2') {
            l1.innerText = '600'
            l2.innerText = '600'
            l3.innerText = '200'
            l4.innerText = ''
            p1.innerText = '600'
            p2.innerText = '600'
            p3.innerText = '200'
            p4.innerText = ''
        }
    }
    else if (height >= 2001 && height < 2201) {
        if (count_skr == '1') {
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
        else if (count_skr == '2') {
            l1.innerText = '600'
            l2.innerText = '600'
            l3.innerText = '400'
            l4.innerText = ''
            p1.innerText = '600'
            p2.innerText = '600'
            p3.innerText = '400'
            p4.innerText = ''
        }
    }
    else if (height >= 2201 && height < 2401) {
        if (count_skr == '1') {
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
        else if (count_skr == '2') {
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
    else if (height >= 2401 && height < 2601) {
        if (count_skr == '1') {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = '600'
                l3.innerText = '600'
                l4.innerText = '200'
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = '600'
                p3.innerText = '600'
                p4.innerText = '200'
            }
        }
        else if (count_skr == '2') {
            l1.innerText = '600'
            l2.innerText = '600'
            l3.innerText = '600'
            l4.innerText = '200'
            p1.innerText = '600'
            p2.innerText = '600'
            p3.innerText = '600'
            p4.innerText = '200'
        }
    }
}




function res_box_gora_er2(widht, count_skr) {

    if (widht < 801) {
        if (count_skr == '1') {
            t1.innerText = ''
            t2.innerText = ''
            t3.innerText = ''
        }
        else if (count_skr == '2') {
            t1.innerText = ''
            t2.innerText = ''
            t3.innerText = ''
        }
    }
    else if (widht >= 801 && widht < 1601) {
        if (count_skr == '1') {
            t1.innerText = ''
            t2.innerText = 'AX-600'
            t3.innerText = ''
        }
        else if (count_skr == '2') {
            t1.innerText = 'AX-600'
            t2.innerText = ''
            t3.innerText = 'AX-600'
        }
    }
}
function res_box_dol_er2(widht, count_skr) {
    if (widht < 490) {
        if (count_skr == '1') {
            bot1.innerText = ''
            bot2.innerText = ''
            bot3.innerText = ''
        }
        else if (count_skr == '2') {
            bot1.innerText = ''
            bot2.innerText = ''
            bot3.innerText = ''
        }
    }
    else if (widht >= 490 && widht < 691) {
        if (count_skr == '1') {
            bot1.innerText = ''
            bot2.innerText = '200'
            bot3.innerText = ''
        }
        else if (count_skr == '2') {
            bot1.innerText = '200'
            bot2.innerText = ''
            bot3.innerText = '200'
        }
    }
    else if (widht >= 691 && widht < 891) {
        if (count_skr == '1') {
            bot1.innerText = ''
            bot2.innerText = '400'
            bot3.innerText = ''
        }
        else if (count_skr == '2') {
            bot1.innerText = '400'
            bot2.innerText = ''
            bot3.innerText = '400'
        }
    }
    else if (widht >= 891 && widht < 1091) {
        if (count_skr == '1') {
            bot1.innerText = ''
            bot2.innerText = '600'
            bot3.innerText = ''
        }
        else if (count_skr == '2') {
            bot1.innerText = '600'
            bot2.innerText = ''
            bot3.innerText = '600'
        }
    }
    else if (widht >= 1091 && widht < 1291) {
        if (count_skr == '1') {
            bot1.innerText = ''
            bot2.innerText = '600 200'
            bot3.innerText = ''
        }
        else if (count_skr == '2') {
            bot1.innerText = '600 200'
            bot2.innerText = ''
            bot3.innerText = '600 200'
        }
    }
    else if (widht >= 1291 && widht < 1601) {
        if (count_skr == '1') {
            bot1.innerText = ''
            bot2.innerText = '600 400'
            bot3.innerText = ''
        }
        else if (count_skr == '2') {
            bot1.innerText = '600 400'
            bot2.innerText = ''
            bot3.innerText = '600 400'
        }
    }
}





function res_box_xx_er2(widht, height, str_slupek, spos_open, str_zaw) {
    res_box_gora_er2(widht, count_skr)
    res_box_plecy_er2(height, count_skr, str_zaw)
    res_box_dol_er2(widht, count_skr)
    btn_er2.style.backgroundColor = 'red'
}