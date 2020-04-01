import { createGlobalStyle } from 'styled-components';

import fonts from './fonts';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap');
    
    html {
        font-size: 62.5%;
    }
    
    body {
        font-family: 'Merriweather', serif;
        font-size: ${fonts.sizes.normal};
        background-color: ${colors.white};
        color: ${colors.black};
        line-height: ${fonts.lineHeight.normal};
        font-weight: 200;
    }

    a {
        color: ${colors.black};

        &:hover {
            color: ${colors.blue};
            text-decoration: none;
        }
    }
`;

export default GlobalStyle;