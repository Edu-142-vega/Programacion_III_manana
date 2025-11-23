const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorTickets');
let tickets = [];
formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const cliente = document.getElementById('direccion').value.trim();
  const problema = document.getElementById('descripcion').value.trim();
  const prioridad = parseFloat(document.getElementById('precio').value.trim());

  if (cliente && problema && !isNaN(prioridad)) {
    const nuevoTicket = { 
      id: Date.now(), 
      cliente, 
      problema, 
      prioridad 
    };
    tickets.push(nuevoTicket);
    renderizarTicket(nuevoTicket);
    formulario.reset();
  }
});
function renderizarTicket({ id, cliente, problema, prioridad }) {
  const div = document.createElement('div');
  div.className = 'ticket';
  div.setAttribute('data-id', id);
  div.innerHTML = `
    <h3>Cliente: ${cliente}</h3>
    <p>Problema: ${problema}</p>
    <p><strong>Prioridad: ${prioridad}</strong></p>
    <div class="acciones"><button class="eliminar">Eliminar</button></div>
  `;
  contenedor.appendChild(div);
}
contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {

    const tarjeta = e.target.closest('.ticket');
    const id = parseInt(tarjeta.getAttribute('data-id'));

    tickets = tickets.filter(t => t.id !== id);
    tarjeta.remove();
  }
});

