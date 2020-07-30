import React, { useContext } from 'react';
import { WizardContext } from '../context/WizardContext';

import './ProgressBar.scss';

const ProgressBar: React.FunctionComponent = () => {
    const { wizardState: { currentStep } } = useContext(WizardContext);

    return (
        <div className='progress-bar'>
            <div className="container">
                <div className="progress">
                    <div className="progress-track"></div>
                    <div id="step0" className={`progress-step ${currentStep === 0 ? 'is-active' : ''} ${currentStep > 0 ? 'is-complete' : ''}`}>
                        Welcome
                    </div>
                    <div id="step1" className={`progress-step ${currentStep === 1 ? 'is-active' : ''} ${currentStep > 1 ? 'is-complete' : ''}`}>
                        Select Product
                    </div>
                    <div id="step2" className={`progress-step ${currentStep === 2 ? 'is-active' : ''} ${currentStep > 2 ? 'is-complete' : ''}`}>
                        Select Issue
                    </div>
                    <div id="step3" className={`progress-step ${currentStep === 3 ? 'is-active' : ''} ${currentStep > 3 ? 'is-complete' : ''}`}>
                        Describe Issue
                    </div>
                    <div id="step4" className={`progress-step ${currentStep === 4 ? 'is-active' : ''} ${currentStep > 4 ? 'is-complete' : ''}`}>
                        Sign In
                    </div>
                    <div id="complete" className={`progress-step ${currentStep === 5 ? 'is-active is-complete' : ''}`}>
                        Complete
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;