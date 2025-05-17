class HoroscopeView {
    constructor() {
        this.birthdateInput = document.getElementById('birthdate');
        this.consultButton = document.getElementById('consultButton');
        this.horoscopeResult = document.getElementById('horoscopeResult');
        this.horoscopeText = document.getElementById('horoscopeText');
        
        // Inicializa los listeners internos de la vista
        this._initListeners();
    }
    
    // Inicializa los listeners para interacciones dentro de la vista
    _initListeners() {
        // Validar formato de fecha mientras escribe
        this.birthdateInput.addEventListener('input', () => {
            // Limitar entrada a formato DD-MM-AAAA
            let value = this.birthdateInput.value;
            
            // Si la longitud es 2 o 5, añadir automáticamente el guión
            if (value.length === 2 || value.length === 5) {
                this.birthdateInput.value = value + '-';
            }
            
            // Validar si el formato es correcto para habilitar/deshabilitar el botón
            this._validateAndToggleButton();
        });
    }
    
    // Validar el formato de la fecha y habilitar/deshabilitar el botón
    _validateAndToggleButton() {
        const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
        const isValid = regex.test(this.birthdateInput.value);
        this.consultButton.disabled = !isValid;
    }
    
    // Registrar el evento de clic en el botón consultar
    bindConsultHoroscope(handler) {
        this.consultButton.addEventListener('click', () => {
            const birthdate = this.birthdateInput.value;
            handler(birthdate);
        });
    }
    
    // Mostrar el horóscopo en la pantalla
    showHoroscope(horoscopeData) {
        // Crear mensaje de horóscopo con emoji
        const horoscopeMessage = `
            <h2>${horoscopeData.sign} ${horoscopeData.emoji}</h2>
            <p>${horoscopeData.text}</p>
        `;
        
        // Actualizar el contenido
        this.horoscopeText.innerHTML = horoscopeMessage;
        
        // Mostrar el contenedor
        this.horoscopeResult.classList.remove('hidden');
        this.horoscopeResult.classList.remove('fade-out');
        
        // Deshabilitar el botón durante 15 segundos
        this.consultButton.disabled = true;
        
        // Temporizador para iniciar el fade-out después de 15 segundos
        setTimeout(() => {
            this.horoscopeResult.classList.add('fade-out');
            
            // Esperar a que termine la animación para ocultar
            setTimeout(() => {
                this.horoscopeResult.classList.add('hidden');
                this.consultButton.disabled = false;
            }, 500); // 500ms para la animación de fade out
            
        }, 15000); // 15 segundos
    }
    
    // Mostrar mensaje de error
    showError(message) {
        this.horoscopeText.innerHTML = `<div class="error">${message}</div>`;
        this.horoscopeResult.classList.remove('hidden');
        
        // Ocultar después de 3 segundos
        setTimeout(() => {
            this.horoscopeResult.classList.add('hidden');
        }, 3000);
    }
}