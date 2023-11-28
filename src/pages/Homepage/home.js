import { FormattedMessage } from 'react-intl';
import { HypothecForm } from '@components/hypothecForm';

const Home = () => {

    return (
        <>
            <h1>
                <FormattedMessage id="ipotekaForm.title"/>
            </h1>
            <HypothecForm/>
        </>
    );
};

export default Home;