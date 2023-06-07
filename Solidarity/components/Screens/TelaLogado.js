import AsyncStorage, {useAsyncStorage} from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TextInput, Image, Button} from "react-native";
import { stylesGenerics, stylesForm, stylesScreenLogado} from '../../styles/styles';
import foodIcon from '../../midias/icons/foodIcon.png';
import foodListIcon from '../../midias/icons/seeListFood.png';
import userDetailsIcon from '../../midias/icons/userDetailsIcon.png';

const TelaLogado = (props) =>{
  const {navigation} = props;
    const [token, setToken] = useState ('');

    const {getItem} = useAsyncStorage('credencials');

    const loadToken =  async () => {
        const data = await getItem();
        setToken(data);
      };

    useEffect(() => {
        loadToken();
      }, []);

    return(
    <ScrollView>

          <View style={[stylesGenerics.mainContainer, stylesScreenLogado.mainContainer]}>
              
              <TextInput placeholder='Pesquisar' style={[stylesForm.formField, stylesScreenLogado.searchBar]}></TextInput>

              <View style={stylesScreenLogado.optionWrapper}>

                <View style={stylesScreenLogado.optionContainer} onTouchStart={() => navigation.navigate('TelaCadastroComida')}>
                  <Image source={foodIcon} style={stylesScreenLogado.optionIcon}></Image>
                  <Text style={stylesScreenLogado.optionText}>Cadastrar Comida</Text>
                </View>

                <View style={stylesScreenLogado.optionContainer} onTouchStart={() => navigation.navigate('AlterarDadosConta')}> 
                <Image source={userDetailsIcon} style={stylesScreenLogado.optionIcon}></Image>
                  <Text style={stylesScreenLogado.optionText}>Alterar dados da conta</Text>
                </View>

                <View style={stylesScreenLogado.optionContainer} onTouchStart={() => navigation.navigate('TelaVerComidas')}>
                <Image source={foodListIcon} style={stylesScreenLogado.optionIconList}></Image>
                  <Text style={stylesScreenLogado.optionText}>Ver todas comidas</Text>
                </View>
                
              </View>
          </View>
      </ScrollView>
    )
}

export{TelaLogado};