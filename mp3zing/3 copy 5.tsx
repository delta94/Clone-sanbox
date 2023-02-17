import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { shuffle as shuffleArray } from 'lodash';


const Carousel = ({ items, pause = "hover", interval = 5000, sectionId }) => {
        const {width} = useWindowWidth();

        const containerRef = useRef(null);
        const carouselItemRefs = useRef([]);
        const currentIndexRef = useRef(1);

    
        const [isPaused, setIsPaused] = useState(false);
        const [shuffledItems, setShuffledItems] = useState(shuffleArray(items));
        const [classNames, setClassNames] = useState(['gallery-item-0']);
        const [activeIndex, setActiveIndex] = useState(0);

        const isMobile = useIsMobile();
        const isTablet = useIsTablet();
        const [slideHeight, setSlideHeight] = useState(0);

        this.bannerZid = useSelector(selectBannerZid);
        this.bannerMp3Zid = useSelector(selectBannerMp3Zid);
        this.classes = useState(initialClasses);
        this.height = useState(0);
        this.memoized = useMemo(() => {   
            let items = [...this.shuffled];
            if (this.bannerZid) {
                items = insertArray(items, this.bannerZid, getRandomInt(0, items.length - 1));
            }
            if (this.bannerMp3Zid) {
                items = insertArray(items, this.bannerMp3Zid, 3);
            }
            return items;
        }, [this.shuffled, this.bannerZid, this.bannerMp3Zid]);
    

        const updatedItems = useMemo(() => {
            let items = shuffleArray(shuffledItems);
        
            if (someBannerZid) {
              items = insertArray(items, someBannerZid, random(0, items.length - 1));
            }
            if (someBannerMP3Zid) {
              items = insertArray(items, someBannerMP3Zid, 3);
            }
        
            return items;
          }, [shuffledItems]);
          

          useEffect(() => {
            const difference = updatedItems.length - classNames.length;
            if (difference > 0) {
              const newClassNames = Array(difference).fill('gallery-item-add');
              setClassNames(insertArray(classNames, newClassNames, 3));
            }
          }, [updatedItems, classNames]);

          const shuffleClassNames = useCallback(() => {
            const shuffledClassNames = shuffleArray(classNames);
            setClassNames(shuffledClassNames);
          }, [classNames]);
        
          useEffect(() => {
            updateClassNames();
          }, [classNames]);

          const updateClassNames = () => {
            for (let i = 0; i < classNames.length; i++) {
              const className = classNames[i];
              const carouselItem = carouselItemRefs.current[i];
        
              if (carouselItem) {
                if (shuffleClassNames) {
                  carouselItem.classList.remove(shuffleClassNames[i]);
                }
                carouselItem.classList.add(className);
              }
            }
          }

          
          const rotateCarousel = (isForward = true) => {
            let rotatedClassNames = [...classNames];
        
            if (isForward) {
              const poppedClassName = rotatedClassNames.pop();
              rotatedClassNames.unshift(poppedClassName);
            } else {
              const shiftedClassName = rotatedClassNames.shift();
              rotatedClassNames.push(shiftedClassName);
            }
        
            setClassNames(rotatedClassNames);
          }
        
          const handleMouseEnter = useCallback(() => {
            if (pause === 'hover') {
              setIsPaused(true);
            }
          }, [pause]);
        
          const handleMouseLeave = useCallback(() => {
            setIsPaused(false);
          }, []);

          
        


    useEffect() {
        this.updateClasses();
    }

    updateClasses() {
        for (let i = 0; i < this.classes.length; i++) {
            let currentClass = this.classes[i];
            let currentRef = this.hRef.current[i];
            if (currentRef) {
                if (this.shouldAnimate) {
                    currentRef.classList.remove(currentClass);
                }
                currentRef.classList.add(currentClass);
            }
        }
    }

    handleMouseEnter() {
        if (this.pause === 'hover') {
            this.paused(true);
        }
    }

    handleMouseLeave() {
        this.paused(false);
    }

    useEffect() {
        if (!this.paused) {
            this.vRef.current = setInterval(() => {
                this.shiftClasses(true);
            }, this.interval);
        }

        return () => {
            clearInterval(this.vRef.current);
        }
    }

    useEffect(() => {
        const firstSlide = carouselItemRefs.current[0]?.firstElementChild;
        if (firstSlide && containerRef.current) {
            const height = firstSlide.getBoundingClientRect().height;
            containerRef.current.style.height = `${height}px`;
            setSlideHeight(height);
        }
    }, [width, slideHeight, isMobile]);


}