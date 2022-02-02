import img1 from '../../images/svg-1.svg'
import img2 from '../../images/svg-2.svg'
import img3 from '../../images/svg-3.svg'
import img4 from '../../images/svg-4.svg'

export const homeObjOne = {
    id: "about",
    lightBg: false,
    lightText: true,
    lghtTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allow to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: img1,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
    getStarted: "signup"
}

export const homeObjTwo = {
    id: "discover",
    lightBg: true,
    lightText: false,
    lghtTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: img2,
    alt: 'piggybank',
    dark: false,
    primary: false,
    darkText: true,
}

export const homeObjThree = {
    id: "signup",
    lightBg: true,
    lightText: false,
    lghtTextDesc: false,
    topLine: 'Join our Team',
    headline: 'Creating an account is extremely easy',
    description: "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go",
    buttonLabel: 'Start Now',
    imgStart: false,
    img: img3,
    alt: 'Chart',
    dark: false,
    primary: false,
    darkText: true,
    dest: 'signin'
}