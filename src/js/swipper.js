document.addEventListener('DOMContentLoaded', (event) =>{
    let swiper = document.querySelector('.swiper-container')

     swiper = new Swiper(".swiper-container", {
        effect: 'coverflow',
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
          },        
        navigation: {
            nextEl: '.carousel-btn-next',
            prevEl: '.carousel-btn-prev'
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,          
          dynamicBullets: true,
          dynamicMainBullets: '2'
          
        },
            breakpoints: {
                640: {
                slidesPerView: 1,
                spaceBetween: 10,
                },
                768: {
                slidesPerView: 2,
                spaceBetween: 20,
                },
                1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                },
                1920: {
                slidesPerView: 3,
                spaceBetween: 90,
                },
                2560: {
                    slidesPerView: 3,
                    spaceBetween: 300,
                }
            },
                on: {
                    slideChange: function () {
                        const prevButton = document.querySelector('.carousel-btn-prev');
                        const nextButton = document.querySelector('.carousel-btn-next');
                        
                        

                        if (swiper.isBeginning) {
                            prevButton.style.opacity = '0.3';
                            prevButton.classList.remove('carousel-btn-prev-hover')
                        } else {
                            prevButton.style.opacity = '1';
                            prevButton.classList.add('carousel-btn-prev-hover')
                        }

                        if (swiper.isEnd) {
                            nextButton.style.opacity = '0.3';
                            nextButton.classList.remove('carousel-btn-next-hover')
                        } else {
                            nextButton.style.opacity = '1';
                            nextButton.classList.add('carousel-btn-next-hover')
                        }
                    }
                }
    });

    
    
})