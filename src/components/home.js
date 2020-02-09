import React from 'react'

function Home() {
    return (
        <div className="container card">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner c-size rounded mt-3">
                    <div class="carousel-item active position-i">
                    <img src="/media/home/1.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item position-i">
                    <img src="/media/home/2.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item position-i">
                    <img src="/media/home/3.jpg" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
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