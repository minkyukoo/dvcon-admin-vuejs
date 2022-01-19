import validator from 'validator';

const validateCreateBanner = (data) => {
    let errors = {};

    const { title, subtitle, state, link, type, file } = data;

    if (validator.isEmpty(title)) {
        errors.title = 'Please enter a title';
    }
    if (validator.isEmpty(subtitle)) {
        errors.subtitle = 'Please enter a subtitle';
    }
    if (validator.isEmpty(state)) {
        errors.state = 'Please Select Your state';
    }

    if (validator.isEmpty(link)) {
        errors.link = 'link is required';
    }
    if (!validator.isURL(link)) {
        errors.link = 'Please Enter valid URL';
    }
    if (validator.isEmpty(type)) {
        errors.type = 'type is required';
    }
    if (validator.isEmpty(file)) {
        errors.file = 'file is required';
    }

    return {
        isInvalid: Object.keys(errors).length > 0,
        error: errors,
    };
};

export default validateCreateBanner;
