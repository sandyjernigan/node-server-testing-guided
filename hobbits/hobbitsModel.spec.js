const Hobbits = require('./hobbitsModel.js');
const db = require('../data/dbConfig.js');

describe('hobbits model', () => {

  beforeEach(async () => {
    // wipe the database
    await db('hobbits').truncate();
  })

  describe('the insert function', () => {

    it('should run the testing env', async () => {
      // test setup
      const newhobbit = {name: 'frodo'};
      const hobbit = await Hobbits.insert(newhobbit);

      // assertion
      const hobbits = await db('hobbits');
      expect(hobbits.length).toBe(1);
      expect(hobbits[0].name).toBe('frodo');
      // should resolve to the newly created hobbit
      expect(hobbits[0]).toEqual({"id":1, "name": "frodo"});
    })

    it('should resolve to the newly created hobbit', async () => {
      // test setup
      const newhobbit = {name: 'sam'};
      const hobbit = await Hobbits.insert(newhobbit);

      // assertion
      expect(hobbit.name).toBe('sam');
    })

  })

});