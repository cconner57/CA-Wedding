import React from 'react'
import './home.css'

function Home() {
    return (
        <div className="container card">
            <div className="Home-slideshow">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="..." class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Home-description">
                <h1>Brief description of event + date</h1>
            </div>
            <div>
                <h1>Wedding Party?</h1>
            </div>
        </div>
    )
}

export default Home