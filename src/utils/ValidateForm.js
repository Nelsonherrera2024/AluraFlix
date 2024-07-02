export const validateForm = async (formData) => {
    const errors = {};

    const trimmedFormData = {};
    for (const key in formData) {
        trimmedFormData[key] = formData[key] ? formData[key].toString().trim() : '';
    }

    // Validar titulo
    if (!trimmedFormData.title) {
        errors.title = 'El título es requerido.';
    } else if (trimmedFormData.title.length < 3) {
        errors.title = 'El título debe contener como mínimo 3 caracteres.';
    } else if (trimmedFormData.title.length > 200) {
        errors.title = 'El título no debe tener más de 200 caracteres.';
    }

    // Validar categoria
    if (!trimmedFormData.category) {
        errors.category = 'El  nombre del equipo es requerido.';
    }

    // Validar URL de la foto
    if (!trimmedFormData.photo) {
        errors.photo = 'La URL de la foto es requerida.';
    } else if (!isPhotoURLValid(trimmedFormData.photo)) {
        errors.photo = 'La URL de la foto no es válida.';
    }

    // Validar URL del video
    if (!trimmedFormData.link) {
        errors.link = 'La URL del video es requerida.';
    } else if (!isVideoURLValid(trimmedFormData.link)) {
        errors.link = 'La URL del video no es válida.';
    }

    // Validar descripcion 
    if (!trimmedFormData.description) {
        errors.description = 'La descripción es requerida.';
    } else if (trimmedFormData.description.length < 3) {
        errors.description = 'La descripción debe tener como mínimo  3 caracteres.';
    } else if (trimmedFormData.description.length > 500) {
        errors.description = 'La descripción no debe tener más de 500 caracteres.';
    }

    return errors;
};

// Validar URL de la foto
const isPhotoURLValid = (url) => {
    const photoUrlPattern = /\.(jpg|jpeg|png|gif)$/i;
    return photoUrlPattern.test(url);
};

// Validar URL del video
const isVideoURLValid = (url) => {
    const videoUrlPattern = /^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+\?si=[a-zA-Z0-9_-]+$/;
    return videoUrlPattern.test(url);
};
