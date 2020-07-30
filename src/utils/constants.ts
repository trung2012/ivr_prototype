import { IDropdownOption } from "@fluentui/react";

export const waitTimes = {
    chat: '5 minutes',
    call: '10 minutes'
};

export enum subscriptionType {
    Perpetual = 'perpetual',
    Subscription = 'subscription'
}

export const productOptions = [
    { key: 'windows', text: 'Windows' },
    { key: 'm365', text: 'Office & Microsoft 365 (for Home)' },
    { key: 'm365_other', text: 'Office for Mac, iOS, or Android' },
    { key: 'xbox', text: 'Xbox' },
    { key: 'surface', text: 'Surface' },
];

interface IProductIssueMap {
    [key: string]: IDropdownOption[]
}

export const productIssuesMap: IProductIssueMap = {
    'windows': [
        { key: 'subscription', text: 'Subscription' },
        { key: 'billing', text: 'Billing' },
        { key: 'password', text: 'Password reset/Recovery' },
        { key: 'activation', text: 'Windows Activation error/Product key' },
        { key: 'setup', text: 'Download, install, update, setup' },
        { key: 'edge', text: 'Internet Explorer or Edge' },
        { key: 'network', text: 'Network & connectivity' },
        { key: 'drivers', text: 'Devices and drivers' },
        { key: 'support', text: 'Technical Support' },
        { key: 'protection', text: 'Protecting my PC' },
        { key: 'gaming', text: 'PC gaming & Xbox app' },
        { key: 'license', text: 'Buying and licensing' },
    ],
    'surface': [
        { key: 'power', text: 'Won\'t power on' },
        { key: 'screen', text: 'Cracked screen' },
        { key: 'accessories', text: 'Accessories' },
        { key: 'headphones', text: 'Surface Headphones and Earbuds' },
        { key: 'hardware', text: 'Hardware problem (e.g., screen, battery, audio, keyboard' },
        { key: 'warranty', text: 'Warranty and Services' },
        { key: 'performance', text: 'System performance' },
        { key: 'network', text: 'Connecting to the Internet or a network' },
        { key: 'password', text: 'Password reset' },
        { key: 'other', text: 'Other' },
    ],
    'xbox': [
        { key: 'password', text: 'Password reset/Recovery' },
        { key: 'account', text: 'Other account issues' },
        { key: 'payment', text: 'Payment & purchases' },
        { key: 'billing', text: 'Other billing issues' },
        { key: 'apps', text: 'Games & apps' },
        { key: 'win10', text: 'Xbox on Windows 10' },
        { key: 'xboxlive', text: 'Xbox Live subscriptions' },
        { key: 'hardware', text: 'Hardware' },
        { key: 'support', text: 'Technical Support' },
        { key: 'network', text: 'Network & connectivity' },
        { key: 'accessibility', text: 'Accessibility' },
    ],
    'm365': [
        { key: 'activation', text: 'Windows Activation error/ Product key' },
        { key: 'password', text: 'Password reset/Recovery' },
        { key: 'billing', text: 'Billing' },
        { key: 'subscription', text: 'Subscription' },
        { key: 'cancel', text: 'Cancel subscription' },
        { key: 'setup', text: 'Download, install, update, setup' },
        { key: 'support', text: 'Technical Support' },
        { key: 'license', text: 'Buying and licensing' },
    ],
    'm365_other': [
        { key: 'support', text: 'Technical Support' },
        { key: 'install', text: 'Installation & upgrade' },
        { key: 'activation', text: 'Windows Activation error/ Product key' },
        { key: 'support', text: 'Technical Support' },
    ]
}

export const userAccounts = [
    { id: 1, name: 'Trung', subscriptionType: subscriptionType.Perpetual },
    { id: 2, name: 'Kapil', subscriptionType: subscriptionType.Subscription }
]