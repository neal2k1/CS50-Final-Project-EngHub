const myQuiz = [
    {
      'q': 'What do biomed engineers do?',
      'options': [
        'Work on land construction projects such as building skyscrapers',
        'Work with elderly people to assist them',
        'Develop and maintain equipment and chemicals for use in the medical field',
        'Design code used for programming'
      ],
      'correctIndex': 2,
      'correctResponse': 'You have passed level 1.',
      'incorrectResponse': 'Incorrect '
    },
    {
      'q': 'What is a role that you can be if you choose to go down the bio-med route?',
      'options': [
        'Writer',
        'Surgeon',
        'Medical Writer',
        'All of the above'
      ],
      'correctIndex': 2,
      'correctResponse': 'That one was tricky well done!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'How many cells is the human boday made out of on average?',
      'options': [
        '17 thousand',
        '37 trillion',
        '40 quintillion',
        '1 million'
      ],
      'correctIndex': 1,
      'correctResponse': 'Nice one!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What is homeostasis?',
        'options': [
        'Regualtion of a persons internal body tempertaure',
        'Study of viruses and bacteria',
        'Reulation of a bodys water levels',
        'Monitoring of a persons brain signals'
      ],
      'correctIndex': 0,
      'correctResponse': 'Great but it going to get harder.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What kind of wastes can be classed as biomedical waste?',
      'options': [
        'Industry waste',
        'Waste from hospitals',
        'Waste from communtites',
        'All of the above'
      ],
      'correctIndex': 3,
      'correctResponse': 'Good work!.',
      'incorrectResponse': 'Incorrect (You might be overthinking it).'
    },
    {
      'q': 'A threadlike structure of nucleic acids and protein found in the nucleus of most living cells is called a ______?',
      'options': [
        'Chromosome',
        'DNA',
        'Gene',
        'Mitochondria'
      ],
      'correctIndex': 0,
      'correctResponse': 'Yes thats Right',
      'incorrectResponse': 'INcorrect (Maybe look up what Mach is).'
    },
    {
      'q': 'Which part of the brain is responsible for memory, emotions and learning?',
      'options': [
        'Cerebrum',
        'Frontal Lobe',
        'Temporal Lobe',
        'None of the above'
      ],
      'correctIndex': 0,
      'correctResponse': 'That one was easy',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'Is biotechnological engineering a relatively new field?',
      'options': [
        'Yes',
        'No'
      ],
      'correctIndex': 1,
      'correctResponse': '50/50 chance to get it right well done!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What is the current largest bio company?',
      'options': [
        'Boots',
        'Johnson and Johnson',
        'Regeneron',
        'Novo Nordisk'
      ],
      'correctIndex': 1,
      'correctResponse': 'Excellent!',
      'incorrectResponse': 'Incorrect (This one is a bit tricky)'
    },
    {
      'q': 'What was William Johan Kolff responsible for inventing?',
      'options': [
        'Electrolysis',
        'AI Heart implants',
        'X-rays',
        'Kidney Dialysis'
      ],
      'correctIndex': 3,
      'correctResponse': 'Correct (that one was a bit of a break)',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'The small circular area in the retina where the optic nerve enters the eye and is insensitive to light is a ______',
      'options': [
        'Retina',
        'Corner',
        'Blind spot',
        'Dissipation'
      ],
      'correctIndex': 2,
      'correctResponse': 'Nearly done',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'The system of the body that is made up of the brain, spinal cord, and nerves that receives and interprets stimuli and transmits impulses to organs',
      'options': [
        'Circulatory System',
        'Skeletal System',
        'Respiratory System',
        'Nervous System'
      ],
      'correctIndex': 3,
      'correctResponse': 'Nice work',
      'incorrectResponse': 'Incorrect'
    }

  ];

$('#quiz').quiz({
  questions: myQuiz,
});