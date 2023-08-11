import "./Footer.css";
import face from "./face.jfif";
import link from "./link.png";
import insta from "./insta.png";
import tweet from "./tweet.png";
export default function Footer(){
    return (
        <footer className="foot">
            <div className="img">
                <h4>Instagram</h4>
                <a href="" target="_blank">
                    <img src={insta}/>
                </a>
            </div>
            <div className="img">
                <h4>Twitter</h4>
                <a href="" target="_blank">                    
                    <img src={tweet}/>
                </a>
            </div>
            <div className="img">
                <h4>FaceBook</h4>
                <a href="" target="_blank">                    
                    <img src={face}/>
                </a>
            </div>
            <div className="img">
                <h4>Linked in</h4>
                <a href="" target="_blank">                    
                    <img src={link}/>
                </a>
            </div>
            <div className="contact">
                <span class="material-symbols-outlined">call</span>
                <h4>Contact Us: +91 465264574</h4>
            </div>
        </footer>
    );
}