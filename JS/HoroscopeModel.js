class HoroscopeModel {
    constructor() {
        this.zodiacSigns = [
            { name: 'Acuario', startDate: '20-01', endDate: '18-02', emoji: '♒' },
            { name: 'Piscis', startDate: '19-02', endDate: '20-03', emoji: '♓' },
            { name: 'Aries', startDate: '21-03', endDate: '19-04', emoji: '♈' },
            { name: 'Tauro', startDate: '20-04', endDate: '20-05', emoji: '♉' },
            { name: 'Géminis', startDate: '21-05', endDate: '20-06', emoji: '♊' },
            { name: 'Cáncer', startDate: '21-06', endDate: '22-07', emoji: '♋' },
            { name: 'Leo', startDate: '23-07', endDate: '22-08', emoji: '♌' },
            { name: 'Virgo', startDate: '23-08', endDate: '22-09', emoji: '♍' },
            { name: 'Libra', startDate: '23-09', endDate: '22-10', emoji: '♎' },
            { name: 'Escorpio', startDate: '23-10', endDate: '21-11', emoji: '♏' },
            { name: 'Sagitario', startDate: '22-11', endDate: '21-12', emoji: '♐' },
            { name: 'Capricornio', startDate: '22-12', endDate: '19-01', emoji: '♑' }
        ];
        
        this.horoscopeTexts = {
            'Acuario': [
                'Tu creatividad está en su mejor momento. Aprovecha para iniciar ese proyecto que has estado posponiendo.',
                'Las estrellas indican que es momento de tomar decisiones importantes. Confía en tu intuición.',
                'Hoy es un día excelente para conectar con amigos de ideas similares. Podrían surgir colaboraciones interesantes.'
            ],
            'Piscis': [
                'Tu sensibilidad natural te ayudará a resolver un conflicto cercano. Confía en tu empatía.',
                'Momento ideal para la introspección y el crecimiento espiritual. Dedica tiempo a la meditación.',
                'Tu imaginación está especialmente activa hoy. Canalízala en actividades creativas.'
            ],
            'Aries': [
                'La energía de Marte te impulsa a tomar la iniciativa. Es un buen día para liderar proyectos.',
                'Tu determinación te llevará lejos hoy. No temas perseguir tus objetivos con pasión.',
                'Día ideal para actividades físicas que liberen tu energía acumulada.'
            ],
            'Tauro': [
                'La estabilidad que buscas llegará si persistes en tus esfuerzos. La paciencia es tu aliada.',
                'Tu sentido práctico te ayudará a resolver un problema financiero. Confía en tu instinto.',
                'Es momento de disfrutar pequeños placeres. Date un capricho que hayas estado posponiendo.'
            ],
            'Géminis': [
                'Tu curiosidad natural te llevará a descubrir información valiosa. Mantén la mente abierta.',
                'Un encuentro casual podría transformarse en una conexión importante. Socializa más.',
                'Buen momento para aprender algo nuevo. Tu mente ágil asimilará conocimientos rápidamente.'
            ],
            'Cáncer': [
                'Tus emociones están a flor de piel. Utiliza esta sensibilidad para fortalecer lazos familiares.',
                'La luna influye positivamente en tu intuición. Escucha tu voz interior en decisiones importantes.',
                'Es tiempo de cuidar tu hogar y crear un espacio que realmente refleje tu personalidad.'
            ],
            'Leo': [
                'Tu carisma natural brillará especialmente hoy. Aprovecha para inspirar a quienes te rodean.',
                'Una oportunidad de liderazgo podría presentarse. Demuestra tu capacidad sin temor.',
                'Es momento de brillar y mostrar tus talentos. No te quedes en la sombra.'
            ],
            'Virgo': [
                'Tu precisión y atención al detalle resolverán un problema complejo. Confía en tus habilidades analíticas.',
                'Buen día para organizar y planificar. Tu eficiencia estará en su punto máximo.',
                'Presta atención a tu salud. Pequeños cambios en tu rutina traerán grandes beneficios.'
            ],
            'Libra': [
                'Busca el equilibrio entre tus responsabilidades y tu bienestar personal. La armonía es clave.',
                'Una decisión importante requiere que evalúes todos los aspectos. Tómate tu tiempo.',
                'Las relaciones personales florecen bajo la influencia de Venus. Acércate a quienes aprecias.'
            ],
            'Escorpio': [
                'Tu intensidad emocional te permite ver más allá de las apariencias. Confía en tus instintos.',
                'Es momento de transformación. Deja ir lo que ya no te sirve y renuévate.',
                'Tu determinación te ayudará a superar cualquier obstáculo que se presente hoy.'
            ],
            'Sagitario': [
                'La aventura te llama. Explora nuevas ideas o lugares que amplíen tus horizontes.',
                'Tu optimismo natural inspirará a quienes te rodean. Comparte tu visión positiva.',
                'Buen momento para planificar ese viaje o aventura que has estado deseando.'
            ],
            'Capricornio': [
                'Tu disciplina te acerca cada día más a tus metas. Sigue adelante con determinación.',
                'Es un buen momento para establecer nuevas estructuras en tu vida profesional.',
                'La perseverancia es tu mayor virtud. Los resultados de tu esfuerzo comenzarán a notarse.'
            ]
        };
    }

    // Valida si la fecha tiene el formato correcto DD-MM-AAAA
    validateDateFormat(dateString) {
        const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
        return regex.test(dateString);
    }

    // Obtiene el signo zodiacal basado en la fecha de nacimiento
    getZodiacSign(dateString) {
        // Asumimos que dateString ya tiene el formato correcto DD-MM-AAAA
        const [day, month, _] = dateString.split('-');
        const dateMMDD = `${day}-${month}`;
        
        // Caso especial para Capricornio que cruza año
        if ((month === '12' && parseInt(day) >= 22) || (month === '01' && parseInt(day) <= 19)) {
            return this.zodiacSigns.find(sign => sign.name === 'Capricornio');
        }
        
        // Para el resto de signos
        for (const sign of this.zodiacSigns) {
            const [startDay, startMonth] = sign.startDate.split('-');
            const [endDay, endMonth] = sign.endDate.split('-');
            
            const startDateValue = parseInt(startMonth) * 100 + parseInt(startDay);
            const endDateValue = parseInt(endMonth) * 100 + parseInt(endDay);
            const currentDateValue = parseInt(month) * 100 + parseInt(day);
            
            if (startDateValue <= currentDateValue && currentDateValue <= endDateValue) {
                return sign;
            }
        }
        
        return null; // Nunca debería llegar aquí si la fecha es válida
    }

    // Obtiene un horóscopo aleatorio para el signo dado
    getHoroscope(sign) {
        const texts = this.horoscopeTexts[sign.name];
        const randomIndex = Math.floor(Math.random() * texts.length);
        return {
            text: texts[randomIndex],
            sign: sign.name,
            emoji: sign.emoji
        };
    }

    // Método principal para obtener el horóscopo basado en la fecha de nacimiento
    getHoroscopeByBirthdate(birthdate) {
        if (!this.validateDateFormat(birthdate)) {
            throw new Error('Formato de fecha inválido. Debe ser DD-MM-AAAA');
        }
        
        const sign = this.getZodiacSign(birthdate);
        return this.getHoroscope(sign);
    }
}