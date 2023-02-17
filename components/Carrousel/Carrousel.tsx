import { useRef } from 'react'
import useSlider from './hooks/useSlider';
import classes from './carrousel.module.css';
import { SliderProps } from './types-d';
import { ChevronLeft, ChevronRight } from '../icons';

const Carrousel = ({ images }: SliderProps) => {

    const containerRef = useRef(null);

    const { handleLeftClick, handleRighttClick, eventsSlider } = useSlider({ containerRef });

    return (
        <div className={classes.carrousel_container}>
            <div ref={containerRef}
                {...eventsSlider}
                className={classes.principal_image}>
                <div className={classes.btn_left}>
                    <button onClick={() => handleLeftClick()}>
                       <ChevronLeft className={classes.iconButtons} />
                    </button>
                </div>
                <div className={classes.img_container}>
                    {images && images.map((image,i) => {
                        return (
                            <div key={i}>
                                <img src={image} alt={image} />
                            </div>
                        )
                    })}
                </div>
                <div className={classes.btn_right}>
                    <button onClick={() => handleRighttClick()}>
                        <ChevronRight className={classes.iconButtons} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Carrousel;