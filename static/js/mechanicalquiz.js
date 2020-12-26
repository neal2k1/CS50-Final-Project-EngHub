const myQuiz = [
    {
      'q': 'What state the first law of Thermodynamics?',
      'options': [
        'Conservation of mass',
        'Conservation of Energy',
        'Conservation of Momentum',
        'Conservation of Charge'
      ],
      'correctIndex': 1,
      'correctResponse': 'You have passed level 1.',
      'incorrectResponse': 'Incorrect '
    },
    {
      'q': 'What sectors are mechanical engineers invovled with?',
      'options': [
        'Manufacturing processes',
        'Planes and flight dynamics',
        'Crypto Mining',
        'Exploration of the earths structure'
      ],
      'correctIndex': 0,
      'correctResponse': 'That one was tricky well done!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'Steel is an alloy between iron and...?',
      'options': [
        'Copper',
        'Silver',
        'Chromium',
        'Carbon'
      ],
      'correctIndex': 3,
      'correctResponse': 'Nice one!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'In a simple spring-mass system, stability with oscillations is obtained when the differential equation laplace transform have..?',
        'options': [
        'Positive roots',
        'Negative roots',
        'Complex roots',
        'Imaginary negative roots'
      ],
      'correctIndex': 3,
      'correctResponse': 'Great but it going to get harder.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'Which of these disciplines apply engineering ,physics and materials science principles to design, analyze, manufacture and maintain mechanical systems?',
      'options': [
        'Mechanical Engineering',
        'Technical Engineering',
        'Analytical And Material engineering',
        'All of the Above'
      ],
      'correctIndex': 0,
      'correctResponse': 'Good work!.',
      'incorrectResponse': 'Incorrect (You might be overthinking it).'
    },
    {
      'q': 'What sort of modules can you expect to study in aerosapce and chemical engineering',
      'options': [
        'Bio-Chemistry',
        'Systems',
        'Thermodynamics',
        'Aerodynamics'
      ],
      'correctIndex': 2,
      'correctResponse': 'Yes thats Right',
      'incorrectResponse': 'INcorrect (Maybe look up what Mach is).'
    },
    {
      'q': 'The mechanical engineering field requires core understanding of which of the following core areas?',
      'options': [
        'Dynamics',
        'Mechanics',
        'Electricity',
        'All of the Above'
      ],
      'correctIndex': 3,
      'correctResponse': 'That one was easy',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'When did mechanical engineering emerge as a field?',
      'options': [
        '16th Century',
        '18th Century'
      ],
      'correctIndex': 1,
      'correctResponse': '50/50 chance to get it right well done!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What material would be best for making a heatsink?',
      'options': [
        'Copper Alloy',
        'Glass Reinforced Plastic',
        'Stainless Steel',
        'Teflon'
      ],
      'correctIndex': 0,
      'correctResponse': 'Excellent!',
      'incorrectResponse': 'Incorrect (This one is a bit tricky)'
    },
    {
      'q': 'What are o-rings typically used for?',
      'options': [
        'Creating a seal between 2 parts',
        'Plugging the End of a hollow tube',
        'Increase the thermal conductivity of the joint',
        'Better flow in the tube'
      ],
      'correctIndex': 0,
      'correctResponse': 'Correct (that one was a bit of a break)',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'Can you specialise as a mechanical engineer?',
      'options': [
        'yes',
        'no'
      ],
      'correctIndex': 0,
      'correctResponse': 'Nearly done',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What materials are alloyed to form brass?',
      'options': [
        'Steel and Tin',
        'Copper, Tin and Zinc',
        'Copper and Aluminium',
        'Copper and Zinc'
      ],
      'correctIndex': 3,
      'correctResponse': 'Nice work',
      'incorrectResponse': 'Incorrect'
    }

  ];

$('#quiz').quiz({
  questions: myQuiz,
});