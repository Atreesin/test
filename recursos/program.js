import * as informacion from 'https://github.com/Atreesin/test/blob/main/recursos/informacion.json' assert {type: 'json'};

const info = informacion.persona[0].foto_perfil.large
document.getElementById("foto_perfil").setAttribute('src', '/recursos/'+info);

