import React, { useContext } from 'react';
import CustomDropdown from './CustomDropdown';
import { productIssuesMap } from '../utils/constants';
import { WizardContext } from '../context/WizardContext';
import { IDropdownOption } from '@fluentui/react';
import withNavigationButtons from '../hoc/withNavigationButtons';
import ContentHeading from './ContentHeading';

const IssueArea = () => {
    const { wizardState, setIssueArea } = useContext(WizardContext);
    const { productKey, issueAreaKey, issueArea } = wizardState;
    const issuesAreaOptions: IDropdownOption[] = productKey ? productIssuesMap[productKey] : [];

    return (
        <>
            <ContentHeading text='What issue are you having with the product?' />
            <CustomDropdown
                dropdownOptions={issuesAreaOptions}
                label='Select your issue'
                placeholder='Select your issue'
                handleSubmit={setIssueArea}
                selectedItem={{ key: issueAreaKey, text: issueArea }}
            />
        </>
    );
}

export default withNavigationButtons(IssueArea);