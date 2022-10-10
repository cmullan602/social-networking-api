const { Schema, model } = require('mongoose');
const { Thoughts } = require('.');
const Reactions = require('./Reactions')

// Schema to create Post model
const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reactions],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Virtual to get length of reactions array
thoughtsSchema
  .virtual('getReactions')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Application model
const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;
