function generarUsuario(nombre, apellidoPaterno, apellidoMaterno="", dominio) {

    nombre = nombre.trim();
    apellidoPaterno = apellidoPaterno.trim();
    apellidoMaterno = apellidoMaterno.trim();
    
    nombre = quitarAcentosYCaracteresEspeciales(nombre);
    apellidoPaterno = quitarAcentosYCaracteresEspeciales(apellidoPaterno);
    apellidoMaterno = quitarAcentosYCaracteresEspeciales(apellidoMaterno);

    // Para apellidos compuestos se quitan los espacios en blanco, por ejemplo: de la rosa ->delarosa; de los santos -> delossantos
    apellidoPaterno = apellidoPaterno.replace(/ /g, '');
    apellidoMaterno = apellidoMaterno.replace(/ /g, '');

    let usuarios = [];

    if(continuaProceso(nombre, apellidoPaterno)){
        usuarios.push(primerForma(nombre, apellidoPaterno));
        usuarios.push(tercerForma(nombre, apellidoPaterno));
        usuarios.push(quintaForma(nombre, apellidoPaterno));
        usuarios.push(octavaForma(nombre, apellidoPaterno));
        if(apellidoMaterno.length > 0 ){
            usuarios.push(segundaForma(nombre, apellidoMaterno));
            usuarios.push(cuartaForma(nombre, apellidoMaterno));
            usuarios.push(sextaForma(nombre, apellidoMaterno));
            usuarios.push(septimaForma(nombre, apellidoPaterno, apellidoMaterno));
            usuarios.push(novenaForma(nombre, apellidoMaterno));
        }
        
        usuarios = usuarios.filter(usuario => usuario != undefined);
        return usuarios.join(dominio + '\n');
    }
}

function continuaProceso(nombre, apellidoPaterno){
    if(nombre.length >= 1 && apellidoPaterno.length >= 1){
        return true;
    }
}

function quitarAcentosYCaracteresEspeciales(texto) {
    const mapaAcentos = ['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú', 'ñ', 'Ñ'];
    const mapaSinAcentos = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', 'n', 'N'];

    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        const indice = mapaAcentos.indexOf(texto[i]);
        if (indice !== -1) {
            resultado += mapaSinAcentos[indice];
        } else {
            resultado += texto[i];
        }
    }
    return resultado.toLocaleLowerCase();
}

// Formas de generar el usuario
// Primer forma: primera letra del nombre + apellido paterno completo.
// Ejemplo: Juan Fabian Antonio Perez -> jperez
function primerForma(nombre, apellidoPaterno){
    let usuario = nombre[0] + apellidoPaterno;
    return usuario;
}

// Seguda forma: primera letra del nombre + apellido materno completo.
// Ejemplo: Juan Fabian Antonio Perez Lopez -> jlopez
function segundaForma(nombre, apellidoMaterno){
    let usuario = nombre[0] + apellidoMaterno;
    return usuario;
}

// Tercer forma: si son dos nombres, se toma la primer letra del segundo nombre  y apellido paterno completo.
// Ejemplo: Juan Fabian Antonio Perez -> fperez
function tercerForma(nombre, apellidoPaterno){
    let cadenaNombres = nombre.split(" ");
    if(cadenaNombres.length > 1){
        let usuario = cadenaNombres[1][0] + apellidoPaterno;
        return usuario;
    }
    else{
        return undefined;
    }
}

// Cuarta forma: si son dos nombres, se toma la primer letra del segundo nombre  y apellido materno completo.
// Ejemplo: Juan Fabian Antonio Perez Lopez -> flopez
function cuartaForma(nombre, apellidoMaterno){
    let cadenaNombres = nombre.split(" ");
    if(cadenaNombres.length > 1){
        let usuario = cadenaNombres[1][0] + apellidoMaterno;
        return usuario;
    }
}

// Quinta forma: primeras dos letras del nombre + "." + apellido paterno completo.
// Ejemplo: Juan Fabian Antonio Perez -> ju.perez
function quintaForma(nombre, apellidoPaterno){
    let usuario = nombre.substring(0,2) + "." + apellidoPaterno;
    return usuario;
};

// Quinta forma: primeras dos letras del nombre + "." + apellido materno completo.
// Ejemplo: Juan Fabian Antonio Perez Lopez -> ju.lopez
function sextaForma(nombre, apellidoMaterno){
    let usuario = nombre.substring(0,2) + "." + apellidoMaterno;
    return usuario;
};

// Septima forma: Solo las iniciales tanto de nombre y apellidos.
// Ejemplo: Juan Fabian Antonio Perez Lopez -> jfpl
// Ejemplo 2: Miguel Rocha Muñoz -mrm
function septimaForma(nombre, apellidoPaterno, apellidoMaterno){
    let nombres = nombre.split(" ");
    let usuario = "";
    if(nombres.length > 1){
        usuario = nombres[0][0] + nombres[1][0] + apellidoPaterno[0] + apellidoMaterno[0];
    }else
    {
        usuario = nombre[0] + apellidoPaterno[0] + apellidoMaterno[0];
    }
    return usuario;
}

// Octava forma: nombre completo + "." + apellido paterno completo.
// Ejemplo: Juan Fabian Antonio Perez -> juan.antonio
function octavaForma(nombre, apellidoPaterno){
    let nombres = nombre.split(" ");
    let usuario = nombres[0] + "." + apellidoPaterno;
    return usuario;
}

// Novena forma: nombre completo + "." + apellido materno completo.
// Ejemplo: Juan Fabian Antonio Perez Lopez -> juan.perez
function novenaForma(nombre, apellidoMaterno){
    let nombres = nombre.split(" ");
    if(nombres.length > 1){
        let usuario = nombres[1] + "." + apellidoMaterno;
        return usuario;
    }
    else{
        return undefined;
    }
    
}