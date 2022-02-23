import React, {Component} from 'react';
import Init from '../../Init/Init';
import './Theme.scss';

import ThemeCard from './ThemeCard/ThemeCard';

class Theme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coreElements: [
                {
                    title: "Human",
                    description: "Humans as living objects are able to strengthen the emotional aspects of photography.",
                    imagePath: "element-photo1.jpeg"
                },
                {
                    title: "Time",
                    description: "There is a relic of memories that will not be lost by time.",
                    imagePath: "element-photo2.jpeg"
                },
                {
                    title: "Panorama",
                    description: "There is a location that can leave a mark on the viewer.",
                    imagePath: "element-photo3.jpeg"
                }
            ]
        }
        
        this.config = Init.config;
    }

    render() {
        let state = this.state;
        let config = this.config;
        let metadata = this.props.metadata;

        return (
            <div className="theme">
                <h2 className='theme-title'> Core Elements </h2>
                
                <div className="core-elements">
                    {
                        state.coreElements.map( (item, index) => {
                            return (
                                <ThemeCard 
                                    key={index} 
                                    title={item.title} 
                                    description={item.description} 
                                    imagePath={config.imageFolder + item.imagePath} 
                                    metadata={metadata}
                                />
                            );
                        } )
                    }
                </div>
            </div>
        );
    }
}

export default Theme;