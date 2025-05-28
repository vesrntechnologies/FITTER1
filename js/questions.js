// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Which class of fire is caused by fire wood, paper or cloth?",
  //  immg:"img1",
    answer: "Class A fire",
    options: [
      "Class A fire",
      "Class B fire",
      "Class C Fire",
      "Class D Fie"
    ]
  },
    {
    numb: 2,
    question: "What is the bin color code for waste paper segretation?",
    answer: "Blue",
    options: [
      "Red",
      "Blue",
      "Black", 
      "Green"
    ]
  },
    {
    numb: 3,
    question: "What does A denote in the ABC of the first aid",
    
    answer: "Airway",
    options: [
      "Airway",
      "Attention",
      "Arresting",
      "Atomsphere"
    ]
  },
    {
    numb: 4,
    question: "What is the name of the part marked as X shown in the figure?",
    immg:"img4",
    answer: "Tang",
    options: [
      "Heel",
      "Tang",
      "Ferrule",
      "File length"
    ]
  },
    {
    numb: 5,
    question: "Which chisel is used for squaring materials at the corners and joints?",
    answer: "Diamond point chisel",
    options: [
      "Flat chisel",
      "Diamond point chisel",
      "Cross cut chisel",
      "Half round nose chisels"
    ]
  },
  {
    numb: 6,
    question: "What is the name of the part of a hammer marked as X shown in the figure?",
    immg:"img6",
    answer: "Cheek",
    options: [
      "Face",
      "Pein",
      "Cheek",
      "Eye hole"
    ]
  },
  {
    numb: 7,
    question: "Which file has parallel edges throughout the length?",
    answer: "Hand file",
    options: [
      "Hand file",
      "Bastard file",
      "Rasp cut file",
      "Single cut file"
    ]
  },
  {
    numb: 8,
    question: "Which caliper is used for finding the centre of the round bar?",
    //immg:"img8",
    answer: "Jenny caliper",
    options: [
      "Jenny caliper",
      "Inside caliper",
      "Outside caliper",
      "Firm joint caliper"
    ]
  },
      {
    numb: 9,
    question: "What is the name of the angualr measuring instrument shown in the figure?",
    immg:"img9",    
    answer: "Universal bevel guage",
    options: [
      "Bevel gauge",
      "Bevel protractor",
      "Universal bevel guage",
      "Universal surface gauge"
    ]
  },
    {
    numb: 10,
    question: "Which chisel is used for cutting oil grooves?",
    
    answer: "Half round nose chisel",
    options: [
      "Flat chisel",
      "Web chisel",
      "Half round nose chisel",
      "Diamond point chisel"
    ]
  },
     {
    numb: 11,
    question: "What is the name of the vice shown in the figure?",
    immg:"img11",
    answer: "Pin vice",
    options: [
      "Pin vice",
      "Pipe vice",
      "Hand vice",
      "Machine vice"
    ]
  },
     {
    numb: 12,
    question: "What is the accuracy of protractor head in combination set?",
    
    answer: "1 Degree",
    options: [
      "1 Degree",
      "5 Degree",
      "5 Inches ",
      "5 Feet"
    ]
  },
 {
    numb: 13,
    question: "Which punch is used for witness marks?",
    
    answer: "Dot punch",
    options: [
      "Dot punch",
      "Pin punch",
      "Bell punch",
      "Centre punch"
    ]
  },
{
    numb: 14,
    question: "What is the name of the part marked as X shown in the figure",
    immg:"img14",
    answer: "Snug",
    options: [
      "Nut",
      "Sung",
      "Spindle",
      "Scriber"
    ]
  },
    {
    numb: 15,
    question: "Which hand tool is used to finish the resharpened divider point?",
    
    answer: "Oil stone",
    options: [
      "file",
      "Grinder",
      "scraper",
     "Oil stone"
    ]
  },
    {
    numb: 16,
    question: "What is the name of PPE? ",
     //immg:"img16",
    answer: "Hand screen",
    options: [
      "Nose mask",
      "Head shield",
      "Face shield",
      "Hand screen"
    ]
  },
    {
    numb: 17,
    question: " Which disposal method of waste save lot of energy?",
    
    answer: "Recycling ",
    options: [
      "Land fill",
      "Recycling ",
      "Incineration",
      "Composting"
    ]
  },
     {
    numb: 18,
    question: " Which artificial respiration method is to be performed to the victim with injuries on the chest and belly? ",
    
    answer:"Nelson’s arm-lift back pressure method",
    options: [
      "Schafer’s method",
      "Mouth to mouth method ",
      "Mouth to nose method",
      "Nelson’s arm-lift back pressure method"
    ]
  },
       {
    numb: 19,
    question: "Which type of occupational health hazard is cause for infection? ",
    
    answer:"Biological hazard",
    options: [
      "Electrical hazard",
      "Biological hazard",
      "Physiological hazard",
      "Psychological hazard"
    ]
  },
        {
    numb: 20,
    question: " What is the use of this tool? ",
    //immg:"img20",
    answer:"Extracting nails from the wood",
    options: [
      "Holding the hot substances",
      "Cutting and twisting the wires",
      "Extracting nails from the wood",
      "Loosening and tightening the bolts and nuts"
    ]
  },  
             {
    numb: 21,
    question: " How will you diagnose the victim is suffering under cardiac arrest?",
    
    answer:"Appears blue colour around his lips",
    options: [
      "Gets pain in spinal guard",
      "Mouth will be closed tightly ",
      "Heavy swelling on his stomach",
      "Appears blue colour around his lips"
    ]
  },
                 
        {
    numb: 22,
    question: " What is the name of the tool? ",
    //immg:"img22",
    answer:"Diagonal cutting pliers",
    options: [
      "Wire stripper",
      "Crimping tool",
      "Combination pliers",
      "Diagonal cutting pliers"
    ]
  },  
     {
    numb: 23,
    question: "What is the name of the safety sign?  ",
    immg:"img23",
    answer:"Information sign",
    options: [
      "Warning sign",
      "Mandatory sign",
      "Prohibition sign",
      "Information sign"
    ]
  }, 
     {
    numb: 24,
    question: "What will be first-aid to be given to stop the bleeding of the victim?",
    immg:"img24",
    answer: "Applying pressure over the injured portion",
    options: [
      "Applying ointment",
      "Keep the injured portion upward",
      "Covering the wound portion by dressing",
     "Applying pressure over the injured portion"
    ]
  },
  {
    numb: 25,
    question: " What immediate action should be taken to rescue the victim, if he is still in contact with the electrical power supply?",
    
    answer: "Break the contact by switching OFF the power supply",
    options: [
      "Pull or push him from the contact by hand",
      "Inform your authority about this electric shock",
      "Call someone for helping to remove him from contact",
     "Break the contact by switching OFF the power supply"
    ]
  },        
               {
    numb: 26,
    question: "What is the name of the cautionary sign?  ",
    immg:"img26",
    answer:"Pedestrian crossing",
    options: [
      "School",
      "Guarded",
      "Unguarded ",
      "Pedestrian crossing"
    ]
  }, 
     {
    numb: 27,
    question: " Which is the golden hour for the victim injured on head with risk of dying?",
    
    answer: "First 30 minutes",
    options: [
      "First 15 minutes",
      "First 30 minutes",
      "First 45 minutes",
     "First 60 minutes "
    ]
  },
          {
    numb: 28,
    question: "Which condition of the victim is referred as COMA stage? ",
    immg:"img28",
    answer: "Lie totally senseless and do not respond to calls",
    options: [
      "Unconscious but can respond to calls",
      "Conscious but cannot respond to calls ",
      "Breathing but cannot respond to calls",
     "Lie totally senseless and do not respond to calls"
    ]
  },

      {
    numb: 29,
    question: "What is the cause for twisting defect in timber? ",
    
    answer: "Uneven shrinkage",
    options: [
      "Defective Storage",
      "Uneven shrinkage",
      "Improper seasoning",
     "Irregularity in growth of branches"
    ]
  },
      {
    numb: 30,
    question: "Which type of cold chisel is used for squaring materials at the corners?",
    immg:"img30",
    answer: "Diamond point chisel",
    options: [
      "Web chisel",
      "Cross cut chisel",
      "Half round chisel",
     "Diamond point chisel"
    ]
  },
     {
    numb: 36,
    question: "Which type of cold chisel is used for squaring materials at the corners?",
    immg:"img36",
    answer: "Diamond point chisel",
    options: [
      "Web chisel",
      "Cross cut chisel",
      "Half round chisel",
     "Diamond point chisel"
    ]
  },
     {
    numb: 45,
    question: "Which type of cold chisel is used for squaring materials at the corners?",
    immg:"img45",
    answer: "Diamond point chisel",
    options: [
      "Web chisel",
      "Cross cut chisel",
      "Half round chisel",
     "Diamond point chisel"
    ]
  },
     {
    numb: 46,
    question: "Which type of cold chisel is used for squaring materials at the corners?",
    immg:"img46",
    answer: "Diamond point chisel",
    options: [
      "Web chisel",
      "Cross cut chisel",
      "Half round chisel",
     "Diamond point chisel"
    ]
  },
     {
    numb: 47,
    question: "Which type of cold chisel is used for squaring materials at the corners?",
    immg:"img47",
    answer: "Diamond point chisel",
    options: [
      "Web chisel",
      "Cross cut chisel",
      "Half round chisel",
     "Diamond point chisel"
    ]
  }
    ,
     {
    numb: 48,
    question: "Which type of cold chisel is used for squaring materials at the corners?",
    immg:"img48",
    answer: "Diamond point chisel",
    options: [
      "Web chisel",
      "Cross cut chisel",
      "Half round chisel",
     "Diamond point chisel"
    ]
  },
    
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
