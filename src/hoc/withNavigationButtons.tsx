import React, { useContext, useState, useEffect } from 'react';
import { PrimaryButton, MessageBar, MessageBarType, DefaultButton } from '@fluentui/react';
import { WizardContext } from '../context/WizardContext';
import { stepNames } from '../utils/constants';

export default (BaseComponent: React.FunctionComponent) => (
    () => {
        const { wizardState, decrementStep, incrementStep } = useContext(WizardContext);
        const { currentStep, productKey, issueArea, user, customerIssueDescription } = wizardState;
        const [error, setError] = useState('');

        useEffect(() => {
            setError('');
        }, [currentStep, productKey, issueArea, user])

        const validate = () => {
            if (stepNames[currentStep] === 'product' && !productKey) {
                setError('Please select a product to continue');
                return;
            }

            if (stepNames[currentStep] === 'issue' && !issueArea) {
                setError('Please select an issue to continue');
                return;
            }

            if (stepNames[currentStep] === 'description' && !customerIssueDescription) {
                setError('Please describe your issue to continue');
                return;
            }

            if (stepNames[currentStep] === 'signin' && !user) {
                setError('Please sign in to continue');
                return;
            }

            incrementStep();
        }

        return (
            <>
                <BaseComponent />
                {
                    error &&
                    <MessageBar
                        className='error'
                        messageBarType={MessageBarType.error}
                        isMultiline={false}
                    >
                        {error}
                    </MessageBar>
                }
                <DefaultButton className='btn__go-back' onClick={decrementStep}>Back</DefaultButton>
                <PrimaryButton className='btn__go-forward' onClick={validate}>Next</PrimaryButton>
            </>
        );
    }
)