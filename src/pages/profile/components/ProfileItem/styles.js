import { StyleSheet } from 'react-native';
import { colors, metrics} from '../../../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },

    loading: {
        color: colors.primary,
    },

    loadContainer: {
        marginTop: metrics.baseMargin,
    },

    header: {
        height: 85,   
        backgroundColor: colors.blueSky,
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 1,
    },

    content: {
        height: 90,   
        justifyContent: 'space-around',
        alignItems: "center",
        flexDirection: 'row', 
        backgroundColor: colors.white,
    },  

    contentSon: {
        height: 80,   
        backgroundColor: colors.blueSkyLight,
        justifyContent: 'center',
        alignItems: "center", 
        flex: 1,
        margin: 2,
        borderRadius: metrics.baseRadius,
    },

    contentSolo: {
        height: 80,   
        backgroundColor: colors.blueSkyLight,
        justifyContent: 'center',
        alignItems: "center", 
        flex: 1,
        margin: 2,
        borderRadius: metrics.baseRadius,
    },
    
    title: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 26,
    },

    titleSon: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 14,
    },

    text: {
        color: '#777',
        fontSize: 12,
    },

    platform: {
        color: colors.white, 
    }
});

export default styles;
