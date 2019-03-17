import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.secundary,
      alignItems: "center"
    },
  
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: metrics.basePadding * 2
    },
  
    title: {
      fontSize: 32,
      color: colors.white,
      fontWeight: "bold"
    },
  
    description: {
      color: colors.white,
      fontSize: 14,
      lineHeight: 20,
      marginTop: metrics.baseMargin / 2,
      textAlign: "center"
    },
  
    form: {
      marginTop: metrics.baseMargin,
      alignSelf: "stretch"
    },
  
    input: {
      height: 50,
      backgroundColor: colors.white,
      borderRadius: metrics.baseRadius,
      paddingHorizontal: metrics.basePadding
    },
  
    button: {
      height: 50,
      backgroundColor: colors.blueSkyLight,
      borderRadius: metrics.baseRadius,
      paddingHorizontal: metrics.basePadding,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: metrics.baseMargin,
    },
  
    buttonText: {
      color: colors.white,
      fontWeight: 'bold',
      fontSize: 14,
    },
  
    footer: {
      paddingBottom: metrics.basePadding,
    },
  
    footerLink: {
      color: colors.white,
      fontWeight: 'bold',
      fontSize: 14,
    },
  
    error: {
      fontWeight: 'bold',
      color: colors.danger,
      alignSelf: 'center',
      marginBottom: 14,
    },
  
    loading: {
      color: colors.darkTransparent,
    }
  });
  
  export default styles;
  