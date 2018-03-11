
const defaultState = {
  cards: [
    {
      image: require('../data/images/grumpyCatPeace.jpg')
    }, {
      image: require('../data/images/nyanPeace.jpg')
    }, {
      image: require('../data/images/mosque.jpg')
    }, {
      image: require('../data/images/peaceSymbol.jpg')
    }, {
      image: require('../data/images/nyanCat.jpg')
    }, {
      image: require('../data/images/spaceNyanCat.jpg')
    }
  ]
}

const peaceCardsReducer = (state = defaultState, action) => {
  return state
}

export default peaceCardsReducer
