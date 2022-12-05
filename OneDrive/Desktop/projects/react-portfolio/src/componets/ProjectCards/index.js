import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const projectslide = [
  {   
      id: 1,
      name: 'Rise 2 Challenge',
      description: '',
      image: "../../assets/images/0.png",
      link: 'https://thawing-atoll-91539.herokuapp.com/',
      github: 'https://github.com/JayWhiteBuffalo/Rise2Challenge'
  },
  {   
      id: 2,
      name:'Step 2 Rhythm',
      description: '',
      image: "../../assets/images/1.png",
      link: 'https://jaywhitebuffalo.github.io/Step2Rhythm/',
      github: 'https://github.com/JayWhiteBuffalo/Step2Rhythm'
  },
  {   
      id: 3,
      name: 'Egregore',
      description: '',
      image: "../../assets/images/2.png",
      link: 'https://github.com/JayWhiteBuffalo/Egregore',
      github: 'https://github.com/JayWhiteBuffalo/Egregore'
  },
  {   
      id: 4,
      name: 'J.A.T.E',
      description: '',
      image: "../../assets/images/3.png",
      link: 'https://infinite-chamber-71782.herokuapp.com/',
      github: 'https://github.com/JayWhiteBuffalo/text2Edit'
  },
  {   
      id: 5,
      name: 'Department Tracker',
      description: '',
      image: "../../assets/images/4.png",
      link: 'https://github.com/JayWhiteBuffalo/department-tracker',
      github: 'https://github.com/JayWhiteBuffalo/department-tracker'
  },
  {   
      id: 6,
      name: 'E-commerance Back-End',
      description: '',
      image: "../../assets/images/5.png",
      link: 'https://github.com/JayWhiteBuffalo/Ecommie',
      github: 'https://github.com/JayWhiteBuffalo/Ecommie'
  }
];

function ProjectCards(){
  return(
      <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y,]}
    loop={true}
    spaceBetween={30}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
{projectslide.map((project, i) => ( 
     <SwiperSlide key={projectslide.id} className="slide">  
             <div className="projectCard slide-content center">
             <a href = {projectslide[i].github}>
             <img 
             src={require(`../../assets/images/${i}.png`)}
             alt={projectslide[i].name}
             className = "img-thumbnail mx-1"
             key={projectslide[i].name}
         />
         </a>
            <a href = {projectslide[i].link}>
                <h3 className="center">{projectslide[i].name}</h3>
            </a>
         </div>
  </SwiperSlide>
))
}
  </Swiper>
  )};

  export default ProjectCards;