import React, { useContext } from 'react';
import ProgressBar from './ProgressBar';
import Welcome from './Welcome';
import ProductSelector from './ProductSelector';
import IssueArea from './IssueArea';
import CustomerIssueDescription from './CustomerIssueDescription';
import SignIn from './SignIn';
import SupportModalities from './SupportModalities';
import { WizardContext } from '../context/WizardContext';
import { PrimaryButton, IconButton } from '@fluentui/react';

import './Wizard.scss';

const Wizard = () => {
    const { wizardState, setCurrentStep, incrementStep, decrementStep } = useContext(WizardContext);
    const { currentStep } = wizardState;

    const renderContent = () => {
        switch (currentStep) {
            case 1:
                return <ProductSelector />
            case 2:
                return <IssueArea />
            case 3:
                return <CustomerIssueDescription />
            case 4:
                return <SignIn />
            case 5:
                return <SupportModalities />
            default:
                return <Welcome />
        }
    }

    return (
        <div className='wizard'>
            <h1>Troubleshooting Wizard</h1>
            <ProgressBar />
            <div className='main-content'>
                {
                    renderContent()
                }
            </div>
            {
                currentStep > 0 &&
                <>
                    <PrimaryButton className='btn__go-back' onClick={decrementStep}>Back</PrimaryButton>
                    <PrimaryButton className='btn__go-forward' onClick={incrementStep}>Next</PrimaryButton>
                    <IconButton
                        iconProps={{ iconName: 'Refresh' }}
                        title="Restart"
                        ariaLabel="Restart"
                        className='btn__reset'
                        onClick={() => setCurrentStep(0)}
                    />
                </>
            }
        </div>
    );
}

export default Wizard;