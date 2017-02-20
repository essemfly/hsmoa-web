const formatPhone = (input) => (
    input.length < 1 ? '' : input.slice(0,3) + '-' + input.slice(3,6) + '-' + input.slice(6,10)
);

export default formatPhone