import React from 'react';
import { useId, useBoolean } from '@uifabric/react-hooks';
import { IconButton, PrimaryButton, DefaultButton, DialogType, Dialog, DialogFooter } from '@fluentui/react';

const dialogStyles = { main: { maxWidth: 450 } };
const dialogContentProps = {
    type: DialogType.normal,
    title: 'Restart the wizard',
    closeButtonAriaLabel: 'Close',
    subText: 'Are you sure you want to restart?',
};

export const CustomDialog = (props: { onClick: () => void; }) => {
    const { onClick } = props;
    const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
    const labelId: string = useId('dialogLabel');
    const subTextId: string = useId('subTextLabel');

    const modalProps = React.useMemo(
        () => ({
            titleAriaId: labelId,
            subtitleAriaId: subTextId,
            isBlocking: false,
            styles: dialogStyles,
        }),
        [labelId, subTextId],
    );

    return (
        <>
            <IconButton
                iconProps={{ iconName: 'Refresh' }}
                title="Restart"
                ariaLabel="Restart"
                className='btn__reset'
                onClick={toggleHideDialog}
            />
            <Dialog
                hidden={hideDialog}
                onDismiss={toggleHideDialog}
                dialogContentProps={dialogContentProps}
                modalProps={modalProps}
            >
                <DialogFooter>
                    <PrimaryButton onClick={onClick} text="Reset" />
                    <DefaultButton onClick={toggleHideDialog} text="Cancel" />
                </DialogFooter>
            </Dialog>
        </>
    );
};
