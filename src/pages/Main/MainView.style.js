import {StyleSheet} from 'react-native'
import {width, height} from '../../assets/base.style'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  webViewContainer: {
    width: width,
    height: height,
    flex: 1,
  },
})

export default styles
