import { ImFacebook2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FiTwitch } from "react-icons/fi";
import "./Footer1.css";


export default function Footer() {
    return (
        <footer className="footerCard">
        <div id="TopBloc">
            <div id="Adaopte">
            <h3 className="Adaopte">ADAOPTE</h3>
                <p>Notre mission est de trouver des foyers aimants pour des animaux abandonnés et de promouvoir le bien-être animal.</p>
                <p id="logo"><ImFacebook2 />  <BsTwitterX />  <FiTwitch /> </p>
            </div>
            <div id="InfoUtiles">
                <h3>INFORMATIONS UTILES</h3>
                <br />
                <p>FAQs</p> <br />
                <p>Conseils d'adoption</p> <br />
                <p>Nous contacter</p> <br />
                <p>Mentions légales</p>
            </div>
            <div className="Contact">
                <h3 >CONTACT</h3>
                <br />
                <p>Adresse : 12 rue de rivoli</p> 
                <p>75012 Paris</p>
                <a href="mailto:adaopte@test.fr">adaopte@test.fr</a>
                <p>Tél : 02 85 24 65 00</p>
            </div>
            </div>
            <div id="BottomBloc">
                <h4 >2026 ADAOPTE. Tous droits réservés</h4>
                <p>Ce site a été développé dans le cadre d'un projet d'ADA TECH SCHOOL</p>
            </div>
        </footer>
    )
}