document.addEventListener('DOMContentLoaded', () => {
    // Inicializar las tres capas de la arquitectura MVC
    const model = new HoroscopeModel();
    const view = new HoroscopeView();
    const controller = new HoroscopeController(model, view);
});