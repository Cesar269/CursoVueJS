const select = document.querySelector('#sel')
const listaDias = document.getElementById('grid')
window.onload = () => {
    mostrarMes('enero');
    select.onchange = (e) => {
        let nombreMes = '';
        nombreMes = select.options[select.selectedIndex].value;
        mostrarMes(nombreMes);
    }
}




const mostrarMes = (mes) => {
    let diasMes = 31;
    let numerosdias = [];
    if (mes === 'abril' || mes === 'junio' || mes === 'septiembre' || mes === 'noviembre') {
        diasMes -= 1;
    }
    else if (mes === 'febrero') {
        diasMes = 28;

    }
    for (let i = 0; i <= diasMes; i++) {
        numerosdias.push('<li>' + i + '</li>');
    }
    listaDias.innerHTML = numerosdias.join('')
}

