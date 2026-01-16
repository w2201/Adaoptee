import { ImFacebook2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FiTwitch } from "react-icons/fi";
import "./Footer1.css";


export default function Footer() {
    return (
        <footer className="footerCard">
            <h3 className="Adaopte">ADAOPTE</h3>
            <p>Notre mission est de trouver des foyers aimants pour des animaux abandonnés et de promouvoir le bien-être animal.</p>
           <ImFacebook2 /> <BsTwitterX /> <FiTwitch />
             <h3 className="InfoUtiles">INFORMATIONS UTILES</h3>
                <p>FAQs</p>
                <p>Conseils d'adoption</p>
                <p>Nous contacter</p>
                <p>Mentions légales</p>
            <h3 className="Contact">CONTACT</h3>
                <p>Adresse : 12 rue de rivoli - 75012 Paris</p>
                <a href="mailto:adaopte@test.fr">adaopte@test.fr</a>
                <p>Tél : 02 85 24 65 00</p>
            <h4>2026 ADAOPTE. Tous droits réservé</h4>
                <p>Ce site a été développé dans le cadre d'un projet d'ADA TECH SCHOOL</p>
        </footer>
    );
}