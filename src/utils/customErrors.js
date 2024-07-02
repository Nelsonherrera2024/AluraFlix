export const errortypes = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
];

export const messages = {
    title: {
        valueMissing: "El campo título no puede estar vacío.",
        tooShort: "El título debe contener como mínimo 3 caracteres.",
    },
    category: {
        valueMissing: "Por favor, seleccione su equipo.",
    },
    photo: {
        valueMissing: "El campo foto no debe estar vacío.",
        typeMismatch: "Por favor, ingrese la URL válida de una imagen.",
        tooShort: "La URL de la foto debe contener como mínimo 3 caracteres.",
    },
    link: {
        valueMissing: "Este campo video no puede estar vacío.",
        typeMismatch: "Por favor, ingrese una URL válida.",
        tooShort: "La URL del video debe contener como mínimo 3 caracteres.",
    },
    description: {
        valueMissing: "El campo descripción no puede estar vacío.",
        tooShort: "La descripción debe contener al menos 10 caracteres.",
    },
};
