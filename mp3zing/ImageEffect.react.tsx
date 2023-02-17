import React, { useState, useMemo, useRef, memo } from 'react';
import classnames from 'classnames';
import Array from './Array';
import { List } from './components';

const ImageEffect = memo((props) => {
    const {
        images,
        isPlay = false,
        timeout = 10,
        shuffle = true,
        once = false,
        className,
    } = props;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const shuffledImages = useMemo(() => {
        return shuffle ? Array.shuffle(images) : images;
    }, [images]);
    const lastIndex = useRef(currentImageIndex);
    const isPlayedOnce = useRef(!once);
    lastIndex.current = currentImageIndex;

    useEffect(() => {
        if (isPlay && !once) {
            const timeoutId = setTimeout(() => {
                setCurrentImageIndex(
                    currentImageIndex === shuffledImages.length - 1 ? 0 : currentImageIndex + 1
                );
            }, 1000 * timeout);
            return () => clearTimeout(timeoutId);
        }
    }, [shuffledImages, currentImageIndex, isPlay, once]);

    useEffect(() => {
        if (isPlay && once) {
            isPlayedOnce.current = true;
            setCurrentImageIndex(
                currentImageIndex === shuffledImages.length - 1 ? 0 : currentImageIndex + 1
            );
        }
    }, [isPlay]);
    const currentImages = useMemo(() => {
        return currentImageIndex <= 0
            ? [shuffledImages[shuffledImages.length - 1], shuffledImages[0]]
            : [shuffledImages[currentImageIndex - 1], shuffledImages[currentImageIndex]];
    }, [shuffledImages, currentImageIndex]);
    
    return (
        <List className={classnames('image-effect', className, { 'is-play': isPlay })}>
            <List renderAs="ul">
                {currentImages.map((image, index) => {
                    const isEnter = isPlayedOnce.current && index === currentImages.length - 1;
                    const isExit = isPlayedOnce.current && !isEnter;
                    return (
                        <List renderAs="li" key={`${index}-${image}`} className={classnames({ enter: isEnter, exit: isExit })}>
                            <List renderAs="img" src={image} />
                        </List>
                    );
                })}
            </List>
        </List>
    );
});

export default ImageEffect;