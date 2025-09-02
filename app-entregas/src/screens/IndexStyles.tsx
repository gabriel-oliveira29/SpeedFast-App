import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  index : {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#00CAFF",
    flexDirection: 'column',
    paddingTop: 70
    },
  
  titulo : {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },

  requests : {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: '#fff',
    width: '100%',
    flex: 1,
    borderTopEndRadius:30,
    borderTopStartRadius:30,
    marginTop: 10,
    marginBlockEnd:142,    
  },

  rodape : {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 1,
 
    paddingVertical: 55,
    backgroundColor: '#00CAFF',
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,

    elevation: 8,
  },

});

export default styles
