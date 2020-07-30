import React, { useContext } from 'react';
import CustomDropdown from './CustomDropdown';

import { productOptions } from '../utils/constants';
import { WizardContext } from '../context/WizardContext';
import withNavigationButtons from '../hoc/withNavigationButtons';
import ContentHeading from './ContentHeading';

const ProductSelector = () => {
    const { wizardState, setProduct } = useContext(WizardContext);
    const { productKey, product } = wizardState;

    return (
        <>
            <ContentHeading text='Which product do you have?' />
            <CustomDropdown
                dropdownOptions={productOptions}
                label='Select your product'
                placeholder='Select your product'
                handleSubmit={setProduct}
                selectedItem={{ key: productKey, text: product }}
            />
        </>
    );
}

export default withNavigationButtons(ProductSelector);