const myQuiz = [
    {
      'q': 'A type of Software Life Cycle Activity which involves building the software and converting the design into code',
      'options': [
        'Interface design',
        'Detailed Design',
        'Implementation',
        'Architectural Design'
      ],
      'correctIndex': 2,
      'correctResponse': 'You have passed level 1.',
      'incorrectResponse': 'Incorrect '
    },
    {
      'q': 'The person who has complete responsibility for the success of the project, and have accountability to the Stakeholders and Sponsors',
      'options': [
        'Project Manager',
        'Project Leader',
        'Systems Analyst',
        'Designer'
      ],
      'correctIndex': 0,
      'correctResponse': 'That one was tricky well done!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'A type of Software Life Cycle Activity which involves saving tests from the previous version to ensure that the new version retains the previous capabilities',
      'options': [
        'System Testing',
        'Regression Testing',
        'Acceptance Testing',
        'Unit Testing'
      ],
      'correctIndex': 1,
      'correctResponse': 'Nice one!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What kind of jobs below are classed into the software field?',
        'options': [
        'Algo Developer',
        'Safety Engineer',
        'Electrician',
        'Project Manager'
      ],
      'correctIndex': 0,
      'correctResponse': 'Great but it going to get harder.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'When was the first computer built',
      'options': [
        '1948',
        '1946'
      ],
      'correctIndex': 1,
      'correctResponse': 'Good work!.',
      'incorrectResponse': 'Incorrect (You might be overthinking it).'
    },
    {
      'q': 'What was the name of the first computer game?',
      'options': [
        'XENOS',
        'COMPUTER SPACE',
        'PING PONG',
        'ARPANET'
      ],
      'correctIndex': 1,
      'correctResponse': 'Yes thats Right',
      'incorrectResponse': 'INcorrect (Maybe look up what Mach is).'
    },
    {
      'q': 'Which one of the following modules would you expect in a software engineering course?',
      'options': [
        'Aerodynamics',
        'Materials',
        'Systems analysis',
        'Hardware design'
      ],
      'correctIndex': 2,
      'correctResponse': 'That one was easy',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'Which one of the following is a programming language?',
      'options': [
        'Javascript',
        'Blender'
      ],
      'correctIndex': 0,
      'correctResponse': '50/50 chance to get it right well done!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What is the use of an Architectural Description Language (ADL)?',
      'options': [
        'describes how to design the software in a specified language',
        'codes the architecture into desired programming language',
        'provides syntax for describing a software architecture',
        'helps design the language in which the software should be built'
      ],
      'correctIndex': 2,
      'correctResponse': 'Excellent!',
      'incorrectResponse': 'Incorrect (This one is a bit tricky)'
    },
    {
      'q': 'What is a Software?',
      'options': [
        'Software is documentation and configuration of data',
        'Software is set of programs',
        'None of the mentioned',
        'Software is set of programs, documentation & configuration of data'
      ],
      'correctIndex': 3,
      'correctResponse': 'Correct (that one was a bit of a break)',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'Who invented the world wide web?',
      'options': [
        'Tem Berners Lee',
        'Robert Khan'
      ],
      'correctIndex': 0,
      'correctResponse': 'Nearly done',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'The role of computer software has undergone significant change over a time span of little more than _____ years',
      'options': [
        '30',
        '50',
        '60',
        '100'
      ],
      'correctIndex': 1,
      'correctResponse': 'Nice work',
      'incorrectResponse': 'Incorrect'
    }

  ];

$('#quiz').quiz({
  questions: myQuiz,
});