class HoroscopeController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        
        // Conectar eventos de la vista con métodos del controlador
        this.view.bindConsultHoroscope(this.handleConsultHoroscope.bind(this));
    }
    
    // Maneja la consulta del horóscopo
    handleConsultHoroscope(birthdate) {
        try {
            // Validar formato de fecha
            if (!this.model.validateDateFormat(birthdate)) {
                this.view.showError('El formato de fecha debe ser DD-MM-AAAA');
                return;
            }
            
            // Obtener el horóscopo
            const horoscopeData = this.model.getHoroscopeByBirthdate(birthdate);
            
            // Mostrar el resultado en la vista
            this.view.showHoroscope(horoscopeData);
            
        } catch (error) {
            this.view.showError(error.message);
        }
    }
}