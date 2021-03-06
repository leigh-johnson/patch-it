/**
* Suite.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      unique: true,
    },
    description: {
      type: 'string',
      required: true
    },
    project: {
      model: 'project'
    },
    tests: {
      collection: 'test',
      via: 'suite'
    },
    platforms: {
      model: 'platform'
    },
    template: {
      model: 'template'
    }
  }
};

