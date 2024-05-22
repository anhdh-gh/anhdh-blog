interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
  sourceCode?: string,
  techStack: string[],
  repo: string
}

const projectsData: Project[] = [
  {
    title: 'Learn E',
    description: '"Learn E" is an online learning platform. The website allows administrators to post many different courses with a variety of exercises. In addition, it also supports very well in learning foreign languages. The system is built according to the micro-services model.',
    imgSrc: '/static/images/page/projects/learn-e.png',
    href: 'https://learne.anhdh.net',
    sourceCode: 'https://github.com/anhdh-gh/LearnE',
    techStack: ['Microservices', 'spring_boot', 'MySQL', 'ReactJS', 'Firebase', 'tailwind_cSS', 'Vercel', 'visual_paradigm'],
    repo: 'LearnE'
  },
  // {
  //   title: 'Algorithms in subject "Distributed Systems"',
  //   description: 'This is a website for learning, practicing and testing the algorithms of the subject "Distributed Systems". Website uses technologies Java Servlet, JSP, JSTL, SOAP, ...',
  //   imgSrc: '/static/images/page/projects/distributed-systems.png',
  //   href: 'https://distributed-systems.anhdh.net',
  //   sourceCode: 'https://github.com/anhdh-gh/DistributedSystems',
  //   techStack: ['java_servlet_JSP', 'SOAP', 'JQuery', 'Bootstrap', 'Heroku', 'visual_paradigm'],
  //   repo: 'DistributedSystems'
  // },
  {
    title: 'AnhDH Blog',
    description: '“AnhDH Blog” is a website where I introduce myself and where I share knowledge and good articles with everyone. The shared articles and projects on this website are really important to me, they are important milestones in the process of self-study and work. You will find many interesting things about me here.',
    imgSrc: '/static/images/page/projects/anhdh-blog.png',
    href: 'https://anhdh.net',
    sourceCode: 'https://github.com/anhdh-gh/anhdh-blog',
    techStack: ['NextJS', 'Firebase', 'tailwind_cSS', 'Vercel'],
    repo: 'anhdh-blog'
  },
  {
    title: 'Diagnosis and consultation of musculoskeletal diseases',
    description: 'This is a website for diagnosis and treatment of diseases related to bones and joints. The two main algorithms used in the project are Case-based reasoning (CBR) and Rule-based reasoning (RBR).',
    imgSrc: '/static/images/page/projects/diagnosis-and-consultation-of-musculoskeletal-diseases.png',
    // href: 'https://musculoskeletal-diseases.anhdh.net',
    href: 'https://github.com/anhdh-gh/Diagnosis-and-consultation-of-musculoskeletal-diseases/tree/main?tab=readme-ov-file#website-ch%E1%BA%A9n-%C4%91o%C3%A1n-v%C3%A0-t%C6%B0-v%E1%BA%A5n-b%E1%BB%87nh-x%C6%B0%C6%A1ng-kh%E1%BB%9Bp',
    sourceCode: 'https://github.com/anhdh-gh/Diagnosis-and-consultation-of-musculoskeletal-diseases',
    techStack: ['spring_boot', 'Firebase', 'MySQL', 'Heroku', 'JQuery', 'Bootstrap', 'visual_paradigm'],
    repo: 'Diagnosis-and-consultation-of-musculoskeletal-diseases'
  },
  {
    title: 'Sound recognition of solo duet and ensemble instruments',
    description: '"Sound recognition of solo duet and ensemble instruments" is a website that recognizes the sounds of solo, duet and ensemble musical instruments. The system uses feature extraction techniques and calculates the Euclidean distance.',
    imgSrc: '/static/images/page/projects/sound_recognition_of_solo_duet_and_ensemble_instruments.png',
    href: 'https://github.com/anhdh-gh/Sound_recognition_of_solo_duet_and_ensemble_instruments/blob/main/README.md#4-m%E1%BB%99i-s%E1%BB%91-h%C3%ACnh-%E1%BA%A3nh-minh-h%E1%BB%8Da',
    sourceCode: 'https://github.com/anhdh-gh/Sound_recognition_of_solo_duet_and_ensemble_instruments',
    techStack: ['Django', 'Python', 'MySQL', 'JQuery', 'Bootstrap', 'visual_paradigm'],
    repo: 'Sound_recognition_of_solo_duet_and_ensemble_instruments'
  },
  {
    title: 'My scoreboard',
    description: '"My scoreboard" was a project to manage my grades when I was studying at PTIT. With this project, I can compile the scores of my subjects and my final GPA, so that I can make reasonable decisions to improve the scores of the subjects.',
    imgSrc: '/static/images/page/projects/my-scoreboards.png',
    href: 'https://scoreboard.anhdh.net',
    sourceCode: 'https://github.com/anhdh-gh/my-scoreboard',
    techStack: ['ReactJS', 'Firebase', 'Vercel'],
    repo: 'my-scoreboard'
  },
  {
    title: 'Chat and game online',
    description: '"Chat and game online" is a desktop application for chatting and playing games together. The application uses Java technologies such as Java Swing, Java Socket, Java Multi Thread, Spring Data JPA.',
    imgSrc: '/static/images/page/projects/chat-and-game-online.png',
    href: 'https://github.com/anhdh-gh/Chat-and-game-online/blob/main/README.md#h%C3%ACnh-%E1%BA%A3nh-preview',
    sourceCode: 'https://github.com/anhdh-gh/Chat-and-game-online',
    techStack: ['java_socket', 'spring_data_JPA', 'MySQL', 'java_swing', 'visual_paradigm'],
    repo: 'Chat-and-game-online'
  },
  {
    title: 'Clocks and alarms',
    description: '"Clocks and alarms" is a desktop application that has the function of viewing the time of some countries in the world and setting alarms. The application is developed based on JavaFX.',
    imgSrc: '/static/images/page/projects/clocks-and-alarms.png',
    href: 'https://github.com/anhdh-gh/Clocks-and-alarms/blob/master/README.md#h%C3%ACnh-%E1%BA%A3nh-preview',
    sourceCode: 'https://github.com/anhdh-gh/Clocks-and-alarms',
    techStack: ['JavaFX'],
    repo: 'Clocks-and-alarms'
  },
  {
    title: 'Basic Entity Generation Algorithms',
    description: '"Basic Entity Generation Algorithms" is a desktop application that illustrates basic entity generation algorithms. The application is written in Java 2D, Java Swing.',
    imgSrc: '/static/images/page/projects/basic-entity-generation-algorithms.png',
    href: 'https://github.com/anhdh-gh/Basic-Entity-Generation-Algorithms/blob/main/readme.md#h%C3%ACnh-%E1%BA%A3nh-preview',
    sourceCode: 'https://github.com/anhdh-gh/Basic-Entity-Generation-Algorithms',
    techStack: ['java_swing'],
    repo: 'Basic-Entity-Generation-Algorithms'
  },
  {
    title: 'Change jpg image properties for SEO shopee',
    description: '"Change jpg image properties for seo shopee" is a desktop application used to adjust the properties of images so that shopee seo standards. Technologies used include Java Swing, Java Multi Thread, FIle IO.',
    imgSrc: '/static/images/page/projects/change_jpg_image_properties_for_seo_shopee.png',
    href: 'https://github.com/anhdh-gh/Change_jpg_image_properties_for_seo_shopee/blob/main/README.md#h%C3%ACnh-%E1%BA%A3nh-preview',
    sourceCode: 'https://github.com/anhdh-gh/Change_jpg_image_properties_for_seo_shopee',
    techStack: ['java_swing'],
    repo: 'Change_jpg_image_properties_for_seo_shopee'
  },
  {
    title: 'Calculator',
    description: `"Calculator" is a pocket calculator simulation website. This is a small project built during self-taught ReactJS Framework. It's small, but it really means a lot to me.`,
    imgSrc: '/static/images/page/projects/calculator.png',
    href: 'https://calculator.anhdh.net',
    sourceCode: 'https://github.com/anhdh-gh/calculator',
    techStack: ['ReactJS' , 'Vercel'],
    repo: 'calculator'
  },
]

export default projectsData
