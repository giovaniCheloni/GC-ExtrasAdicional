import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,    
  },
  title: {
    marginTop: '8%',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.DarkBlue,
  },
  description: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    backgroundColor: COLORS.White,
    opacity: 0.9,
    borderRadius: 10,
    padding: 15,
    lineHeight: 30,
    textAlign: 'justify',
    marginBottom: 10,
    color: COLORS.DarkBlue,
  },
  button: {
    backgroundColor: COLORS.DarkBlue,
    borderColor: COLORS.Golden,
    borderWidth: 1,    
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: COLORS.LightBlue,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
