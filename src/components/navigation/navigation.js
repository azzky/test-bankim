import { Link } from "react-router-dom";
import {FormattedMessage} from "react-intl";

import { links } from "./config";

/**
 * Component responsible for rendering navigation links from config
 * @returns {JSX.Element}
 */
const Navigation = () => {
    return (
        <nav>
            <ul>
                {links.map(link => (
                    <li key={link.url}>
                        <Link to={link.url}>
                            <FormattedMessage id={`menu.${link.name}`}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;