const {
    shuffleDeck,
    drawCard,
    remainingCards,
  } = require("./deck-of-cards-api");
  const axios = require('axios').default;
  
  jest.mock('axios');
  
  beforeEach(() => {
      jest.resetAllMocks();
  })
  
  test('get a shuffled deck ID', async () => {
      const expectedResponse= {
          "data": {}
      }
      expectedResponse.data = {
          "success": true,
          "deck_id": "3p40paa87x90",
          "shuffled": true,
          "remaining": 52
      } 
      axios.get.mockResolvedValue(expectedResponse);
  
      const actualOutput = await shuffleDeck();
      expect(actualOutput).toBe(expectedResponse.data.deck_id);
  });
  
  test('draw a card', async () => {
      const expectedResponse= {
          "data": {}
      }
      expectedResponse.data = {
              "success": true,
              "cards": [
                  {
                      "image": "https://deckofcardsapi.com/static/img/KH.png",
                      "value": "KING",
                      "suit": "HEARTS",
                      "code": "KH"
                  }
              ],
              "deck_id":"3p40paa87x90",
              "remaining": 51
          }
          axios.get.mockResolvedValue(expectedResponse);
  
          const actualOutput = await drawCard('baseUrl', 'deckID');
          expect(actualOutput).toBe(expectedResponse.data.cards[0]);
  });
  
  test('find out how many cards are left in the deck', async () => {
      const expectedResponse= {
          "data": {}
      }
      expectedResponse.data = {
          "success": true,
          "cards": [
              {
                  "image": "https://deckofcardsapi.com/static/img/KH.png",
                  "value": "KING",
                  "suit": "HEARTS",
                  "code": "KH"
              }
          ],
          "deck_id":"3p40paa87x90",
          "remaining": 51
      }
      axios.get.mockResolvedValue(expectedResponse);
  
      const actualOutput = await remainingCards('baseUrl', 'deckID');
      expect(actualOutput).toBe(expectedResponse.data.remaining);
  });
  
  // const remainingCards = async (baseURL, deckID) => {
  //     const response = await axios.get(baseURL + 'deck/' + deckID);
  //     return response['data']['remaining']
  // }