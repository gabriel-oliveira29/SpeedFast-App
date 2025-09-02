import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  balloon: {
    width: '95%',
    minHeight: 200, 
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#ccc', 
    padding: 15, 
    marginBottom: 10, 
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, 
  },

  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto', 
    borderTopWidth: 1, 
    borderTopColor: '#eee',
    paddingTop: 10,
  },

  buttonAceitar: {
    flex: 1, 
    backgroundColor: '#4CAF50', 
    paddingVertical: 10,
    marginRight: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonRecusar: {
    flex: 1,
    backgroundColor: '#F44336', 
    paddingVertical: 10,
    marginLeft: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  buttonPressed: {
    opacity: 0.7, 
    transform: [{ scale: 0.95 }], 
  },

  dados: {
    flex: 1, 
    justifyContent: 'space-around',
    marginBottom: 10,
  },

  textDados: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
    color: '#555',
  },
});
