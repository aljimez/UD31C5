//expresión regular para el formato de la fecha
const fechaRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
//Expresión regular para el formato del email
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

const dangRegex = /[<].*?>/;
function escapeHTML(text) {
    var replacements = [[ /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/],[/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/]];
 forEach(replacements, function(replace){
 text = text.replace(replacements[0],replacements[1]);
 });
 return text;
}
//Cambiar orden de string
const texto = 'Hola mundo';
const textoInverso = texto.split('').reverse().join('');
console.log(textoInverso);



