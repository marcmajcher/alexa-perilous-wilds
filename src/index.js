'use strict';

/* eslint-env node */

const Alexa = require('alexa-sdk');
const place = require('./pw-places');
const region = require('./pw-regions');

const generators = {
  place,
  region,
  location: place
};

const APP_ID = 'GizmetPerilousWilds'; // TODO replace with your app ID (OPTIONAL).
const SKILL_NAME = 'The Perilous Wilds';
const GET_PLACE_MESSAGE = 'This place is called: ';
const HELP_MESSAGE = 'You can ask me to generate a place, region, or location, or, you can say exit ... What can I do for you?';
const HELP_REPROMPT = 'Would you like me to generate a place, region, or location?';
const STOP_MESSAGE = 'Goodbye.';
const GENERATOR_NOT_FOUND_MESSAGE = 'I don\'t know how to make that kind of thing. Ask for a place, region, or location.';
const GENERATOR_NOT_FOUND_REPROMPT = 'Would you like me to generate a place, region, or location?';

const handlers = {
  LaunchRequest: function LaunchRequest() {
    this.emit(':ask', HELP_MESSAGE, HELP_REPROMPT);
  },
  GeneratePlaceIntent: function GeneratePlaceIntent() {
    const generatedResponse = generators.place.generate();
    const speechOutput = `${GET_PLACE_MESSAGE} ${generatedResponse}`;
    this.emit(':tellWithCard', speechOutput, SKILL_NAME, generatedResponse);
  },
  GenerateIntent: function GenerateIntent() {
    const generatorTypeSlot = this.event.request.intent.slots.GeneratorType;
    if (generatorTypeSlot && generatorTypeSlot.value) {
      const generatorType = generatorTypeSlot.value.toLowerCase();

      if (generatorType in generators) {
        const generatedResponse = generators[generatorType].generate();
        const speechOutput = `${GET_PLACE_MESSAGE} ${generatedResponse}`;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, generatedResponse);
      }
      else {
        // incorrect request type
        // TBD: add ask to don't know message
        // https://github.com/alexa/skill-sample-nodejs-howto/blob/master/src/index.js
        this.emit(':ask', GENERATOR_NOT_FOUND_MESSAGE, GENERATOR_NOT_FOUND_REPROMPT);
      }
    }
    else {
      this.emit('LaunchRequest');
    }
  },
  'AMAZON.HelpIntent': function HelpIntent() {
    const speechOutput = HELP_MESSAGE;
    const reprompt = HELP_REPROMPT;
    this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function CancelIntent() {
    this.emit(':tell', STOP_MESSAGE);
  },
  'AMAZON.StopIntent': function StopIntent() {
    this.emit(':tell', STOP_MESSAGE);
  }
};

exports.handler = (event, context) => { /* ,callback */
  const alexa = Alexa.handler(event, context);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
