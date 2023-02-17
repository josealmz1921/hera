import React, { useState, useEffect, useMemo } from "react";
import { SliderStates } from '../types-d';

const useSlider = ({ containerRef }: { containerRef: React.RefObject<HTMLSelectElement> | any }) => {

    const [actualPositionImage, setactualPositionImage] = useState<number>(1);

    const [position, setposition] = useState<SliderStates['positionState']>({
        xa: 0,
        xb: 0
    })

    const { xa, xb } = position;

    const handleLeftClick = () => {
        if (actualPositionImage === 1) return;
        const position = actualPositionImage - 2;
        const widthContainer = containerRef.current.offsetWidth;
        containerRef.current.childNodes[1].style.transition = "ease all .4s";
        containerRef.current.childNodes[1].style.marginLeft = ((-1 * (position * (widthContainer)))) + "px";
        setactualPositionImage(actualPositionImage - 1)
    }

    const handleRighttClick = () => {
        const numberOfDivs = containerRef.current.childNodes[1].childNodes.length;
        if (numberOfDivs === actualPositionImage) return null
        const widthContainer = containerRef.current.offsetWidth;
        containerRef.current.childNodes[1].style.transition = "ease all .4s";
        containerRef.current.childNodes[1].style.marginLeft = (-1 * (actualPositionImage * (widthContainer))) + "px";
        setactualPositionImage(actualPositionImage + 1)
    }


    useEffect(() => {

        if (position.xa !== 0 && position.xb !== 0) {

            if (xa > xb) {
                handleRighttClick()
            } else {
                if (xa < xb) {
                    handleLeftClick()
                }
            }

            setposition({
                xa: 0,
                xb: 0
            })

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position])

    const eventsSlider = useMemo(() => {
        return {
            onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                setposition({
                    ...position,
                    xa: e.clientX
                });
            },
            onMouseUp: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                setposition({
                    ...position,
                    xb: e.clientX
                });
            },
            onTouchStart: (e: React.MouseEvent<HTMLDivElement, TouchEvent | MouseEvent> | any) => {
                setposition({
                    ...position,
                    xa: e.changedTouches[0].clientX
                });
            },
            onTouchEnd: (e: React.MouseEvent<HTMLDivElement, TouchEvent | MouseEvent> | any) => {
                setposition({
                    ...position,
                    xb: e.changedTouches[0].clientX
                });
            }
        }
    }, [position])

    return {
        position,
        setposition,
        handleLeftClick,
        handleRighttClick,
        eventsSlider
    }
}

export default useSlider;