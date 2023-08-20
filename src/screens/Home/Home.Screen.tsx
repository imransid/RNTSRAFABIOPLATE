import React, { useState, type FC } from 'react';
import { Image, Text, View, StyleSheet, TextInput } from 'react-native';
import { useGetAllProductsQuery, useGetSingleProductQuery, useGetAllUsersQuery } from '@/services/ProductsApi';
import { ScrollView } from 'react-native-gesture-handler';
import { ProductData } from '@/types/Products.types';

export const HomeScreen: FC = () => {

  const [inputValue, setInputValue] = useState("");

  const { data, isLoading, error } = useGetAllUsersQuery();
  //const { data, isLoading, error } = useGetAllProductsQuery();
  const {
    data: singleProduct,
    error: isError,
    isLoading: isSingleProductError
  } = useGetSingleProductQuery(inputValue);


  if (isLoading) return <View><Text>Loading</Text></View>
  if (error) return <View><Text>Error !</Text></View>


  const ListData = ({ products }: ProductData) => {

    return (
      products?.map(item => {

        return (
          <View style={styles.container} key={item.id}>
            {
              item?.images[4] && <Image
                style={styles.tinyLogo}
                source={{
                  uri: item?.images[4],
                }}
              />
            }
            <Text>{item.title}</Text>
          </View>
        )
      })
    );
  }


  return (
    <View>
      <View style={styles.searchView}>
        <Text >Search</Text>
        <TextInput placeholder='Enter Search' style={styles.inputBox} value={inputValue} onChangeText={setInputValue} />
      </View>
      <View style={styles.searchView}>
        <Text >Create</Text>
        <TextInput placeholder='Enter Search' style={styles.inputBox} value={inputValue} onChangeText={setInputValue} />
      </View>
      <View style={styles.searchView}>
        <Text >Update</Text>
        <TextInput placeholder='Enter Search' style={styles.inputBox} value={inputValue} onChangeText={setInputValue} />
      </View>
      <View style={styles.searchView}>
        <Text >Delete</Text>
        <TextInput placeholder='Enter Search' style={styles.inputBox} value={inputValue} onChangeText={setInputValue} />
      </View>
      <ScrollView>
        {
          singleProduct ? <ListData products={singleProduct.products ?? []} total={0} skip={0} limit={0} /> : <ListData products={data?.products ?? []} total={0} skip={0} limit={0} />
        }
      </ScrollView>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  searchView: {
    width: '100%',
    height: 108,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputBox: {
    borderColor: '#000',
    borderWidth: 2,
    width: '80%'
  }
});

export default HomeScreen;
