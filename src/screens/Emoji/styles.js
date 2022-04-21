import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container__title: {
    fontSize: 14,
    color: 'black',
  },
  container__icon: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    margin: 10,
  },
  container_listIcon: {
    flexDirection: 'row',
  },
  container_listIcon__icon: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    margin: 5,
  },
});
export default styles;
