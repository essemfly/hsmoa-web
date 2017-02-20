const formatMoney = (input) => (
    input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
)

export default formatMoney
