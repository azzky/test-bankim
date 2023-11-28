import { LangSwitcher, Navigation } from '@components';

const Header = ({
    languages,
    setLang,
    currentLanguage
}) => {
    return (
        <header>
            <Navigation/>
            <LangSwitcher
                languages={languages}
                setLang={setLang}
                currentLanguage={currentLanguage}
            />
        </header>
    )
};

export default Header;