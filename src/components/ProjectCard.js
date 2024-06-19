import { Card, Col } from 'react-bootstrap';

function ProjectCard(title, skills, description, github, demo, img) {
    <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img variant="top" src={img} />
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{skills}</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Link href={github}>Github</Card.Link>
                <Card.Link href={img}>Demo</Card.Link>
            </Card.Body>
        </Card>
    </Col>
}

export { ProjectCard }