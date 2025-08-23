import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

interface Produto {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export default function App() {

  const [listProdutos, setListProdutos] = useState<Produto[]>([])
  const API_URL = 'https://fakestoreapi.com/products'

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    setListProdutos(data);
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {listProdutos.map((produto, index) => (
        <View key={produto.id} style={styles.card}>
          <View style={styles.cardLeft}>
            <Image
              style={styles.cardImage}
              source={{ uri: produto.image || 'https://via.placeholder.com/64x64.png?text=IMG' }}
              resizeMode="cover"
            />
            <View style={styles.cardInfo}>
              <Text style={styles.cardIndex}>#{produto.id}</Text>
              <Text style={styles.cardText}>{produto.title}</Text>
            </View>
          </View>
          <Text style={styles.cardPrice}>
            {produto.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f6fb',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 40,
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e6eef7',
  },
  cardLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#eef3fb',
    borderWidth: 1,
    borderColor: '#e6eef7',
  },
  cardInfo: {
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
