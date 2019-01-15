import t from '../config/themeVariables'

export default {
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {
        showIcon: true,
        style: {
            backgroundColor: t.secondary
        },
        indicatorStyle: {
            backgroundColor: t.complementary,
            top: 0
        }
    }
}