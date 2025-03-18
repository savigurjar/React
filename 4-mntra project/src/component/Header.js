// Header Component
export default function Header() {
    return (
      <div className="header">
        <img className="images"
          src="https://www.epicstuff.com/cdn/shop/products/611S10cWQZL._SL1500__1_1024x1024.jpg?v=1639306611"
          height="80px"
          width="80px"
          alt="Logo"
        />
        <div className="option">
          <button className="btn">RM Style</button>
          <button className="btn">Jin Fashion</button>
          <button className="btn">Suga Vibe</button>
          <button className="btn">J-Hope Trend</button>
          <button className="btn">Jimin Looks</button>
          <button className="btn">V Icon</button>
          <button className="btn">Jungkook Picks</button>
        </div>
        <input className="searchbar" placeholder="🔍Search for BTS-inspired products" />
        <div className="profile">
          <button className="pro">ARMY Profile</button>
          <button className="pro">Bias Wishlist</button>
          <button className="pro">Merch Bag</button>
        </div>
      </div>
    );
  }
//   export default Header;