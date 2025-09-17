# Genera-Nombre-Usuario
crea el usuario de una persona, usando sus nombres y apellidos

## 🚀 Uso
Esta función recibe el nombre, apellidos y el dominio de la empresa como parámetros, para
crear las posibles cuentas de empleado.

Depende del usuario final decidir que opción usar, ya que tiene que validar
entre sus registros y no duplicar usuario.

## 🔍 ¿Cómo se generan los nombres?

Este generador no produce combinaciones infinitas ni aleatorias. 
Está compuesto por funciones específicas que aplican ciertas reglas para construir variantes de nombres de usuario:
	como la primer letra del nombre y el apellido paterno completo.

Funcionamiento y reglas:
- Tomar la primer letra del nombre y el apellido paterno completo como `Juan Perez` -> `jperez@empresa.com`
- Se quitan caracteres especiales como acentos y la ñ. `Martín Zuñiga` -> `mzuniga@empresa.com`
- El usuario se regresa con minúscula. `OSCAR Romero` -> `oromero@empresa.com`
- Los apellidos compuestos se juntan `Karen Elizabeth De Los Santos Mendoza` -> `Karen Elizabeth DeLosSantos Mendoza` -> `kdelossantos@empresa.com`

Ejemplo completo:
Llamada a la función

`generarUsuario("Luis Ricardo", "Marroquin", "Zepeda", "@empresa.com");`

resultados generados.
	lmarroquin@empresa.com
	rmarroquin@empresa.com
	lu.marroquin@empresa.com
	luis.marroquin@empresa.com
	lzepeda@empresa.com
	rzepeda@empresa.com
	lu.zepeda@empresa.com
	lrmz@empresa.com
	ricardo.zepeda@empresa.com

## Combinaciones posibles

Si se envían todos los parámetros (nombre(s), apellido paterno y materno), más resultados brinda.

1 - primer letra del primer nombre y apellido paterno.
2 - primer letra del segundo nombre y apellido paterno.
3 - primeras dos letras + "." + apellido paterno.
4 - primer nombre + "." + apellido paterno.
5 - primer letra del primer nombre y apellido materno.
6 - primer letra del segundo nombre y apellido materno.
7 - las iniciales.
8 - segundo nombre + "." + apellido materno.

## Notas

Entre más completo este el nombre más opciones entrega.
Si el parámetro nombre o apellido paterno están vacíos no entrega nada.
Por ahora solo los apellidos compuestos se juntan.
Si el apellido materno no se envía, simplemente no hace esas combinaciones y entrega las posibles 
con el nombre y apellido paterno.
