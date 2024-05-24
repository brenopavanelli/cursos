function clickMenu() {
    let img = document.querySelector('#menu')
    if(itens.style.display == 'block') {
        itens.style.display = 'none'
        menu.src = 'imgs/menu_white_36dp.svg'
    } else {
        itens.style.display = 'block'
        menu.src = 'imgs/close_white_36dp.svg'
    }
}