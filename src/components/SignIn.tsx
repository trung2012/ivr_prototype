import React, { useState, useContext } from 'react';
import withNavigationButtons from '../hoc/withNavigationButtons';
import { PrimaryButton, Text, Spinner, SpinnerSize, Icon } from '@fluentui/react';
import ContentHeading from './ContentHeading';

import './SignIn.scss';
import { WizardContext } from '../context/WizardContext';
import { subscriptionTypeText } from '../utils/constants';

const SignIn = () => {
    const { wizardState: { user }, signIn } = useContext(WizardContext);
    const [isSigningIn, setIsSigningIn] = useState(false);

    const handleClick = () => {
        setIsSigningIn(true);

        setTimeout(() => {
            signIn()

            setIsSigningIn(false);
        }, 2000)
    }

    if (isSigningIn) return <Spinner label='Signing you in' size={SpinnerSize.large} />

    return (
        <>
            {
                user
                    ?
                    <div className='user-info'>
                        <Text className='sign-in__header' nowrap block variant='xLarge' >
                            Account Information
                        </Text>
                        <div className='sign-in__text'>
                            <Icon iconName='Contact' style={{ marginRight: 5 }} />
                            <span>Name: </span>
                            <strong><span>{user.name}</span></strong>
                        </div>
                        <div className='sign-in__text'>
                            <Icon iconName='EntitlementRedemption' style={{ marginRight: 5 }} />
                            <span>Subscription Type: </span>
                            <strong>{subscriptionTypeText[user.subscriptionType]}</strong>
                        </div>
                    </div>
                    : <>
                        <ContentHeading text='Sign in' />
                        <Text className='sign-in__header' nowrap block>
                            Please sign in to finish the wizard
                        </Text>
                        <PrimaryButton
                            text='Sign in'
                            onClick={handleClick}
                        />
                    </>
            }

        </>
    );
}

export default withNavigationButtons(SignIn);