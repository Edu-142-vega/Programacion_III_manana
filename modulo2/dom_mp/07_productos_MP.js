const productos = [
  { nombre: "Ticket #101", descripcion: "Laptop no enciende", precio: "Alta", existencia: "Pendiente", ubicacion: "Técnico: Carlos" },
  { nombre: "Ticket #102", descripcion: "Falla en disco SSD", precio: "Media", existencia: "En proceso", ubicacion: "Técnico: Ana" },
  { nombre: "Ticket #103", descripcion: "Error de sistema", precio: "Baja", existencia: "Pendiente", ubicacion: "Técnico: Luis" },
  { nombre: "Ticket #104", descripcion: "Pantalla con líneas", precio: "Alta", existencia: "En proceso", ubicacion: "Técnico: Pedro" },
  { nombre: "Ticket #105", descripcion: "Conexión WiFi inestable", precio: "Media", existencia: "Cerrado", ubicacion: "Técnico: Marcos" },
  { nombre: "Ticket #106", descripcion: "Sobrecalentamiento", precio: "Alta", existencia: "Pendiente", ubicacion: "Técnico: Sofía" },
  { nombre: "Ticket #107", descripcion: "Teclado no responde", precio: "Baja", existencia: "Cerrado", ubicacion: "Técnico: Daniel" },
  { nombre: "Ticket #108", descripcion: "Problema con drivers", precio: "Media", existencia: "En proceso", ubicacion: "Técnico: Andrés" },
  { nombre: "Ticket #109", descripcion: "Ventilador ruidoso", precio: "Baja", existencia: "Pendiente", ubicacion: "Técnico: Laura" },
  { nombre: "Ticket #110", descripcion: "Tarjeta RAM dañada", precio: "Alta", existencia: "En proceso", ubicacion: "Técnico: Kevin" }
];

const tabla = document.getElementById('cuerpoTabla');
productos.forEach(p => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${p.nombre}</td>
    <td>${p.descripcion}</td>
    <td>${p.precio}</td>
    <td>${p.existencia}</td>
    <td>${p.ubicacion}</td>
  `;
  tabla.appendChild(fila);
});
