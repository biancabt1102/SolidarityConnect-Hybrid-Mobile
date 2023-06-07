import React from "react";
import { View, Text, Image} from "react-native";
import { stylesImagesForms, stylesVerComidasScreen } from "../../styles/styles";
import iconImage from "../../midias/icons/icon_food.png";

const CardFood = ({item, token}) => {

    async function deleteAlimento() {
        const url = `http://192.168.15.16:8080/solidarityconnect/api/alimento/${item.idAlimento}`;
      
        try {
          const response = await fetch(url, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
      
          if (response.ok) {
            console.log('Alimento removido com sucesso.');
          } else {
            console.log('Erro ao remover alimento.');
          }
        } catch (error) {
          console.log('Ocorreu um erro na requisição:', error);
        }
      }
    return(
        <View style={stylesVerComidasScreen.mainWrapper}>
            <View style={stylesVerComidasScreen.bannerFoods}>
                    <View style={stylesVerComidasScreen.imageBannerFood}>
                    <Image source={iconImage} style={stylesImagesForms.imageIcon}></Image>

                    </View>
                      
                    <View style={stylesVerComidasScreen.infosBannerFood}>
                        <Text style={stylesVerComidasScreen.infosTittleBannerFood}>{item.nomeAlimento}</Text>
                        <Text style={stylesVerComidasScreen.infosTextBannerFood}>
                            Quantidade: {item.quantidadeAlimento} {'\n'}
                            Validade: {item.validadeAlimento} {'\n'}
                            Tipo de alimento: {item.tipoAlimento}{'\n'}
                        </Text>
                    </View>       
                             
                </View>
                <Text style={stylesVerComidasScreen.deleteBannerFood} onPress={deleteAlimento}>EXCLUIR</Text>
        </View>
    )
}

export {CardFood};