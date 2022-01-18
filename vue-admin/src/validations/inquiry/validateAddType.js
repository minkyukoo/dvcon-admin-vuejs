import validator from 'validator';

const validateAddType = (data) => {
    let errors = {};

    const { title, state } = data;

    if (validator.isEmpty(title)) {
        errors.title = 'Please enter Title.';
    }
    if (validator.isEmpty(state)) {
        errors.state = 'Please Select one.';
    }
    return {
        isInvalid: Object.keys(errors).length > 0,
        error: errors,
    };
};

export default validateAddType;
