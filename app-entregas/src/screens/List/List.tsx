import React from 'react';
import { View} from 'react-native';
import { BalloonRequest } from '../../components/balloonRequest/BalloonRequest';

import { styles } from '../List/ListStyles';

export default function List() {
  return (
    <View style={styles.container}>
      <BalloonRequest 
        companyName="Empresa A"
        coleta="Endereço A"
        entrega="Endereço B"
        veiculo="Moto"
        preco="R$ 25,00"
        onAccept={() => console.log('Aceitar Empresa A')}
        onDecline={() => console.log('Recusar Empresa A')}
      />
      <BalloonRequest 
        companyName="Empresa B"
        coleta="Endereço C"
        entrega="Endereço D"
        veiculo="Carro"
        preco="R$ 50,00"
        onAccept={() => console.log('Aceitar Empresa B')}
        onDecline={() => console.log('Recusar Empresa B')}
      />
      <BalloonRequest 
        companyName="Empresa C"
        coleta="Endereço E"
        entrega="Endereço F"
        veiculo="Van"
        preco="R$ 75,00"
        onAccept={() => console.log('Aceitar Empresa C')}
        onDecline={() => console.log('Recusar Empresa C')}
      />
    </View>
  );
}
