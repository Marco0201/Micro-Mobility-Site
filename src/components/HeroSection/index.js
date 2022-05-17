import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Traveling in the Inner City made easier </HeroH1>
                <HeroP>
                    Download our app today and recieve a complimentary $10 free in credits to ride.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/signup" onMouseEnter={onHover} onMouseLeave={onHover}
                        primary="true" dark="true" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Download Our App {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection