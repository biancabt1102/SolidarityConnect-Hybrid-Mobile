import { StyleSheet } from 'react-native';


const stylesForm = StyleSheet.create({
    formWrapper: {
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        backgroundColor:"#EDFFFB",
        marginBottom: 180,
        shadowOffset: { width: 0, height: 15 },
        shadowColor: 'black',
        elevation: 5
      },
      formField: {
        width: 340,
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        borderRadius: 15,
        marginBottom: 10,
        backgroundColor: "white"
      },
      textLabel : {
        paddingLeft: 6,
        paddingBottom: 0,
        margin: 0,
        color: "000000",
        fontWeight: "bold",
        fontSize: 15
      },
      textDetalis : {
        paddingLeft: 12,
        fontWeight: "400",
        marginBottom: 3,
        fontSize: 15,
        color: "4F4F4F"
      },
      buttonSubmit: {
        display: "flex",
        width:50,
        alignItems:"center",
        justifyContent: "center",
        paddingBottom: 10,
        marginLeft: 280
      },
      textButton : {
        fontSize: 60,
        color: "000000",
        marginTop: -50
      },
      formButton: {
        backgroundColor: "black",
        color: "white",
        marginTop: 100,
        marginBottom: 30,
        padding: 12,
        borderRadius: 30,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor: "#72B5A5",
        borderWidth: 1
      },
})

const stylesGenerics = StyleSheet.create({
    mainContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      },
      initialPadding: {
        paddingTop : 15
      },
      deleteButton: {
        color: "white",
        marginTop: 0,
        marginBottom: 30,
        padding: 12,
        borderRadius: 30,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor: "#800000",
        borderWidth: 1
      }
})

const stylesImagesForms = StyleSheet.create({
    circleImage: {
        width: 130,
        height: 130,
        backgroundColor: "green",
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 300
      },
      image:{
        width: '100%',
        height: 130,
        borderRadius: 300
      },
      imageIcon :{
        width: 100,
      },
})

const stylesScreenLogado = StyleSheet.create({
    mainContainer: {
      width: "100%",
      backgroundColor: '#f2f2f2'
    },
    searchBar: {
        margin: 15
    },
    optionWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '85%'
    },
    optionContainer:{
        display: "flex",
        backgroundColor: 'white',
        width: 160,
        height: 180,
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 15,
        borderRadius: 30,
        alignItems:'center'
    },
    optionIcon:{
        fontSize: 60,
        marginTop: 20,
        width: 100,
        height: 80,
        textAlign: "center"
    },
    optionText:{
        fontSize: 20,
        marginTop: 13,
        textAlign: "center",
        paddingHorizontal: 5
    },
    optionIconList:{
      fontSize: 60,
      marginTop: 20,
      width: 85,
      height: 80,
      textAlign: "center"
  },
})

const stylesCadastroComidaScreen = StyleSheet.create({
  formWrapper: {
    marginTop: 25,
  },
  formButton: {
    backgroundColor: "black",
    color: "white",
    marginTop: 100,
    marginBottom: 30,
    padding: 12,
    borderRadius: 30,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#72B5A5",
    borderWidth: 1
  },
})

const stylesVerComidasScreen = StyleSheet.create({
  mainWrapper: {
    width: "100%",
    marginLeft: 10,
    height: 230,
  },
  mainBackground:{
    backgroundColor: "#EDFFFB",
  },
  bannerFoods: {
  backgroundColor: 'white',
  marginTop: 10,
  width: "95%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  borderWidth: 1
  },
  imageBannerFood:{
    width: "40%",
    height: '100%',
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
  },
  infosBannerFood:{
    width: "58%",
  },
  infosTittleBannerFood :{
    marginVertical: 10,
    width: '100%',
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: 20
  },
  infosTextBannerFood:{
    marginTop: 15,
    marginHorizontal: 10,
    fontSize: 16
  },
  deleteBannerFood:{
    width: '95%',
    height: 30,
    backgroundColor: 'red',
    fontWeight: '900',
    color: 'white',
    textAlign: 'center',
    paddingTop: 5,
    borderWidth: 1,
    marginBottom: 15
  }
})

export {stylesForm, stylesGenerics, stylesImagesForms, stylesScreenLogado, stylesCadastroComidaScreen, stylesVerComidasScreen}