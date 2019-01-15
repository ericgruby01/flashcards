import React from 'react';

import WhiteText from './WhiteText'
import t from '../config/themeVariables';

const EmptyList = props => <WhiteText {...props} size='h3' style={{marginVertical: t.space*1.2, textAlign: 'center'}}>{props.children}</WhiteText>

export default EmptyList;