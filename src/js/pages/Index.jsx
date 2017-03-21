import React from 'react';
import Head from './components/Head/Head';
import Project from './components/Project/Project';
import cssModules from 'shared/decorators/cssModules';
import styles from './Index.scss';

function Index() {
    const link = <a rel="noopener noreferrer" target="_blank" href="https://ktsstudio.com">Студия KTS</a>;
    const projects = [
        {
            title: 'rpmtools',
            description: 'Набор утилит, упрощающих создание rpm-пакетов',
            link: 'https://ktsstudio.github.io/rpmtools/',
            logo: 'rpmtools',
        }
    ];

    return (
        <div styleName="index">
            <Head />
            <div styleName="index__projects">
                {projects.map((item, index) => <Project key={index} {...item} />)}
            </div>
        </div>
    )
}

export default cssModules(Index, styles)