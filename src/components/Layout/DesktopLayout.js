import style from '../../style/desktoplayout.module.css';
import shoppe from '../../assets/icons/SHOPPE.svg';
import line from '../../assets/icons/line.svg';
import cart from '../../assets/icons/cart.svg';
import search from '../../assets/icons/search.svg';
import user from '../../assets/icons/user.svg';

export default function DesktopLayout() {
   return (
      <div className={style.container}>
         <ul className={style.navbar}>
            <li><img src={shoppe} alt="shoppe.com"/></li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Our story</li>
            <li><img src={line} alt="line"/></li>
            <li><img src={search} alt=""/></li>
            <li><img src={cart} alt=""/></li>
            <li><img src={user} alt=""/></li>
         </ul>
      </div>
   )
}