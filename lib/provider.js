module.exports = {
  selector: ['.source.ruby', '.source.ruby.rails', '.source.ruby.rspec'],
  id: 'aligner-ruby',
  config: {
    '=>-alignment': {
      title: 'Padding for =>',
      description: 'Pad left or right of the character',
      type: 'string',
      "enum": ['left', 'right'],
      "default": 'left'
    },
    '=>-leftSpace': {
      title: 'Left space for =>',
      description: 'Add 1 whitespace to the left',
      type: 'boolean',
      "default": true
    },
    '=>-rightSpace': {
      title: 'Right space for =>',
      description: 'Add 1 whitespace to the right',
      type: 'boolean',
      "default": true
    },
    '=>-scope': {
      title: 'Character scope',
      description: 'Scope string to match',
      type: 'string',
      "default": 'key-value'
    },
    ':-alignment': {
      title: 'Padding for :',
      description: 'Pad left or right of the character',
      type: 'string',
      "enum": ['left', 'right'],
      "default": 'right'
    },
    ':-leftSpace': {
      title: 'Left space for :',
      description: 'Add 1 whitespace to the left',
      type: 'boolean',
      "default": false
    },
    ':-rightSpace': {
      title: 'Right space for :',
      description: 'Add 1 whitespace to the right',
      type: 'boolean',
      "default": true
    },
    ':-scope': {
      title: 'Character scope',
      description: 'Scope string to match',
      type: 'string',
      "default": 'constant\.hashkey'
    },
    '=-alignment': {
      title: 'Padding for =',
      description: 'Pad left or right of the character',
      type: 'string',
      "enum": ['left', 'right'],
      "default": 'left'
    },
    '=-leftSpace': {
      title: 'Left space for =',
      description: 'Add 1 whitespace to the left',
      type: 'boolean',
      "default": true
    },
    '=-rightSpace': {
      title: 'Right space for =',
      description: 'Add 1 whitespace to the right',
      type: 'boolean',
      "default": true
    },
    'eq-alignment': {
      title: 'Padding for "eq"',
      description: 'Pad left or right of the character',
      type: 'string',
      "enum": ['left', 'right'],
      "default": 'left'
    },
    'eq-leftSpace': {
      title: 'Left space for "eq"',
      description: 'Add 1 whitespace to the left',
      type: 'boolean',
      "default": true
    },
    'eq-rightSpace': {
      title: 'Right space for "eq"',
      description: 'Add 1 whitespace to the right',
      type: 'boolean',
      "default": true
    }
  },
  privateConfig: {
    '=-prefixes': ['<<', '%', '&', '&&', '*', '**', '+', '-', '^', '|', '||', '/'],
    '=-scope': 'assignment',
    'eq-scope': 'matcher'
  }
};
