import style from '../../style/footer.module.css';
import arrow from '../../assets/icons/arrow.svg';
import insta from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import linkedIn from '../../assets/icons/linkedIn.svg';

export default function Footer() {
   return (
      <div className={style.container}>
         <hr/>
         <div className={style.footerLinks}>
            <div>
               <li>Contact</li>
               <li>Terms of Services</li>
               <li>Shipping and Returns</li>
            </div>
            <div>
               <span>Give an email, get the newsletter.</span>
               <img src={arrow} alt=""/>
            </div>
         </div>
         <div className={style.social}>
            <div>
               <p><b>© 2021 Shelly.</b> Terms of use <b>and</b> privacy policy.</p>
            </div>
            <div>
               <img src={linkedIn} alt=""/>
               <img src={facebook} alt=""/>
               <img src={insta} alt=""/>
               <img src={twitter} alt=""/>
            </div>
         </div>
      </div>
   )
}