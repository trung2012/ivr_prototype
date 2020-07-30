import React, { useContext } from 'react';
import { PrimaryButton } from '@fluentui/react';

import './Welcome.scss';
import { WizardContext } from '../context/WizardContext';

const Welcome = () => {
    const { incrementStep } = useContext(WizardContext);

    return (
        <div className='welcome'>
            <div className='welcome-header'>
                <h2 className='welcome__heading'>Welcome to the troubleshooting wizard (IVR)</h2>
                <p className='welcome__text'>
                    Please follow the wizard's instructions.
                    This wizard will help us understand your issue and better assist you.
                <br />
                You will be connected to a live support agent afterwards.
                </p>
            </div>
            <PrimaryButton
                text='Start'
                onClick={incrementStep}
            />
        </div>
    );
}

export default Welcome;