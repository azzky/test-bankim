import { Link, Outlet } from "react-router-dom";
import { useState } from 'react';
import {FormattedMessage, IntlProvider} from "react-intl";


import en from "./translate/en.json";
import ru from "./translate/ru.json";

const messages = {
    en,
    ru
};

const Layout  = () => {
    const [lang, setLang] = useState('en');
    const langArr = Object.keys(messages);
    return (
        <IntlProvider locale={lang} defaultLocale="en" messages={messages[lang]}>
            <header>
                <div>
                    {langArr.map(locale => (
                        <button
                            key={locale}
                            disabled={locale === lang}
                            onClick={() => setLang(locale)}
                        >
                            {locale}
                        </button>
                    ))}
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                <FormattedMessage id="menu.home"/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/products">
                                <FormattedMessage id="menu.products"/>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </IntlProvider>
    );
}

export default Layout;
