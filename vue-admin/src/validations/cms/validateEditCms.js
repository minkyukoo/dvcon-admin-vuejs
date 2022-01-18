import validator from 'validator';

const validateAddCms = (data) => {
    let errors = {};

    const { title, modelname } = data;

    if (validator.isEmpty(title)) {
        errors.title = 'Please enter Title.';
    }
    if (validator.isEmpty(modelname)) {
        errors.modelname = 'Please fill it.';
    }
    return {
        isInvalid: Object.keys(errors).length > 0,
        error: errors,
    };
};

export default validateAddCms;
