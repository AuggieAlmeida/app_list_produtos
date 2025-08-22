import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const listProdutos = [
  {id:1, nome: 'Arroz', preco: 5.99},
  {id:2, nome: 'Feijão', preco: 7.49},
  {id:3, nome: 'Macarrão', preco: 3.49}
]

export default function App() {
  return (
    <View style={styles.container}>
      {listProdutos.map((produto, index) => (
        <View key={produto.id} style={styles.card}>
          <View style={styles.cardLeft}>
            <Text style={styles.cardIndex}>#{produto.id}</Text>
            <Text style={styles.cardText}>{produto.nome}</Text>
          </View>
          <Text style={styles.cardPrice}>
            {produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f6fb',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 40,
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    // Android elevation
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e6eef7',
  },
  cardLeft: {
    flex: 1,
    flexDirection: 'column',
  },
  cardIndex: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
    fontWeight: '600',
  },
  cardText: {
    fontSize: 18,
    color: '#0f172a',
    fontWeight: '700',
  },
  cardPrice: {
    fontSize: 16,
    color: '#2a9d8f',
    fontWeight: '800',
    marginLeft: 12,
  }
});
