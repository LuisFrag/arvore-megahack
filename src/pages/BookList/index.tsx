import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const cards = [
  {
    id: '1',
    content: {
      title: 'João, Preste atenção!',
      image:
        'http://books.google.com/books/content?id=KCITBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71bd96H4np0QbZStR_SIaVWLXKlgU5d0caQodgQj-iKcsv3xGpZOLHSEGsmbPSJHniC543gxMx7W-x9Acu766tyQyYmaE3uNq1Gb7IEQlH0vp6C3pj94PFIoP0DgAxYGf-dy5KM&source=gbs_api',
      type: 'Fisico',
      countPages: 16,
    },
    readPages: 8,
  },
  {
    id: '2',
    content: {
      title: 'O Pequeno Príncipe',
      image:
        'http://books.google.com/books/content?id=lKmLDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      type: 'Fisico',
      countPages: 16,
    },
    readPages: 8,
  },
  {
    id: '3',
    content: {
      title: 'Vovó viaja e não sai de casa',
      image:
        'http://books.google.com/books/content?id=KmVlDQAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
      type: 'Fisico',
      countPages: 16,
    },
    readPages: 8,
  },
  {
    id: '4',
    content: {
      title: 'Almanaque Pró games Minecraft',
      image:
        'http://books.google.com/books/content?id=D_KFDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      type: 'Fisico',
      countPages: 16,
    },
    readPages: 8,
  },
];

const BookList = () => {
  const navigation = useNavigation();
  function handleNavigateToDetail(pointId: number) {
    navigation.navigate('Details', { pointId });
  }

  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cards.map(book => (
            <TouchableOpacity
              key={String(book?.id)}
              style={styles.item}
              onPress={() => handleNavigateToDetail(Number(book.id))}
            >
              <View style={styles.grid}>
                <Image
                  style={styles.thumbnail}
                  source={{ uri: book.content.image }}
                />
                <View style={styles.itemsContainer}>
                  <Text style={styles.title}>{book?.content.title}</Text>
                  <Text style={styles.textPages}>
                    Número de páginas: {book?.content.countPages}
                  </Text>
                  <Text style={styles.textReadPages}>
                    Faltam apenas {book?.readPages} páginas para terminar
                  </Text>
                </View>
              </View>
              <View style={styles.grid}>
                <Progress.Bar
                  progress={0.9}
                  width={250}
                  height={20}
                  style={styles.progressBar}
                  color={'#58A700'}
                />
                <Text style={styles.progressBarText}>90%</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    height: 220,
    width: 320,
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 0,
    marginRight: 0,
    marginTop: 10,
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  thumbnail: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  itemsContainer: {
    marginLeft: 12,
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginTop: 5,
    color: '#1453A3',
    fontFamily: 'RockoFLF-Bold',
  },
  grid: {
    flexDirection: 'row',
  },
  textPages: {
    color: '#1899D6',
    fontFamily: 'RockoFLF-Bold',
    fontSize: 15,
    marginTop: 10,
  },
  textReadPages: {
    color: '#FF4B4B',
    fontFamily: 'RockoFLF-Bold',
    fontSize: 15,
    marginTop: 10,
  },
  progressBar: {
    borderRadius: 14,
    backgroundColor: '#E5E5E5',
    borderWidth: 0,
    marginBottom: 15,
  },
  progressBarText: {
    color: '#1453A3',
    fontFamily: 'RockoFLF-Bold',
    fontSize: 18,
    marginLeft: 10,
  },
});
export default BookList;
