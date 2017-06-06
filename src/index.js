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
const HELP_MESSAGE = 'You can say give me a place name, or, you can say exit ... What can I do for you?';
const HELP_REPROMPT = 'What can I do for you?';
const STOP_MESSAGE = 'Goodbye.';

const handlers = {
  LaunchRequest: function LaunchRequest() {
    this.emit('GenerateIntent'); // TODO: ask for what they want
  },
  GenerateIntent: function GenerateIntent() {
    const generatorType = this.event.request.intent.slots.GeneratorType;
    const generatedResponse = generators[generatorType].generate();
    const speechOutput = `${GET_PLACE_MESSAGE} ${generatedResponse}`;
    this.emit(':tellWithCard', speechOutput, SKILL_NAME, generatedResponse);
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
