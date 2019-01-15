import React from 'react';
import { Text } from 'react-native';

import styles from './Badge.Style';
const { badge, bigBadge } = styles;

const Badge = ({ text, alignSelf, big }) => (
    <Text style={[big ? bigBadge : badge, {alignSelf}]}>
        {text}
    </Text>
)

export default Badge;