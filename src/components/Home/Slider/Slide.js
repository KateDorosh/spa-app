// Якщо робити через компонент, то в консолі GSAP свариться



// import React from 'react';
// import { gsap } from 'gsap';
// const { useLayoutEffect, useRef } = React;

// const Slide = (props) => {
//     const app = useRef();
//     const tl = useRef();

//     useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//         tl.current = gsap
//             .timeline({ repeat: -1 })
//             .to(".slide1", { opacity: 1, duration: 6, ease: "expo.out" })
//             .to(".slide1", { duration: 6, ease: "none", scale: 1.1 }, "-=6")
//             .to(".slide2", { opacity: 1, duration: 6, ease: "expo.out", scale: 1.1 })
//             .to(".slide2", { duration: 6, ease: "none", scale: 1.1 }, "-=6")
//             .to(".slide3", { opacity: 1, duration: 6, ease: "expo.out", scale: 1.1 })
//             .to(".slide3", { duration: 6, ease: "none", scale: 1.1 }, "-=6")
//             .to(".slide4", { opacity: 1, duration: 6, ease: "expo.out", scale: 1.1 })
//             .to(".slide4", { duration: 6, ease: "none", scale: 1.1 }, "-=6");
//         }, app);
//         return () => ctx.revert();
//     }, []);
//     console.log(props.slide.img)

//     return (
//         <div ref={app} className='slides'>
//             <img className={`${ props.slide.img }`} src={ `./images/${ props.slide.img }.jpg` } alt='Spa' />
//         </div>
//     );
// }
// export default Slide;