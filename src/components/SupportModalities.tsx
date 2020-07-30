import React, { useContext, useState } from 'react';
import { WizardContext } from '../context/WizardContext';
import ContentHeading from './ContentHeading';
import { subscriptionTypeText, waitTimes, modalities } from '../utils/constants';
import SupportModality from './SupportModality';
import { capitalize } from '../utils/stringUtils';

import './SupportModalities.scss';
import { Spinner, SpinnerSize } from '@fluentui/react';

const SupportModalities = () => {
    const { wizardState } = useContext(WizardContext);
    const { user, product, issueArea, customerIssueDescription } = wizardState;
    const [isConnectingToAgent, setIsConnectingToAgent] = useState(false);
    const [modalityChosen, setModalityChosen] = useState('');
    const modalityOptions = modalities[user!.subscriptionType];

    if (isConnectingToAgent) {
        return (
            <>
                <Spinner label='Connecting you to an agent...' size={SpinnerSize.large} />
                <h4>User information</h4>
                <p>Name: {user!.name}</p>
                <p>Subscription type: {subscriptionTypeText[user!.subscriptionType]}</p>
                <p>Product: {product}</p>
                <p>Issue area: {issueArea}</p>
                <p>Problem description: {customerIssueDescription}</p>
                <p>Modality chosen: {modalityChosen}</p>
            </>
        )
    }

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
                        onClick={() => {
                            setModalityChosen(option);
                            setIsConnectingToAgent(true);
                        }}
                    />
                })
            }
            <p className='cta'>Please select your preferred option</p>
        </>
    );
}

export default SupportModalities;