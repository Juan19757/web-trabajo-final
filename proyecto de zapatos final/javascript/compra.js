function confirmReservation() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;


    const confirmationMessage = document.getElementById('confirmationMessage');
    const confirmationDetails = document.getElementById('confirmationDetails');

    confirmationDetails.innerHTML = `
        Nombre: ${name}<br>
        Correo Electrónico: ${email}<br>
        Teléfono: ${phone}<br>
        Fecha de Entrada: ${direccion}<br>
        Hora de Entrada: ${name}<br>
        Número de Personas: ${guests}
    `;

    confirmationMessage.style.display = 'block';
}