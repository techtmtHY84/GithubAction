describe('API Test', () => {
  it('should get list of posts', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it('should return 404 for invalid endpoint', () => {
    cy.request({
      url: 'https://jsonplaceholder.typicode.com/invalid-endpoint',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

})