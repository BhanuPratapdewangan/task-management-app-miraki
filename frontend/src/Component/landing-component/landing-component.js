import React from 'react'

const LandingComponent = () => {
    return (
        <div>
            <section className='mt-2'>
                <main>
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://mirakitech.com/assets/images/working.jpg" class="d-block w-100" alt="image1" />
                            </div>
                            <div class="carousel-item">
                                <img src="https://mirakitech.com/assets/images/crew.jpg" class="d-block w-100" alt="image2" />
                            </div>
                            <div class="carousel-item">
                                <img src="https://mirakitech.com/assets/images/modern.jpg" class="d-block w-100" height={560} alt="image3" />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default LandingComponent;