import React, { createContext, useReducer } from 'react';
import { IDropdownOption } from '@fluentui/react';

interface IWizardProviderProps {
    children: React.ReactNode
}

interface IWizardState {
    currentStep: number;
    product: string;
    productKey: string | null;
    issueArea: string;
    customerIssueDescription: string;
    subscriptionType: string | null;
}

interface IAction {
    type: string;
    payload?: any
}

const initialState = {
    currentStep: 0,
    product: '',
    productKey: null,
    issueArea: '',
    customerIssueDescription: '',
    subscriptionType: null
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
        case 'set_product':
            return {
                ...state,
                product: action.payload.text,
                productKey: action.payload.key
            }
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
}

export const WizardContext = createContext<IContextState>({
    wizardState: initialState,
    setCurrentStep: () => { },
    incrementStep: () => { },
    decrementStep: () => { },
    setProduct: () => { }
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

    return (
        <WizardContext.Provider value={{
            wizardState,
            setCurrentStep,
            incrementStep,
            decrementStep,
            setProduct
        }}>
            {children}
        </WizardContext.Provider>
    );
}