import React, { useContext, useState } from 'react';
import { WizardContext } from '../context/WizardContext';
import ContentHeading from './ContentHeading';
import { subscriptionTypeText, waitTimes, modalities } from '../utils/constants';
import SupportModality from './SupportModality';
import { capitalize } from '../utils/stringUtils';

import './SupportModalities.scss';
import { Spinner, SpinnerSize } from '@fluentui/react';

const SupportModalities = () => {
    const { wizardState: { user } } = useContext(WizardContext);
    const [isConnectingToAgent, setIsConnectingToAgent] = useState(false);
    const modalityOptions = modalities[user!.subscriptionType];

    if (isConnectingToAgent) return <Spinner label='Connecting you to an agent...' size={SpinnerSize.large} />

    return (
        <>
            <ContentHeading text='Connect to agent' />
            <span>Hello </span>
            <strong>{user && user.name},</strong>
            <p className='modality-desc'>
                As a {subscriptionTypeText[user!.subscriptionType]} user, you have access to the support options below:
            </p>
            {
                modalityOptions.map((option, index) => {
                    return <SupportModality
                        key={index}
                        iconName={capitalize(option)}
                        waitTime={waitTimes[option]}
                        modalityName={capitalize(option)}
                        onClick={() => { setIsConnectingToAgent(true) }}
                    />
                })
            }
            <p className='cta'>Please select your preferred option</p>
        </>
    );
}

export default SupportModalities;