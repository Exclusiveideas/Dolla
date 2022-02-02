import { Button, ButtonR } from '../ButtonElement'
import { 
BtnWrap,
Column1,
Column2,
Heading,
Img,
ImgWrap,
InfoContainer,
InfoRow,
InfoWrapper,
Subtitle,
 TextWrapper,
 TopLine
 } from './InfoElements';


const InfoSection = ( props ) => {
    const { 
        lightBg, 
        imgStart,
        id,
        topLine, lightText, darkText, buttonLabel, headline, description, img, alt, primary, dark, dark2, dest, getStarted
    } = props

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id} >
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    {dest ? (<ButtonR 
                                     to={dest}
                                     primary={primary ? 1 : 0}
                                     dark={dark ? 1 : 0}
                                     dark2={dark2 ? 1 : 0}
                                     smooth={true}
                                     duration={500}
                                     spy={true}
                                     exact={true}
                                     offset={-80}
                                     >{buttonLabel}</ButtonR>) :
                                      (<Button 
                                        to={getStarted? getStarted : 'home' }
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact={true}
                                        offset={-80}
                                        >{buttonLabel}</Button>
                                     )}
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img  src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;
