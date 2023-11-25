import { FormattedMessage } from 'react-intl';

import classes from './home.module.css'

const Home = () => {
    return (
        <h1>
            <FormattedMessage id="home.title"/>
        </h1>
    );
};

export default Home;