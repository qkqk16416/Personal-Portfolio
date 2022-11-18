import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import hearderImg from '../assets/img/header-img.svg'
export const Banner = () => {
    const toRotate = ['a Senior Student', 'an Ace Singer', 'an Excellent gamer', 'a Web Developer']
    const [loopNm, setLoopNum] = useState(0)
    //在删除还是输入
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(200)
    // const [index, setIndex] = useState(1);
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text, delta])
    const tick = () => {
        //fullText为当前操作的词组
        let i = loopNm % toRotate.length
        let fullText = toRotate[i]
        //updatedText为用来更新text的字符串,删除状态下每次去掉最后一个字母，输入状态下每次增加一个字母
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText)
        //删除过程速度加倍
        if (isDeleting) {
            setDelta(delta / 2)
        }

        //判断当前词组是否输入完毕。是则转为删除
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
        }
        //判断当前词组是否删除完毕，是则转为输入，循环++，速度恢复
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNm + 1)
            setDelta(200)
        }
    }

    return (
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my PortFolio</span>
                        <h1>{`Hi I'm QKQK, `}<span className="wrap">{text}</span></h1>
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
