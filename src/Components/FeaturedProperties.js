import "./FeaturedProperties.css"
function FeaturedProperties()
{
    return(
        <div className="fp">
             <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Comfort Suites Airport</span>
        <span className="fpCity">Austin</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/472036509.jpg?k=ca519c1b538fb5a354795ca88348ad866bccca2859a8abec4e8560d167b0b235&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
        </div>
    )
}

export default FeaturedProperties;