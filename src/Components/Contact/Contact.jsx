import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png"
import "./Contact.css";



const Contact = () => {
   

return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Contact</h1>
                <div className="c-info-item">
                    <img src = {Phone} alt="" className="c-icon"/>
                    +1 401 868 0158
                </div>
                <div className="c-info-item">
                    <img src = {Email} alt="" className="c-icon"/>
                    mirandarodriguezronald@gmail.com
                </div>
                <div className="c-info-item">
                    <img src = {Address} alt="" className="c-icon"/>
                    148 webster ave, Providence RI
                </div>
            </div>
        </div>

        <div className="c-right">
            <p className="c-desc">
            <b>Web developer</b> ready for the next challenge
            </p>
          
        </div>
    </div>
    );
};

export default Contact;