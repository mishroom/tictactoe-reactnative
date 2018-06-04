import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native'

let DeviceWidth = Dimensions.get('window').width

export default class App extends React.Component {
  renderBoard() {
    let arr = new Array(9)
    let DeviceWidth = Dimensions.get('window').width
    return (
      <View style={styles.grid}>
        <View>
          <GridItem position={1} value={'O'} style={{ marginBottom: 2 }} />
          <GridItem position={2} value={'X'} style={{ marginBottom: 2 }} />
          <GridItem position={3} value={null} style={styles.item} />
        </View>
        <View>
          <GridItem
            position={4}
            value={null}
            style={{ marginBottom: 2, marginLeft: 2 }}
          />
          <GridItem
            position={5}
            value={null}
            style={{ marginBottom: 2, marginLeft: 2 }}
          />
          <GridItem position={6} value={null} style={{ marginLeft: 2 }} />
        </View>
        <View>
          <GridItem
            position={7}
            value={null}
            style={{ marginBottom: 2, marginLeft: 2 }}
          />
          <GridItem
            position={8}
            value={null}
            style={{ marginBottom: 2, marginLeft: 2 }}
          />
          <GridItem position={9} value={null} style={{ marginLeft: 2 }} />
        </View>
      </View>
    )
  }
  render() {
    return <View style={styles.container}>{this.renderBoard()}</View>
  }
}

class GridItem extends React.Component {
  addMove() {
    return null
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.item, this.props.style]}
        onPress={() => this.addMove.bind(this)}
      >
        <Text style={styles.text}>{this.props.value}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  item: {
    width: DeviceWidth * 0.3,
    height: DeviceWidth * 0.3,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 40,
  },
})
