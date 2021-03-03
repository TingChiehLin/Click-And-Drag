import Reacr from 'react';
import './DragableArea.scss';
import logo from './logo.svg';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

// import ScrollContainer from 'react-indiana-drag-scroll'

const DragableArea = () => {
    return (
            <div className="scroll-container">
                <Swiper
                    effect="fade"
                    spaceBetween={80}
                    slidesPerView={1}
                    // navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    ...
                </Swiper>
            </div>
    )
}

export default DragableArea 


{/* <ScrollContainer className="scroll-container" 
                horizontal={true} 
                onScroll={() => 
                    console.log("Scrolling")
                }
                onClick={() => 
                    console.log("Click")
                }
            >
                <img src={logo}/>
                <img src={logo}/>
                <img src={logo}/>
            </ScrollContainer> */}