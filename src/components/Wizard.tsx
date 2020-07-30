import React, { useContext } from 'react';
import ProgressBar from './ProgressBar';
import Welcome from './Welcome';
import ProductSelector from './ProductSelector';
import IssueArea from './IssueArea';
import CustomerIssueDescription from './CustomerIssueDescription';
import SignIn from './SignIn';
import SupportModalities from './SupportModalities';
import { WizardContext } from '../context/WizardContext';

import './Wizard.scss';
import { CustomDialog } from './CustomDialog';

const Wizard = () => {
    const { wizardState, setCurrentStep, reset } = useContext(WizardContext);
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
                <div className='main-content__center'>
                    {
                        renderContent()
                    }
                </div>
            </div>
            {
                currentStep > 0 &&
                <CustomDialog onClick={
                    () => {
                        setCurrentStep(0);
                        reset()
                    }
                } />
            }
        </div>
    );
}

export default Wizard;