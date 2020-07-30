import React, { useContext } from 'react';
import CustomDropdown from './CustomDropdown';
import { productIssuesMap } from '../utils/constants';
import { WizardContext } from '../context/WizardContext';
import { IDropdownOption } from '@fluentui/react';

const IssueArea = () => {
    const { wizardState } = useContext(WizardContext);
    const { productKey } = wizardState;
    const issuesAreaOptions: IDropdownOption[] = productKey ? productIssuesMap[productKey] : [];

    return (
        <CustomDropdown
            dropdownOptions={issuesAreaOptions}
            label='Select your issue'
            placeholder='Select your issue'
            handleSubmit={() => { }}
        />
    );
}

export default IssueArea;