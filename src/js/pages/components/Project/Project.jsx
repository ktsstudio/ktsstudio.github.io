import React from 'react';
import cn from 'classnames';
import cssModules from 'shared/decorators/cssModules';
import styles from './Project.scss';

function Project(props) {
    const logoClasses = cn({
        'project__logo': true,
        [`project__logo_${props.logo}`]: props.logo,
    });

    return (
        <a rel="noopener noreferrer"
           styleName="project"
           target="_blank"
           href={props.link}
           styleName="project"
        >
            <div styleName={logoClasses} />
            <h2 styleName="project__title">{props.title}</h2>
            <h3 styleName="project__description">{props.description}</h3>
        </a>
    )
}

export default cssModules(Project, styles)