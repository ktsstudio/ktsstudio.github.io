import React from 'react';
import PageHeader from 'shared/components/Header/Header' ;
import cssModules from 'shared/decorators/cssModules';
import styles from './Head.scss';

function Header() {
    const link = <a rel="noopener noreferrer" target="_blank" href="https://ktsstudio.com">Студия KTS</a>;

    return (
        <div>
            <div styleName="head">
                <PageHeader color="white" title={link} />
                <div styleName="head__container">
                    <div styleName="head__wrapper">
                        <div styleName="head__logo" />
                        <h1 styleName="head__title">
                            Мы — команда экспертов<br />
                            в&nbsp;разработке&nbsp;веб-сервисов,<br />
                            a это наши opensource проекты:
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cssModules(Header, styles)