import { Outlet } from "react-router-dom";
import {IntlProvider} from "react-intl";

import { messages } from "./config";
import useLayout from "./useLayout";
import { Header } from "@components";

/**
 * Component responsible for rendering main application layout
 * @returns {JSX.Element}
 */
const Layout  = () => {
    const { languages, setLang, currentLanguage } = useLayout()
    return (
        <IntlProvider locale={currentLanguage} defaultLocale="en" messages={messages[currentLanguage]}>
            <Header 
                languages={languages}
                setLang={setLang}
                currentLanguage={currentLanguage}
            />
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </IntlProvider>
    );
}

export default Layout;
