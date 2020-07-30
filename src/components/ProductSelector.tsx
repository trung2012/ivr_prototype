import React, { useContext } from 'react';
import CustomDropdown from './CustomDropdown';

import { productOptions } from '../utils/constants';
import { WizardContext } from '../context/WizardContext';

const ProductSelector = () => {
    const { wizardState, setProduct } = useContext(WizardContext);

    console.log(wizardState.product)

    return (
        <CustomDropdown
            dropdownOptions={productOptions}
            label='Select your product'
            placeholder='Select your product'
            handleSubmit={setProduct}
        />
    );
}

export default ProductSelector;