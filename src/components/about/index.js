import React from 'react'

import { LogoTelegram, LogoTwitter } from "../logos";
import './styles.css'

const About = () => {
    return (
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
                Следи за новостями:
                <LogoTwitter className="svg-small"/>
                <LogoTelegram className="svg-small"/>
                <br/>
                Присоединяйся к общению:
                <LogoTelegram className="svg-small"/>
            </p>
        </div>
    )
}

export default About;