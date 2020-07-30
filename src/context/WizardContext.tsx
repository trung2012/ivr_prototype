import React, { createContext, useReducer } from 'react';
import { IDropdownOption } from '@fluentui/react';
import { subscriptionType, userAccounts } from '../utils/constants';

interface IWizardProviderProps {
    children: React.ReactNode
}

interface IWizardState {
    currentStep: number;
    product: string;
    productKey: string;
    issueArea: string;
    issueAreaKey: string;
    customerIssueDescription: string;
    subscriptionType: string | null;
    user: { name: string; subscriptionType: subscriptionType; } | null
}

interface IAction {
    type: string;
    payload?: any
}

const initialState = {
    currentStep: 0,
    product: '',
    productKey: '',
    issueArea: '',
    issueAreaKey: '',
    customerIssueDescription: '',
    subscriptionType: null,
    user: null
}

const wizardReducer = (state: IWizardState, action: IAction) => {
    switch (action.type) {
        case 'increment_step':
            return {
                ...state,
                currentStep: state.currentStep + 1
            }
        case 'decrement_step':
            return {
                ...state,
                currentStep: state.currentStep - 1
            }
        case 'set_current_step':
            return {
                ...state,
                currentStep: action.payload
            }
        case 'set_product': {
            if (state.productKey === action.payload.key) {
                return state;
            }

            return {
                ...state,
                product: action.payload.text,
                productKey: action.payload.key
            }
        }
        case 'set_issue_area': {
            if (state.issueArea === action.payload.text) {
                return state;
            }

            return {
                ...state,
                issueAreaKey: action.payload.key,
                issueArea: action.payload.text
            }
        }
        case 'set_issue_desc': {
            if (state.customerIssueDescription === action.payload) {
                return state;
            }

            return {
                ...state,
                customerIssueDescription: action.payload
            }
        }
        case 'sign_in':
            return {
                ...state,
                user: userAccounts[Math.floor(Math.random() * userAccounts.length)]
            }
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

interface IContextState {
    wizardState: IWizardState;
    setCurrentStep: (step: number) => void;
    incrementStep: () => void;
    decrementStep: () => void;
    setProduct: (product: IDropdownOption) => void;
    setIssueArea: (issueArea: IDropdownOption) => void;
    setIssueDescription: (description: string) => void;
    signIn: () => void;
    reset: () => void;
}

export const WizardContext = createContext<IContextState>({
    wizardState: initialState,
    setCurrentStep: () => { },
    incrementStep: () => { },
    decrementStep: () => { },
    setProduct: () => { },
    setIssueArea: () => { },
    setIssueDescription: () => { },
    signIn: () => { },
    reset: () => { }
});

export const WizardProvider: React.FunctionComponent<IWizardProviderProps> = ({ children }) => {
    const [wizardState, dispatch] = useReducer(wizardReducer, initialState);

    const setCurrentStep = (step: number) => {
        dispatch({ type: 'set_current_step', payload: step });
    }

    const incrementStep = () => {
        dispatch({ type: 'increment_step' });
    }

    const decrementStep = () => {
        dispatch({ type: 'decrement_step' });
    }

    const setProduct = (product: IDropdownOption) => {
        dispatch({ type: 'set_product', payload: product });
    }

    const setIssueArea = (issueArea: IDropdownOption) => {
        dispatch({ type: 'set_issue_area', payload: issueArea });
    }

    const setIssueDescription = (description: string) => {
        dispatch({ type: 'set_issue_desc', payload: description });
    }

    const signIn = () => {
        dispatch({ type: 'sign_in' });
    }

    const reset = () => {
        dispatch({ type: 'reset' });
    }

    return (
        <WizardContext.Provider value={{
            wizardState,
            setCurrentStep,
            incrementStep,
            decrementStep,
            setProduct,
            setIssueArea,
            setIssueDescription,
            signIn,
            reset
        }}>
            {children}
        </WizardContext.Provider>
    );
}