import t from '../../config/themeVariables';

import RF from "react-native-responsive-fontsize"

const badge = {
    paddingHorizontal: t.space/3,
    backgroundColor: t.primary,
    borderRadius: t.radius,
    color: t.white
}

export default {
    badge: {
        ...badge,
        fontSize: RF(2),
    },
    bigBadge: {
        ...badge,
        paddingHorizontal: t.space,
        paddingVertical: t.space/2,
        fontSize: RF(2)
    }
}