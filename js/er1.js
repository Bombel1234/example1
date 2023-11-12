

function func_plecy_er1(height, str_zaw){
    if (height < 801){
        if (str_zaw == 'left'){
            l1.innerText = ''
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_zaw == 'right'){
            p1.innerText = ''
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 801 && height < 1201){
        if (str_zaw == 'left'){
            l1.innerText = '400'
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_zaw == 'right'){
            p1.innerText = '400'
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 1201 && height < 1601){
        if (str_zaw == 'left'){
            l1.innerText = '600'
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_zaw == 'right'){
            p1.innerText = '600'
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 1601 && height < 2001){
        if (str_zaw == 'left'){
            l1.innerText = '600'
            l2.innerText = '400'
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_zaw == 'right'){
            p1.innerText = '600'
            p2.innerText = '400'
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 2001 && height < 2401){
        if (str_zaw == 'left'){
            l1.innerText = '600'
            l2.innerText = '600'
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_zaw == 'right'){
            p1.innerText = '600'
            p2.innerText = '600'
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 2401 && height < 2601){
        if (str_zaw == 'left'){
            l1.innerText = '600'
            l2.innerText = '600'
            l3.innerText = '400'
            l4.innerText = ''
        }
        else if (str_zaw == 'right'){
            p1.innerText = '600'
            p2.innerText = '600'
            p3.innerText = '400'
            p4.innerText = ''
        }
    }
    else if (height >= 2601 && height < 2800){
        if (str_zaw == 'left'){
            l1.innerText = '600'
            l2.innerText = '600'
            l3.innerText = '600'
            l4.innerText = ''
        }
        else if (str_zaw == 'right'){
            p1.innerText = '600'
            p2.innerText = '600'
            p3.innerText = '600'
            p4.innerText = ''
        }
    }
}