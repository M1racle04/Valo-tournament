import "./Footer.css";
import "./contact.css";
import bg from "../../img/bg.png"


const year = new Date().getFullYear();
 
  const Contact= ( ) => {
    return <>
 <div class="row word">
<div class="col-lg-12">
<h3>IN CASE OF ANY QUERY</h3>
<h3>FEEL FREE TO REACH OUT TO US!</h3>
<i class="fa-brands fa-whatsapp  fa-xl icon"> - 8072508388</i>
<br />
<i class="fa-brands fa-instagram fa-xl icon"> - @valorantcampuschallengers22</i>
<br />
<i class="fa-solid fa-envelope fa-xl icon"> - valorantcampuschallengers22@gmail.com</i>


<img class="bg" src={bg} alt="" />



</div>
</div>


    <footer id="footer">
      <p class="footes">This Tournament has no association with RIOT games. {year} </p>
    </footer>
    
    </>
    
    
    
    
    }
    
    export default Contact;