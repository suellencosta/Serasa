describe('Teste de Automação do Trello Serasa', () => {

    let boardId, listId, cardId, lastCardId, lastBoardId;

    const boardName = 'NEW BOARD SERASA'
    const listName = 'NEW LIST SERASA'
    const cardName = 'NEW CARD SERASA'
    const cardContent = 'NEW CARD CONTENT SERASA'
    const organizationId = "ID_da_organizacao"
  
   
    it('Cadastra um novo Board', () => {
      const qs = {
        key: Cypress.config('TRELLO_API_KEY'), 
        token: Cypress.config('TRELLO_API_TOKEN'),
        name: boardName,
        organizationId: organizationId
      }
      cy.postRequest('https://api.trello.com/1/boards/',qs ).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq(boardName)
        boardId = response.body.id
      })
    })
  
    it('Cadastra uma nova Lista em um Board', () => {
      const qs = {
        name: listName,
        idBoard: boardId,
        key: Cypress.config('TRELLO_API_KEY'), 
        token: Cypress.config('TRELLO_API_TOKEN')
      }

      cy.postRequest('https://api.trello.com/1/lists/', qs).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq(listName)
        listId = response.body.id
      })
    })
  
    it('Cadastra um novo Card em uma Lista', () => {

      const qs = {
        name: cardName,
        idList: listId, 
        idBoard: boardId, 
        key: Cypress.config('TRELLO_API_KEY'), 
        token: Cypress.config('TRELLO_API_TOKEN') 
      }

      cy.postRequest('https://api.trello.com/1/cards/', qs).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq(cardName)
        cardId = response.body.id
      })
    })  

    it('Exclui um Card da ultima Lista criada', () => {
       lastCardId = cardId;
    
          cy.request({
            method: 'DELETE',
            url: `https://api.trello.com/1/cards/${lastCardId}`,
            qs: {
              key: Cypress.config('TRELLO_API_KEY'), 
              token: Cypress.config('TRELLO_API_TOKEN')
            }
          }).then(response => {
            expect(response.status).to.eq(200);
          });
        });
   
  
    it('Exclui o ultimo Board', () => {
      lastBoardId = boardId;

      cy.request({
        method: 'DELETE',
        url: `https://api.trello.com/1/boards/${lastBoardId}`,
        qs: {
          key: Cypress.config('TRELLO_API_KEY'), 
          token: Cypress.config('TRELLO_API_TOKEN')
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  })
  