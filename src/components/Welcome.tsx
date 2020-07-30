import React, { useContext } from 'react';
import { PrimaryButton } from '@fluentui/react';

import './Welcome.scss';
import { WizardContext } from '../context/WizardContext';
import ContentHeading from './ContentHeading';

const Welcome = () => {
    const { incrementStep } = useContext(WizardContext);

    return (
        <div className='welcome'>
            <div className='welcome-header'>
                <ContentHeading text='Welcome to the troubleshooting wizard (IVR)' />
                <p className='welcome__text'>
                    Please follow the wizard's instructions.
                    This wizard will help us understand your issue correctly and better assist you.
                <br />
                    You will be connected to a live support agent at the end.
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