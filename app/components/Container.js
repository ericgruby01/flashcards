import React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';

import t from '../config/themeVariables';

const containerStyle = {
    flex: 1,
    backgroundColor: t.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: t.space
}

const scrollContainerStyle = {
    flex: 1,
    backgroundColor: t.primary,
    padding: t.space
}

const Container = ({ children, scroll, style, onScroll, contentContainerStyle }) =>  scroll ? (
    <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', backgroundColor: t.primary }} behavior="padding" enabled>
        <ScrollView onScroll={onScroll} style={[scrollContainerStyle, style]} contentContainerStyle={[{flexGrow: 1, justifyContent: 'center'}, contentContainerStyle]}>
            {children}
        </ScrollView>
    </KeyboardAvoidingView>
) : (
    <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', backgroundColor: t.primary }} behavior="padding" enabled>
        <View style={[containerStyle, style]}>
            {children}
        </View>
    </KeyboardAvoidingView>
)

export default Container;