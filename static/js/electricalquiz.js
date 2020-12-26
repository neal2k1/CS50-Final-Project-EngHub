const myQuiz = [
    {
      'q': 'What year did electrical engineering emerge?',
      'options': [
        '1800',
        '1865',
        '1864',
        '1866'
      ],
      'correctIndex': 2,
      'correctResponse': 'You have passed level 1.',
      'incorrectResponse': 'Incorrect '
    },
    {
      'q': 'What are some of the recent contributions that have been made in the field?',
      'options': [
        'Self Healing polymers',
        'Phones',
        'Coding languages',
        'Wireless Wearable Tech'
      ],
      'correctIndex': 3,
      'correctResponse': 'That one was tricky well done!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What is the unit of current?',
      'options': [
        'Ampere',
        'Volts',
        'Meter',
        'None of the above'
      ],
      'correctIndex': 0,
      'correctResponse': 'Nice one!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'Which of the following materials possesses the least specific resistivity?',
        'options': [
        'Aluminium',
        'Copper',
        'Silver',
        'Iron'
      ],
      'correctIndex': 2,
      'correctResponse': 'Great but it going to get harder.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'The Curve representing Ohm\'s law is?',
      'options': [
        'Linear',
        'Parabolic',
        'Exponential',
        'Hyperbolic'
      ],
      'correctIndex': 0,
      'correctResponse': 'Good work!.',
      'incorrectResponse': 'Incorrect (You might be overthinking it).'
    },
    {
      'q': 'What sort of modules can you expect to study in electrical engineering',
      'options': [
        'Chemistry',
        'Systems',
        'Signals',
        'Aerodynamics'
      ],
      'correctIndex': 2,
      'correctResponse': 'Yes thats Right',
      'incorrectResponse': 'INcorrect (Maybe look up what Mach is).'
    },
    {
      'q': 'The SI unit of electrical energy is _________',
      'options': [
        'Watts per second',
        'Volts',
        'Joule per second',
        'Joule'
      ],
      'correctIndex': 3,
      'correctResponse': 'That one was easy',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'Do electrical engineers need a high level of understandoing of geographical data',
      'options': [
        'Yes',
        'No'
      ],
      'correctIndex': 1,
      'correctResponse': '50/50 chance to get it right well done!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'Two wires A and B of the same Material but of different lengths L and 2L have the radius r and 2r respectively. The ratio of specific resistance will be?',
      'options': [
        '1:4',
        '1:1',
        '1:3',
        '1:2'
      ],
      'correctIndex': 1,
      'correctResponse': 'Excellent!',
      'incorrectResponse': 'Incorrect (This one is a bit tricky)'
    },
    {
      'q': 'Active Element in the circuit is one which',
      'options': [
        'Dissipates energy',
        'Receives energy',
        'Receives and dissipates energy',
        'Supplies energy'
      ],
      'correctIndex': 3,
      'correctResponse': 'Correct (that one was a bit of a break)',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What role can you have as an electrical engineer?',
      'options': [
        'Algorithms developer',
        'Radar technician'
      ],
      'correctIndex': 1,
      'correctResponse': 'Nearly done',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'An electric heater draws 3.5 A from a 110 V source. The resistance of the heating elements is approximately? ',
      'options': [
        '31 ohms',
        '3.1 ohms',
        '28.5 ohms',
        '2.8 ohms'
      ],
      'correctIndex': 0,
      'correctResponse': 'Nice work',
      'incorrectResponse': 'Incorrect'
    }

  ];

$('#quiz').quiz({
  questions: myQuiz,
});