'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import Expo from 'expo'
import { Image } from 'react-native'
import {
  Container, View, DeckSwiper, Card
} from 'native-base'
// import { fontsLoaded } from '../actions/appStatus'

class Home extends Component {
  // async componentWillMount () {
  //   await Expo.Font.loadAsync({
  //     'Roboto': require('native-base/Fonts/Roboto.ttf'),
  //     'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
  //   })
  //   this.props.appIsReady()
  // }

  componentDidMount () {
    this.rl = true
    setInterval(
      () => {
        if (this.rl) {
          this._deckSwiper._root.swipeRight()
          this.rl = false
        } else {
          this._deckSwiper._root.swipeLeft()
          this.rl = true
        }
      }
      , 4000
    )
  }

  renderCard (item) {
    return (
      <Card style={{ elevation: 6, flexDirection: 'row' }}>
        <Image
          resizeMode={'contain'}
          source={item.image}
          style={{ flex: 1 }}
        />
      </Card>
    )
  }

  render () {
    // const { cards, isAppReady } = this.props
    const { cards } = this.props

    // if (!isAppReady) {
    //   return <Expo.AppLoading />
    // }

    return (
      <Container>
        <View>
          <DeckSwiper
            looping
            dataSource={cards}
            renderItem={this.renderCard}
            ref={(c) => { this._deckSwiper = c }}
          />
        </View>
      </Container>
    )
  }
}

Home.propTypes = {
  // isAppReady: PropTypes.bool.isRequired,
  // appIsReady: PropTypes.func.isRequired,
  cards: PropTypes.array.isRequired
}

function mapStateToProps (state, props) {
  return {
    // isAppReady: state.appStatus.isReady,
    cards: state.peaceCards.cards
  }
}

// function mapDispatchToProps (dispatch) {
//   return bindActionCreators({
//     appIsReady: fontsLoaded
//   }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home)
export default connect(mapStateToProps)(Home)
