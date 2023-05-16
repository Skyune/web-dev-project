import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import './Projects.css'
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import musicMain from "../assets/img/musicMain.png";
import musicSecond from "../assets/img/musicSecond.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import googleBadge from "../assets/img/googleplay.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">

      
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="android-app">
  <img src={musicMain} alt="" className={isVisible ? "animate__animated animate__slideInDown": ""} />
  <img src={musicSecond} alt="" className={isVisible ? "animate__animated animate__slideInUp": ""} />
  <div>
  <div className="lofitext">
  <h2>Lofi Corner</h2>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>
  <div class="lofiButtons">
  <img src={googleBadge} alt="" />
  <button type="submit">Try demo</button>
  <span>or see <a href = "">github code</a></span>
</div>
</div>
</div>



              </div>}     
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
     
      </section>
  )
}
