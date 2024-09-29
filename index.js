//crear algoritimo que  devolve el precio del producto + impuestos

function precioCompleto(precio, impuesto) {
    const precioConCargo = precio + (precio * 0.15); // Agregar 15% de cargo
    return precioConCargo + (precioConCargo * impuesto); // Aplicar impuesto
}

// Pedir al usuario que ingrese el precio
let precioUsuario = parseFloat(prompt("Ingresa el precio:"));
let resultado = precioCompleto(precioUsuario, 0.15); // Aplicar 15% de impuesto
console.log(`El precio total es: ${resultado.toFixed(2)}`);
