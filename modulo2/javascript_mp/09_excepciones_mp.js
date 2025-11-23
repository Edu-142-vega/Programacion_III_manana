try {
    console.log("Intentando acceder a un ticket inexistente");
    console.log(ticketNoDeclarado);
} catch (error) {
    console.log("Mensaje de error:", error.message);
}

try {
    console.log("Intentando cargar información del ticket...");
    throw new Error("Ticket no disponible");
} catch (error) {
    console.log("Mensaje de error:", error.message);
} finally {
    console.log("Finalizando intento de cargar ticket");
}
