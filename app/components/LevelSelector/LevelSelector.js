import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native'

import Icon from '../Icon'
import WhiteText from '../WhiteText'
import Box from '../Box/Box'

import t from '../../config/themeVariables'
import { levels } from '../../utils/helpers'

const customStyles = StyleSheet.create({
    box: {
        backgroundColor: t.primary,
        flexDirection: 'row',
        marginVertical: 0,
        marginLeft: 0,
        marginRight: t.space/3
    }
});

class LevelSelector extends Component {
    state = {
        selectedLevel: '1'
    }

    changeLevel = selectedLevel => this.setState({selectedLevel}, () => this.props.onchange(selectedLevel));

    render = () => {
        const { selectedLevel } = this.state;

        return (
            <View style={{flexDirection: 'row', marginBottom: t.space/2}}>
                {Object.keys(levels).map(level => {
                    const selected = selectedLevel === level;
                    return (
                        <TouchableOpacity key={`level_${level}`} onPress={() => this.changeLevel(level)}>
                            <Box style={customStyles.box} >
                                <Icon style={{marginRight: t.space/3}} name={selected ? 'check-circle' : 'circle'} size={16} color={selected ? t.complementary2 : 'white'} />
                                <WhiteText>{levels[level]}</WhiteText>
                            </Box>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}

export default LevelSelector;