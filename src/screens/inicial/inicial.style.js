import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    marginTop: '5%',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  description: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    backgroundColor: 'white',
    opacity: 0.8,
    borderRadius: 10,
    padding: 10,
    lineHeight: 30,
    textAlign: 'justify',
    marginBottom: 10,
    color: 'black',
  },
  button: {
    backgroundColor: 'purple',
    marginTop: '0%',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
