import { Col } from 'react-bootstrap';

function ProjectCard({ title, skills, discription, github, demo, img }) {
    return (
        <Col xs={12} md={6} xl={4}>
            <div className='proj-imgbox'>
                <img src={img} alt={title} />
                <div className='proj-text'>
                    <h2>{title}</h2>
                    <h3>{skills}</h3>
                    {/* <p>{discription}</p> */}
                    <a href={github}>Github</a>
                    <a href={demo}>Demo</a>
                </div>
            </div>
        </Col>

    )
}

export { ProjectCard }

// Col
// xs: < 576 pixels. -> mobile(360-414)
// sm: ≥ 576 pixels.
// md: ≥ 768 pixels. -> tablet(768-1024)
// lg: ≥ 992 pixels. 
// xl: ≥ 1200 pixels. -> laptop(1366-1440), desktop(1440-1920)