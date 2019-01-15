import { Dimensions, StyleSheet } from 'react-native';
import t from '../../config/themeVariables';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
    card: {
        height: height/2,
        backfaceVisibility: 'hidden',
        paddingVertical: t.space/2
    }
})