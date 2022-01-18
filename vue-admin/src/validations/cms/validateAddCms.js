import validator from 'validator';

const validateAddCms = (data) => {
    let errors = {};

    const { title, state, modelname } = data;

    if (validator.isEmpty(title)) {
        errors.title = 'Please enter Title.';
    }
    if (validator.isEmpty(state)) {
        errors.state = 'Please Select one.';
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
