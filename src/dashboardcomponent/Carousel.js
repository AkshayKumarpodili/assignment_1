import './Carousel.css'
import Carouselcard from './Carouselcard';


function Carousel() {
    return (
        <div className='carous mx-auto'>
            <h5 className='fw-bold'>Top Performers</h5>
            <div id="dashcarousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#dashcarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#dashcarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#dashcarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="1000">
                        <Carouselcard/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <Carouselcard/>
                    </div>
                    <div className="carousel-item">
                        <Carouselcard/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#dashcarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#dashcarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel