import "../style/newPayment.css"
function HideNewPayment(props){
    return(
        <div className="newPayment">
            <button onClick={props.unwrapNewPayment}>добавить новый доход</button>
        </div>
    )
}
export default HideNewPayment