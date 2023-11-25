import { FormattedMessage } from 'react-intl';
import {IntlProvider} from "react-intl";
import en from "./translate/en.json";
import ru from "./translate/ru.json";
import { useState } from 'react';

const messages = {
    en,
    ru
};

const App  = () => {
    const [lang, setLang] = useState('en');
    const langArr = Object.keys(messages);
    return (
        <IntlProvider locale={lang} defaultLocale="en" messages={messages[lang]}>
            <header>
                {langArr.map(locale => (
                    <button
                        disabled={locale === lang}
                        onClick={() => setLang(locale)}
                    >
                        {locale}
                    </button>
                ))}
            </header>
            <main>
                <h1>
                    <FormattedMessage id="home.title"/>
                </h1>
            </main>
            <footer></footer>
        </IntlProvider>
    );
}

export default App;
