import t from '../../config/themeVariables';

const button = {
    padding: t.space/2,
    borderRadius: t.radius,
    flexDirection: 'row',
    justifyContent: 'center',
}

export default {
    btn_default: {
        ...button,
        backgroundColor: 'rgba(255, 255, 255, 0.4)'
    },
    btn_primary: {
        ...button,
        backgroundColor: t.primary
    },
    btn_secondary: {
        ...button,
        backgroundColor: t.secondary
    },
    btn_complementary: {
        ...button,
        backgroundColor: t.complementary
    },
    btn_complementary2: {
        ...button,
        backgroundColor: t.complementary2
    },
    btn_danger: {
        ...button,
        backgroundColor: t.danger
    },
    btn_success: {
        ...button,
        backgroundColor: t.success
    },
    text_button: {
        color: t.white,
        fontWeight: 'bold',
        textAlign: 'center'
    },
}