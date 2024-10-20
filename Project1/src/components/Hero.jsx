function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero_content">
          <h1>
            YOUR FEET <br /> DESERVE <br /> THE BEST
          </h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO <br /> HELP YOU WITH
            OUR SHOES. YOUR FEET DESERVE <br /> THE BEST AND WE'RE HERE TO HELP
            YOU WITH OUR <br /> SHOES.
          </p>
          <div className="btn">
            <div><button>Shop Now</button></div>
            <div><button className="cat">Category</button></div>
          </div>
          <div>
            <p>Also Available on</p> <br />
            <img src="/images/shops.png" alt="" />
          </div>
        </div>
        <div>
            <img src="/images/shoe_image.png" alt="product" />
        </div>
      </div>
    </>
  );
}

export default Hero;
