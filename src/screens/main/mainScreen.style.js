import { COLORS } from '../../constants/colors.js';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    position: 'relative',
    color: COLORS.White,
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: '3%',
    textAlign: 'center',
  },
  input: {
    height: 40,
    color: COLORS.DarkBlue,
    backgroundColor: COLORS.White,
    borderColor: COLORS.Golden,
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '60%',
    alignSelf: 'center',
  },
  button: {
    height: 40,
    backgroundColor: COLORS.DarkBlue,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.Golden,
    borderWidth: 2,
    borderRadius: 5,
    width: '60%',
    alignSelf: 'center',
  },
  imgCalculadora: {    
    alignSelf: 'center',       
    width: '30%', // Set width for the image
    height: '15%', // Set height for the image
    borderRadius: 30, // Make the image round
    margin: '5%', // Add some margin above the image
  },
  buttonText: {
    color: COLORS.LightBlue,
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonTextContainer: {
    color: COLORS.DarkBlue,
    fontWeight: 'bold',
    fontSize: 16
  },
  resultContainer: {
    width: '80%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 60,
    padding: 20,
    backgroundColor: COLORS.Golden,
    opacity: 0.8,
    borderColor: COLORS.DarkBlue,
    borderWidth: 2,
    borderRadius: 5,
  }
};

export default styles;
