import React from 'react';
import { Dropdown, IDropdownOption, IDropdownStyles } from '@fluentui/react';

const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 300 } };

interface ICustomDropdownProps {
    label: string;
    dropdownOptions: IDropdownOption[];
    placeholder: string;
    handleSubmit: (product: IDropdownOption) => void;
}

export const CustomDropdown: React.FunctionComponent<ICustomDropdownProps> = ({
    dropdownOptions,
    label,
    placeholder,
    handleSubmit
}) => {
    const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();

    const onChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption | undefined): void => {
        if (item) {
            handleSubmit(item);
        }
        setSelectedItem(item);
    };

    return (
        <Dropdown
            label={label}
            selectedKey={selectedItem ? selectedItem.key : undefined}
            // eslint-disable-next-line react/jsx-no-bind
            placeholder={placeholder}
            onChange={onChange}
            options={dropdownOptions}
            styles={dropdownStyles}
        />
    );
};

export default CustomDropdown;