/**
 * Component responsible for change of localization
 * @param props
 * @param {Array} props.languages all the languages array
 * @param {String} props.currentLanguage selected language
 * @param {Function} props.setLang callback to change language
 * @returns {JSX.Element}
 */
const LangSwitcher = ({
    languages,
    setLang,
    currentLanguage
}) => {
    return (
        <div>
            {languages.map(locale => (
                <button
                    key={locale}
                    disabled={locale === currentLanguage}
                    onClick={() => setLang(locale)}
                >
                    {locale}
                </button>
            ))}
        </div>
    );
};

export default LangSwitcher;