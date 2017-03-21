import CSSModules from 'react-css-modules';
import { defaults } from 'lodash';
import hoistNonReactStatics from 'hoist-non-react-statics';

export default function cssModulesWithDefaults(Component, styles, options) {
    const settings = defaults(options, { allowMultiple: true });

    const EnhancedComponent = CSSModules(Component, styles, settings);

    return hoistNonReactStatics(EnhancedComponent, Component);
}
