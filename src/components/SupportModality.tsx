import React from 'react';
import { FontIcon, mergeStyles, mergeStyleSets } from '@fluentui/react';

import './SupportModality.scss'

interface IModalityProps {
    iconName: string;
    waitTime: number;
    modalityName: string;
    onClick: () => void
}

const iconClass = mergeStyles({
    fontSize: 60
});

const classNames = mergeStyleSets({
    deepSkyBlue: [{ color: '#0078d4' }, iconClass],
    greenYellow: [{ color: 'greenyellow' }, iconClass],
    salmon: [{ color: 'salmon' }, iconClass],
});


const SupportModality: React.FC<IModalityProps> = ({ iconName, waitTime, modalityName, onClick }) => {
    const waitTimeClass = `wait-time-number wait-time-number${waitTime < 10 ? '--good' : '--bad'}`

    return (
        <div className='support-modality-card' onClick={onClick}>
            <div className='icon'>
                <FontIcon iconName={iconName} className={classNames.deepSkyBlue} />
            </div>
            <div className='modality-name'><strong>{modalityName}</strong></div>
            <span>Wait time: </span>
            <span className={waitTimeClass}>{waitTime}</span>
            <span> minutes</span>
        </div>
    );
}

export default SupportModality;