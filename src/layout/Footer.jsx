
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="store-container" >
              <h2>Download Our App</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti modi{" "}
              </p>
              <div className="img-box" >
                <img src="images/play-store.png" alt="" />
                <img src="images/app-store.png" alt="" />
              </div>
            </div>
            <div >
              <h2>ProShop</h2>
              <p>
                Lorem ipsum dolor amet consectetur adipisicing elit. amet
                consectetur adipisicing elit. amet consectetur adipisicing
                elit.{" "}
              </p>
            </div>
            <div >
              <h2>Useful Links</h2>
              <ul>
                <li>Coupons</li>
                <li>Blog Post</li>
                <li>Return Policy</li>
                <li>Join Affiliate</li>
              </ul>
            </div>
            <div >
              <h2>Follow Us</h2>
              <ul>
                <li>Facebook</li>
                <li>Twitter </li>
                <li>instragram</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
          <p className="copyright">Copyright 2020 </p>
          {/* <hr> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
