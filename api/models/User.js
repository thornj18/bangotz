/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      ig_userid:{
        type:"string",
        required:true
      },
      full_name:{
          type:"string",
          required: true
      },
      username:{
          type:"string",
          required:true
      },
      access_token:{
          type:"string",
          required:true
      },
      phone:{
          type:"string"
      },

  }
};
