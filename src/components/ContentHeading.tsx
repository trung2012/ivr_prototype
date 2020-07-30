import React from 'react';

import './ContentHeading.scss';

const ContentHeading = (props: { text: string }) => {
    return <h2 className='content-heading'>{props.text}</h2>
}

export default ContentHeading;