function res_box_x_er2(widht, height, h_kl, str_zaw, count_skr) {
    res_box_zasuwnica_er2(height, h_kl, str_zaw)
    res_box_gora_er2(widht, count_skr)
    res_box_dol_er2(widht, count_skr)
    btn_er2.style.backgroundColor = 'red'
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
}







function res_box_gora_er2(widht, count_skr) {
    console.log('okuwamy gora er2')
    // if (widht < 89){
    //     if ( count_skr == '1'){
    //         p1.innerText = ''
    //         p2.innerText = 'AX-600'
    //         p3.innerText = ''
    //     }
    //     else if (count_skr == '2'){
    //         p1.innerText = 'AX-600'
    //         p2.innerText = ''
    //         p3.innerText = 'AX-600'
    //     }
    // }
}
function res_box_dol_er2(widht, count_skr) {
    if (widht < 78) {
        if (count_skr == '1') {
            bot1.innerText = ''
            bot2.innerText = '200'
            bot2.innerText = ''
        }
        else if (count_skr == '2') {
            bot1.innerText = '200'
            bot2.innerText = ''
            bot2.innerText = '200'
        }
    }
}





function res_box_xx_er2(widht, height, str_slupek, spos_open) {

}