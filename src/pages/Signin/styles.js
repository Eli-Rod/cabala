import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372d62',
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#372d62',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm: {
    backgroundColor: '#fff',
    opacity: 0.5,
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: '14%',
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 17,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  button: {
    backgroundColor: '#1ce9cb',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    borderRadius: 50,
    marginTop: '70%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#000',
    fontSize: 17,
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center'
  },
  registerText: {
    color: '#a1a1a1'
  },
  containerAcessar: {
    flex: 1,
  },
})