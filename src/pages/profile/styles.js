import { StyleSheet } from 'react-native';
import { colors, metrics} from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },

    loading: {
        color: colors.primary,
    },

    loadContainer: {
        marginTop: metrics.baseMargin,
    }

});

export default styles;

