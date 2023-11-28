import { useState } from "react";
import { messages } from "./config";

const useLayout = () => {
    const [lang, setLang] = useState('en');
    const languages = Object.keys(messages);

    return {
        languages,
        setLang,
        currentLanguage: lang
    };
};

export default useLayout;