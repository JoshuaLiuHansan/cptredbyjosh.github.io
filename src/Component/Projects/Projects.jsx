import React, {Component} from 'react';
import { Image, Col } from 'react-bootstrap';
import Init from '../../Init/Init';
import './Projects.scss';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    title: "Daniel Wu | Aset Dingin",
                    subtitle: "Instagram Ads",
                    imagePath: [
                        "project-photo1.jpeg",
                        "project-photo2.jpeg",
                        "project-photo3.jpeg",
                    ]
                }
            ]
        }

        this.config = Init.config;
    }

    render() {
        let state = this.state;
        let config = this.config;

        return (
            <div id="projects" className="projects">
                <h2> Project </h2>
                <div className="project-list">
                    {
                        state.projects.map( (project, key) => {
                            return (
                                <Col key={key} className="project">
                                    <div className="project-images">
                                        {
                                            project.imagePath.map( (item, index) => {
                                                return (
                                                        <Image className="project-image" key={index} src={config.imageFolder + item} />
                                                );
                                            } )
                                        }
                                    </div>
                                    <div className="project-info">
                                        <h3> { project.title } </h3>
                                        <span> {project.subtitle} </span>
                                    </div>
                                </Col>

                            );
                        } )
                    }
                </div>
            </div>
        );
    }
}

export default Projects;