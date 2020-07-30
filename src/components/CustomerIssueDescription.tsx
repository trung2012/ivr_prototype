import React, { useContext, useEffect } from 'react';
import withNavigationButtons from '../hoc/withNavigationButtons';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import ContentHeading from './ContentHeading';
import { WizardContext } from '../context/WizardContext';
import { ITextFieldStyles } from '@fluentui/react';

const textFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 300 } };
const stackTokens = { childrenGap: 15 };


export const CustomerIssueDescription: React.FunctionComponent = () => {
    const { wizardState, setIssueDescription } = useContext(WizardContext);
    const { customerIssueDescription } = wizardState;

    const [textFieldValue, setTextFieldValue] = React.useState(customerIssueDescription);

    useEffect(() => {
        setTextFieldValue(customerIssueDescription);
    }, [customerIssueDescription])

    const onChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        setTextFieldValue(newValue || '');
    }

    return (
        <>
            <ContentHeading text='Please describe your issue (as detailed as possible)' />
            <Stack tokens={stackTokens}>
                <TextField
                    label="Describe your issue"
                    value={textFieldValue}
                    onChange={onChange}
                    styles={textFieldStyles}
                    onBlur={() => setIssueDescription(textFieldValue)}
                    multiline
                    rows={5}
                />
            </Stack>
        </>
    );
};


export default withNavigationButtons(CustomerIssueDescription);