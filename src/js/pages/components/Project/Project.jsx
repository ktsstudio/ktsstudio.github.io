import React from 'react';
import cssModules from 'shared/decorators/cssModules';
import styles from './Project.scss';

function Project(props) {
    return (
        <a rel="noopener noreferrer"
           styleName="project"
           target="_blank"
           href={props.link}
           styleName="project"
        >
            <div styleName="project__logo" style={{ backgroundImage: `url(${props.logo})` }} />
            <h2 styleName="project__title">{props.title}</h2>
            <h3 styleName="project__description">{props.description}</h3>
        </a>
    )
}

export default cssModules(Project, styles)