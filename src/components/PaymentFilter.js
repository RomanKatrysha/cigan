import "../style/paymentFilter.css"
function PaymentFilter(props){
    function onFilter(e){
        props.onFilter(e.target.value);
    }
    return(
        <div className="payment-filter">
            <label>выбор по году</label>
            <select name="year" onChange={onFilter} value={props.year}>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
            </select>
        </div>
    )
}
export default PaymentFilter;