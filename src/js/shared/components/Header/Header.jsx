import React, { PropTypes } from 'react';
import cn from 'classnames';
import cssModules from 'shared/decorators/cssModules';
import styles from './Header.scss';

class Header extends React.Component {
    static propTypes = {
        title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
        color: PropTypes.oneOf(['black', 'white']),
        bgColor: PropTypes.oneOf(['transparent', 'black', 'white']),
        position: PropTypes.oneOf(['absolute', 'static', 'relative', 'fixed']),
        burgerId: PropTypes.string,
        burgerSvgId: PropTypes.string,
        hideTitle: PropTypes.bool,
        caseHeader: PropTypes.bool,
        style: PropTypes.object,
        shadow: PropTypes.bool,
    };

    static defaultProps = {
        color: 'black',
        bgColor: 'transparent',
        position: 'absolute',
        burgerId: '',
        burgerSvgId: '',
        hideTitle: false,
        caseHeader: false,
        shadow: false,
    };

   render() {
        const { color, title, position, burgerId, burgerSvgId, caseHeader, bgColor, shadow, style } = this.props;

        const classes = {
            'header': true,
            'header_case': caseHeader,
            'header_shadow': shadow,
            [`header_${position}`]: true,
            [`header_${color}`]: true,
            [`header_bg-${bgColor}`]: true,
        };

        const titleClasses = cn('header__title', {
            'header__title_hide': this.props.hideTitle || caseHeader,
        });

        const burgerClasses = cn('header__burger', {
            'header__burger_case': caseHeader,
        });

        return (
            <div id={`header${burgerId}`} styleName={cn(classes)} style={style}>
                {title && <div styleName={titleClasses} id="header-title">{title}</div>}
            </div>
        );
    }
}

export default cssModules(Header, styles);
