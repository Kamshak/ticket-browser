// chai uses as asset library
import * as chai from 'chai';
import * as spies from 'chai-spies';
import StubCollections from 'meteor/hwillson:stub-collections';

import { TicketsCollection } from '../../../both/collections/TicketsCollection';
import { Main } from './main';

chai.use(spies);

describe('Server Main', () => {
  let mainInstance : Main;

  beforeEach(() => {
    // Creating database mock
    StubCollections.stub(TicketsCollection);

    // Create instance of main class
    mainInstance = new Main();
  });

  afterEach(() => {
    // Restore database
    StubCollections.restore();
  });
});
