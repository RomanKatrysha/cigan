import Payments from "./components/Payments";
import NewPayment from "./components/NewPayment";
import {useEffect, useState} from "react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars



//data.forEach((e)=>{e.date = new Date(e.date)})
function App() {

    useEffect(()=>{
        axios.get("http://localhost:3005/data?_sort=date").then((res) => {
            let data = res.data;
            for (let i = 0; i < data.length; i++) {
                data[i].date = new Date(data[i].date);
                //console.log(data[i].date)
            }
            //console.log("1")
            setPayments(data)

        });
    },[]);

    function onAddPayments(paymentData){
            //console.log(payments.length)
        let newId= payments.length;
        const newPaymentData = {
            id: newId,
            ...paymentData,
        }
        //console.log(newPaymentData)
        setPayments((prev)=>[newPaymentData,...prev]);
        //saveDataToFile(payments)
        axios.post("http://localhost:3005/data",newPaymentData).then(res=>console.log(res))
    }
    function cancelAddPayments(){
        //console.log("cancel")
        setFlag(false)
    }
    function unwrapNewPayment(){
        setFlag(true)
    }
    function updatePayments(payment){
       // console.log(payment)
        setPayments(prev=>{
            return prev.map(el=>{
                if(el.id === payment.id)  el=payment
                return el
            })
        })
        //console.log(payments)
        axios.put(`http://localhost:3005/data/${payment.id}`, payment).then(res=>{})
    }
    const INITIAL_PAYMENTS = [
      /*  {id:"1",date : new Date(2024,3,14),object :"адыгейск",cost :30000,workDays:3,source:"Юра"},
        {id:"2",date : new Date(2023,3,14),object :"адыгейск",cost :30000,workDays:3,source:"Юра"},
        {id:"3",date : new Date(2024,4,14),object :"адыгейск",cost :30000,workDays:3,source:"Юра"},
        {id:"4",date : new Date(2024,4,14),object :"адыгейск",cost :30000,workDays:3,source:"Юра"},*/
    ];
    //const
    const [payments,setPayments] = useState(INITIAL_PAYMENTS);
    const [flag,setFlag] = useState(false);
    //console.log(payments)


    return (
    <div >

        <NewPayment onSavePaymentData = {onAddPayments} cancelAddPayments = {cancelAddPayments} flag = {flag} unwrapNewPayment ={unwrapNewPayment}/>
        <Payments setPayments={setPayments} payments = {payments} updatePayments={updatePayments}/>

    </div>
  );
}

export default App;
