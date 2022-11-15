import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import hearderImg from '../assets/img/header-img.svg'
export const Banner = () => {
    const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer']
    const [loopNm, setLoopNum] = useState(0)
    //在删除还是输入
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])
    const tick = () => {
        let i = loopNm % toRotate.legnth
    }

    return (
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my PortFolio</span>
                        <h1>{`Hi I'm webcoder`}<span className="wrap">web devloper</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident nulla ullam aliquid nobis distinctio, dolor alias! Unde quisquam quaerat distinctio, illum accusantium est voluptatibus odio quo vitae itaque facilis.</p>
                        <button onClick={() => { console.log('connect') }}>Let's connect<ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={hearderImg} alt='Header Img' />
                    </Col>
                </Row>

            </Container>
        </section>
    )
}
