Cypress.Commands.add('createBoard', (boardName) => {
    cy.request({
      method: 'POST',
      url: 'https://api.trello.com/1/boards/',
      qs: {
        name: boardName,
        key: Cypress.env('TRELLO_API_KEY'),
        token: Cypress.env('TRELLO_API_TOKEN')
      }
    }).then((response) => {
      cy.wrap(response.body.id).as('boardId')
    })
  })
  
  Cypress.Commands.add('createCard', (cardName, listId) => {
    cy.request({
      method: 'POST',
      url: 'https://api.trello.com/1/cards/',
      qs: {
        name: cardName,
        idList: listId,
        key: Cypress.env('TRELLO_API_KEY'),
        token: Cypress.env('TRELLO_API_TOKEN')
      }
    }).then((response) => {
      cy.wrap(response.body.id).as('cardId')
    })
  })
  
  Cypress.Commands.add('deleteCard', (cardId) => {
    cy.request({
      method: 'DELETE',
      url: `https://api.trello.com/1/cards/${cardId}`,
      qs: {
        key: Cypress.env('TRELLO_API_KEY'),
        token: Cypress.env('TRELLO_API_TOKEN')
      }
    })
  })
  
  Cypress.Commands.add('deleteBoard', (boardId) => {
    cy.request({
      method: 'DELETE',
      url: `https://api.trello.com/1/boards/${boardId}`,
      qs: {
        key: Cypress.env('TRELLO_API_KEY'),
        token: Cypress.env('TRELLO_API_TOKEN')
      }
    })
  })
  