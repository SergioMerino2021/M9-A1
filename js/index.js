var fecha = new Date();
var dia = fecha.getDay();
id='d'+dia;
var node = document.getElementById(id).textContent;
document.getElementById('horario').textContent;

if(dia != 1){
    document.getElementById('horario').textContent = 'HORARIO (Abierto)';
}else{
    document.getElementById('horario').textContent = 'HORARIO (Cerrado)';
}

text = node+' <--'

document.getElementById(id).textContent=text
