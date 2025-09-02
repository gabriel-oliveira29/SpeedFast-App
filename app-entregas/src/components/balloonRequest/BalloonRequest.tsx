import React from 'react';
import { View , Text, Pressable} from 'react-native';

import { styles } from './BallonRequestStyles';

interface BalloonRequestProps {
  companyName: string;
  coleta: string;
  entrega: string;
  veiculo: string;
  preco: string;
  onAccept: () => void;
  onDecline: () => void;
}

export function BalloonRequest({
  companyName,
  coleta,
  entrega,
  veiculo,
  preco,
  onAccept,
  onDecline,
}: BalloonRequestProps) {
  return (
    <View style={styles.balloon}>
      <Text style={styles.companyName}>{companyName}</Text>
      <View style={styles.dados}>
        <Text style={styles.textDados}>Coleta: {coleta}</Text>
        <Text style={styles.textDados}>Entrega: {entrega}</Text>
        <Text style={styles.textDados}>Veículo: {veiculo}</Text>
        <Text style={styles.textDados}>Preço: {preco}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.buttonAceitar,
            pressed && styles.buttonPressed,
          ]}
          onPress={onAccept}
        >
          <Text style={styles.buttonText}>Aceitar</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.buttonRecusar,
            pressed && styles.buttonPressed,
          ]}
          onPress={onDecline}
        >
          <Text style={styles.buttonText}>Recusar</Text>
        </Pressable>
      </View>
    </View>
  );
}
