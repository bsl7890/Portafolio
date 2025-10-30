    /*
      main.js - Interactividad y manipulación del DOM
      Todas las funciones usan "this" cuando corresponde y están comentadas en español
    */

    // Textos para cambio de idioma (10 idiomas)
    const texts = {
      es: {
        'home.title': 'Hola, soy Benjamín Santander',
        'home.subtitle': 'Desarrollador Web • Estudiante de Programación',
        'nav.about':'Sobre mí',
        'nav.skills':'Habilidades',
        'nav.education':'Educación',
        'nav.experience':'Experiencia',
        'nav.courses':'Cursos',
        'nav.portfolio':'Portafolio',
        'nav.contact':'Contacto',
        'home.contact':'Contactar',
        'about.title':'Sobre mí',
        'about.text':'Soy estudiante de 4° medio en el Liceo Vate Vicente Huidobro, especializado en Programación. Me apasiona el desarrollo web y crear soluciones con Python y JavaScript.',
        'about.info':'Edad: 18 años | Fecha de nacimiento: 27/04/2007 | Nacionalidad: Chileno',
        'about.location':'Ubicación: Las Azalas 0820, Chile | Teléfono: +56 9 6650 6919 | RUT: 22.384.522-3',
        'about.career':'Mi carrera como Desarrollador Web',
        'about.career.text':'Desde que tengo memoria, siempre he admirado el potencial de la tecnología y he estado interesado en aprender más sobre ella. Después de comenzar mis estudios especializados en programación, tuve la oportunidad de desarrollar mis primeros proyectos y me inspiré por la capacidad de convertir ideas en realidad.',
        'about.first':'Mi primer proyecto',
        'about.first.text':'Eventualmente, comencé a tomar clases de programación y creé mi primer proyecto utilizando Python. Fue un proyecto de análisis de datos que completé extrayendo información de un sistema escolar. Fue una experiencia que cambió mi vida. Decidí convertirme en Desarrollador Web y hacer realidad más de mis ideas soñadas.',
        'about.more':'Ver más',
        'skills.title':'Habilidades',
        'skills.subtitle':'Habilidades principales que he adquirido hasta ahora',
        'skills.languages':'Lenguajes',
        'skills.frontend':'Front End',
        'skills.frameworks':'Frameworks & Bibliotecas',
        'skills.databases':'Bases de Datos',
        'skills.tools':'Herramientas',
        'skills.concepts':'Conceptos',
        'education.title':'Educación',
        'education.subtitle':'Bootcamp completado, estudios secundarios especializados',
        'experience.title':'Experiencia',
        'experience.subtitle':'Experiencia en desarrollo de proyectos escolares',
        'courses.title':'Cursos',
        'courses.subtitle':'Algunos de los cursos que he completado',
        'portfolio.title':'Portafolio',
        'portfolio.subtitle':'Mis proyectos recientes',
        'portfolio.empty':'Actualmente no tengo proyectos publicados.',
        'portfolio.add':'Agregar ejemplo',
        'contact.title':'Contacto',
        'contact.subtitle':'Por favor no dudes en contactarme'
      },
      en: {
        'home.title': 'Hello, I\'m Benjamín Santander',
        'home.subtitle': 'Web Developer • Programming Student',
        'nav.about':'About',
        'nav.skills':'Skills',
        'nav.education':'Education',
        'nav.experience':'Experience',
        'nav.courses':'Courses',
        'nav.portfolio':'Portfolio',
        'nav.contact':'Contact',
        'home.contact':'Contact',
        'about.title':'About Me',
        'about.text':'I am a senior high school student specializing in Programming. I am passionate about web development and building solutions with Python and JavaScript.',
        'about.info':'Age: 18 years | Birth date: 04/27/2007 | Nationality: Chilean',
        'about.location':'Location: Las Azalas 0820, Chile | Phone: +56 9 6650 6919 | ID: 22.384.522-3',
        'about.career':'My career as a Web Developer',
        'about.career.text':'As far as I can remember, I have always admired the potential for technology and have been interested in learning more about it. After starting my specialized programming studies, I had the opportunity to develop my first projects and got inspired by the ability to turn ideas into reality.',
        'about.first':'My first project',
        'about.first.text':'Eventually, I started taking programming classes and made my first project using Python. It was a data analysis project I completed by extracting information from a school system. It was a life changing experience. I decided to become a Web Developer and make more of my dream ideas come true.',
        'about.more':'See more',
        'skills.title':'Skills',
        'skills.subtitle':'Major skills I acquired so far',
        'skills.languages':'Languages',
        'skills.frontend':'Front End',
        'skills.frameworks':'Frameworks & Libraries',
        'skills.databases':'Databases',
        'skills.tools':'Tools',
        'skills.concepts':'Concepts',
        'education.title':'Education',
        'education.subtitle':'Completed coding bootcamp, specialized secondary studies',
        'experience.title':'Experience',
        'experience.subtitle':'Experience in developing school projects',
        'courses.title':'Courses',
        'courses.subtitle':'Some of the courses I have completed',
        'portfolio.title':'Portfolio',
        'portfolio.subtitle':'My recent projects',
        'portfolio.empty':'Currently I have no published projects.',
        'portfolio.add':'Add example',
        'contact.title':'Contact Me',
        'contact.subtitle':'Please feel free to reach out to me'
      },
      ja: {
        'home.title': 'こんにちは、ベンジャミン・サンタンデルです',
        'home.subtitle': 'ウェブ開発者・プログラミング学生',
        'nav.about':'私について',
        'nav.skills':'スキル',
        'nav.education':'教育',
        'nav.experience':'経験',
        'nav.courses':'コース',
        'nav.portfolio':'ポートフォリオ',
        'nav.contact':'連絡先',
        'home.contact':'連絡する',
        'about.title':'私について',
        'about.text':'私はプログラミングを専門とする高校4年生です。ウェブ開発とPython、JavaScriptでのソリューション作成に情熱を注いでいます。',
        'about.info':'年齢: 18歳 | 生年月日: 2007年4月27日 | 国籍: チリ人',
        'about.location':'所在地: チリ、ラス・アサラス0820 | 電話: +56 9 6650 6919 | ID: 22.384.522-3',
        'about.career':'ウェブ開発者としてのキャリア',
        'about.career.text':'記憶にある限り、私は常にテクノロジーの可能性に感銘を受け、それについてもっと学ぶことに興味を持ってきました。専門的なプログラミングの勉強を始めた後、最初のプロジェクトを開発する機会を得て、アイデアを現実に変える能力に刺激を受けました。',
        'about.first':'私の最初のプロジェクト',
        'about.first.text':'最終的に、プログラミングの授業を受けるようになり、Pythonを使って最初のプロジェクトを作成しました。これは学校システムから情報を抽出して完了したデータ分析プロジェクトでした。これは人生を変える経験でした。私はウェブ開発者になり、夢のアイデアをさらに実現することを決めました。',
        'about.more':'もっと見る',
        'skills.title':'スキル',
        'skills.subtitle':'これまでに習得した主要なスキル',
        'skills.languages':'言語',
        'skills.frontend':'フロントエンド',
        'skills.frameworks':'フレームワークとライブラリ',
        'skills.databases':'データベース',
        'skills.tools':'ツール',
        'skills.concepts':'コンセプト',
        'education.title':'教育',
        'education.subtitle':'コーディングブートキャンプ修了、専門的な中等教育',
        'experience.title':'経験',
        'experience.subtitle':'学校プロジェクトの開発経験',
        'courses.title':'コース',
        'courses.subtitle':'私が完了したいくつかのコース',
        'portfolio.title':'ポートフォリオ',
        'portfolio.subtitle':'最近のプロジェクト',
        'portfolio.empty':'現在、公開されているプロジェクトはありません。',
        'portfolio.add':'例を追加',
        'contact.title':'お問い合わせ',
        'contact.subtitle':'お気軽にお問い合わせください'
      },
      ko: {
        'home.title': '안녕하세요, 저는 베냐민 산탄데르입니다',
        'home.subtitle': '웹 개발자 • 프로그래밍 학생',
        'nav.about':'소개',
        'nav.skills':'기술',
        'nav.education':'교육',
        'nav.experience':'경험',
        'nav.courses':'과정',
        'nav.portfolio':'포트폴리오',
        'nav.contact':'연락처',
        'home.contact':'연락하기',
        'about.title':'소개',
        'about.text':'저는 프로그래밍을 전공하는 고등학교 4학년 학생입니다. 웹 개발과 Python, JavaScript를 사용한 솔루션 개발에 열정을 가지고 있습니다.',
        'about.info':'나이: 18세 | 생년월일: 2007년 4월 27일 | 국적: 칠레인',
        'about.location':'위치: 칠레 라스 아잘라스 0820 | 전화: +56 9 6650 6919 | ID: 22.384.522-3',
        'about.career':'웹 개발자로서의 경력',
        'about.career.text':'제가 기억하는 한, 저는 항상 기술의 잠재력에 감명을 받고 더 많이 배우는 데 관심을 가져왔습니다. 전문적인 프로그래밍 공부를 시작한 후 첫 번째 프로젝트를 개발할 기회를 얻었고 아이디어를 현실로 바꾸는 능력에 영감을 받았습니다.',
        'about.first':'내 첫 번째 프로젝트',
        'about.first.text':'결국 프로그래밍 수업을 듣기 시작했고 Python을 사용하여 첫 번째 프로젝트를 만들었습니다. 학교 시스템에서 정보를 추출하여 완료한 데이터 분석 프로젝트였습니다. 인생을 바꾼 경험이었습니다. 저는 웹 개발자가 되어 꿈의 아이디어를 더 많이 실현하기로 결심했습니다.',
        'about.more':'더 보기',
        'skills.title':'기술',
        'skills.subtitle':'지금까지 습득한 주요 기술',
        'skills.languages':'언어',
        'skills.frontend':'프론트엔드',
        'skills.frameworks':'프레임워크 및 라이브러리',
        'skills.databases':'데이터베이스',
        'skills.tools':'도구',
        'skills.concepts':'개념',
        'education.title':'교육',
        'education.subtitle':'코딩 부트캠프 완료, 전문 중등 교육',
        'experience.title':'경험',
        'experience.subtitle':'학교 프로젝트 개발 경험',
        'courses.title':'과정',
        'courses.subtitle':'내가 완료한 일부 과정',
        'portfolio.title':'포트폴리오',
        'portfolio.subtitle':'최근 프로젝트',
        'portfolio.empty':'현재 게시된 프로젝트가 없습니다.',
        'portfolio.add':'예제 추가',
        'contact.title':'연락처',
        'contact.subtitle':'자유롭게 연락 주세요'
      },
      zh: {
        'home.title': '你好，我是本杰明·桑坦德尔',
        'home.subtitle': '网页开发者 • 编程学生',
        'nav.about':'关于我',
        'nav.skills':'技能',
        'nav.education':'教育',
        'nav.experience':'经验',
        'nav.courses':'课程',
        'nav.portfolio':'作品集',
        'nav.contact':'联系',
        'home.contact':'联系',
        'about.title':'关于我',
        'about.text':'我是专攻编程的高中四年级学生。我对Web开发和使用Python和JavaScript创建解决方案充满热情。',
        'about.info':'年龄: 18岁 | 出生日期: 2007年4月27日 | 国籍: 智利',
        'about.location':'位置: 智利拉斯阿萨拉斯0820 | 电话: +56 9 6650 6919 | 身份证: 22.384.522-3',
        'about.career':'作为Web开发人员的职业生涯',
        'about.career.text':'从我记事起，我一直对技术的潜力印象深刻，并对学习更多技术感兴趣。开始专业编程学习后，我有机会开发我的第一个项目，并受到将想法变为现实的能力的启发。',
        'about.first':'我的第一个项目',
        'about.first.text':'最终，我开始上编程课，并使用Python创建了我的第一个项目。这是一个通过从学校系统提取信息完成的数据分析项目。这是一次改变人生的经历。我决定成为一名Web开发人员，实现更多梦想中的想法。',
        'about.more':'查看更多',
        'skills.title':'技能',
        'skills.subtitle':'迄今为止掌握的主要技能',
        'skills.languages':'语言',
        'skills.frontend':'前端',
        'skills.frameworks':'框架和库',
        'skills.databases':'数据库',
        'skills.tools':'工具',
        'skills.concepts':'概念',
        'education.title':'教育',
        'education.subtitle':'完成编码训练营，专业中等教育',
        'experience.title':'经验',
        'experience.subtitle':'学校项目开发经验',
        'courses.title':'课程',
        'courses.subtitle':'我已完成的一些课程',
        'portfolio.title':'作品集',
        'portfolio.subtitle':'最近的项目',
        'portfolio.empty':'目前没有已发布的项目。',
        'portfolio.add':'添加示例',
        'contact.title':'联系我',
        'contact.subtitle':'请随时联系我'
      },
      ru: {
        'home.title': 'Привет, я Бенджамин Сантандер',
        'home.subtitle': 'Веб-разработчик • Студент-программист',
        'nav.about':'Обо мне',
        'nav.skills':'Навыки',
        'nav.education':'Образование',
        'nav.experience':'Опыт',
        'nav.courses':'Курсы',
        'nav.portfolio':'Портфолио',
        'nav.contact':'Контакт',
        'home.contact':'Связаться',
        'about.title':'Обо мне',
        'about.text':'Я ученик старших классов, специализирующийся на программировании. Я увлечен веб-разработкой и созданием решений с помощью Python и JavaScript.',
        'about.info':'Возраст: 18 лет | Дата рождения: 27.04.2007 | Гражданство: Чилийское',
        'about.location':'Местоположение: Лас-Асалас 0820, Чили | Телефон: +56 9 6650 6919 | ID: 22.384.522-3',
        'about.career':'Моя карьера веб-разработчика',
        'about.career.text':'Насколько я помню, я всегда восхищался потенциалом технологий и интересовался изучением большего. Начав специализированное изучение программирования, я получил возможность разработать свои первые проекты и вдохновился способностью превращать идеи в реальность.',
        'about.first':'Мой первый проект',
        'about.first.text':'В конечном итоге я начал посещать занятия по программированию и создал свой первый проект с использованием Python. Это был проект анализа данных, который я завершил, извлекая информацию из школьной системы. Это был опыт, изменивший мою жизнь. Я решил стать веб-разработчиком и воплотить в жизнь еще больше своих мечтаний.',
        'about.more':'Показать больше',
        'skills.title':'Навыки',
        'skills.subtitle':'Основные навыки, которые я приобрел на данный момент',
        'skills.languages':'Языки',
        'skills.frontend':'Фронтенд',
        'skills.frameworks':'Фреймворки и библиотеки',
        'skills.databases':'Базы данных',
        'skills.tools':'Инструменты',
        'skills.concepts':'Концепции',
        'education.title':'Образование',
        'education.subtitle':'Завершенный буткемп по программированию, специализированное среднее образование',
        'experience.title':'Опыт',
        'experience.subtitle':'Опыт разработки школьных проектов',
        'courses.title':'Курсы',
        'courses.subtitle':'Некоторые из курсов, которые я прошел',
        'portfolio.title':'Портфолио',
        'portfolio.subtitle':'Мои недавние проекты',
        'portfolio.empty':'В настоящее время у меня нет опубликованных проектов.',
        'portfolio.add':'Добавить пример',
        'contact.title':'Свяжитесь со мной',
        'contact.subtitle':'Пожалуйста, не стесняйтесь обращаться ко мне'
      },
      de: {
        'home.title': 'Hallo, ich bin Benjamín Santander',
        'home.subtitle': 'Webentwickler • Programmierstudent',
        'nav.about':'Über mich',
        'nav.skills':'Fähigkeiten',
        'nav.education':'Bildung',
        'nav.experience':'Erfahrung',
        'nav.courses':'Kurse',
        'nav.portfolio':'Portfolio',
        'nav.contact':'Kontakt',
        'home.contact':'Kontaktieren',
        'about.title':'Über mich',
        'about.text':'Ich bin ein Schüler der Oberstufe mit Schwerpunkt Programmierung. Ich bin leidenschaftlich an Webentwicklung und der Erstellung von Lösungen mit Python und JavaScript interessiert.',
        'about.info':'Alter: 18 Jahre | Geburtsdatum: 27.04.2007 | Staatsangehörigkeit: Chilenisch',
        'about.location':'Standort: Las Azalas 0820, Chile | Telefon: +56 9 6650 6919 | ID: 22.384.522-3',
        'about.career':'Meine Karriere als Webentwickler',
        'about.career.text':'Soweit ich mich erinnern kann, habe ich schon immer das Potenzial der Technologie bewundert und wollte mehr darüber lernen. Nachdem ich mit dem spezialisierten Programmierstudium begonnen hatte, hatte ich die Gelegenheit, meine ersten Projekte zu entwickeln und wurde von der Fähigkeit inspiriert, Ideen in die Realität umzusetzen.',
        'about.first':'Mein erstes Projekt',
        'about.first.text':'Schließlich begann ich, Programmierkurse zu besuchen, und erstellte mein erstes Projekt mit Python. Es war ein Datenanalyseprojekt, das ich durch Extrahieren von Informationen aus einem Schulsystem abschloss. Es war eine lebensverändernde Erfahrung. Ich beschloss, Webentwickler zu werden und noch mehr meiner Traumideen zu verwirklichen.',
        'about.more':'Mehr anzeigen',
        'skills.title':'Fähigkeiten',
        'skills.subtitle':'Wesentliche Fähigkeiten, die ich bisher erworben habe',
        'skills.languages':'Sprachen',
        'skills.frontend':'Frontend',
        'skills.frameworks':'Frameworks und Bibliotheken',
        'skills.databases':'Datenbanken',
        'skills.tools':'Werkzeuge',
        'skills.concepts':'Konzepte',
        'education.title':'Bildung',
        'education.subtitle':'Abgeschlossenes Coding-Bootcamp, spezialisierte Sekundarbildung',
        'experience.title':'Erfahrung',
        'experience.subtitle':'Erfahrung in der Entwicklung von Schulprojekten',
        'courses.title':'Kurse',
        'courses.subtitle':'Einige der Kurse, die ich abgeschlossen habe',
        'portfolio.title':'Portfolio',
        'portfolio.subtitle':'Meine aktuellen Projekte',
        'portfolio.empty':'Derzeit habe ich keine veröffentlichten Projekte.',
        'portfolio.add':'Beispiel hinzufügen',
        'contact.title':'Kontaktieren Sie mich',
        'contact.subtitle':'Bitte zögern Sie nicht, mich zu kontaktieren'
      },
      fr: {
        'home.title': 'Bonjour, je suis Benjamín Santander',
        'home.subtitle': 'Développeur Web • Étudiant en Programmation',
        'nav.about':'À propos',
        'nav.skills':'Compétences',
        'nav.education':'Éducation',
        'nav.experience':'Expérience',
        'nav.courses':'Cours',
        'nav.portfolio':'Portfolio',
        'nav.contact':'Contact',
        'home.contact':'Contacter',
        'about.title':'À propos de moi',
        'about.text':'Je suis un élève de terminale spécialisé en programmation. Je suis passionné par le développement web et la création de solutions avec Python et JavaScript.',
        'about.info':'Âge: 18 ans | Date de naissance: 27/04/2007 | Nationalité: Chilien',
        'about.location':'Localisation: Las Azalas 0820, Chili | Téléphone: +56 9 6650 6919 | ID: 22.384.522-3',
        'about.career':'Ma carrière de développeur web',
        'about.career.text':'Depuis que je me souviens, j\'ai toujours admiré le potentiel de la technologie et j\'ai été intéressé à en apprendre davantage. Après avoir commencé mes études spécialisées en programmation, j\'ai eu l\'occasion de développer mes premiers projets et j\'ai été inspiré par la capacité à transformer des idées en réalité.',
        'about.first':'Mon premier projet',
        'about.first.text':'Finalement, j\'ai commencé à suivre des cours de programmation et j\'ai créé mon premier projet en utilisant Python. C\'était un projet d\'analyse de données que j\'ai complété en extrayant des informations d\'un système scolaire. C\'était une expérience qui a changé ma vie. J\'ai décidé de devenir développeur web et de concrétiser encore plus de mes idées de rêve.',
        'about.more':'Voir plus',
        'skills.title':'Compétences',
        'skills.subtitle':'Compétences principales que j\'ai acquises jusqu\'à présent',
        'skills.languages':'Langages',
        'skills.frontend':'Frontend',
        'skills.frameworks':'Frameworks et bibliothèques',
        'skills.databases':'Bases de données',
        'skills.tools':'Outils',
        'skills.concepts':'Concepts',
        'education.title':'Éducation',
        'education.subtitle':'Bootcamp de codage terminé, études secondaires spécialisées',
        'experience.title':'Expérience',
        'experience.subtitle':'Expérience dans le développement de projets scolaires',
        'courses.title':'Cours',
        'courses.subtitle':'Certains des cours que j\'ai suivis',
        'portfolio.title':'Portfolio',
        'portfolio.subtitle':'Mes projets récents',
        'portfolio.empty':'Actuellement, je n\'ai aucun projet publié.',
        'portfolio.add':'Ajouter un exemple',
        'contact.title':'Contactez-moi',
        'contact.subtitle':'N\'hésitez pas à me contacter'
      },
      pt: {
        'home.title': 'Olá, eu sou Benjamín Santander',
        'home.subtitle': 'Desenvolvedor Web • Estudante de Programação',
        'nav.about':'Sobre mim',
        'nav.skills':'Habilidades',
        'nav.education':'Educação',
        'nav.experience':'Experiência',
        'nav.courses':'Cursos',
        'nav.portfolio':'Portfólio',
        'nav.contact':'Contato',
        'home.contact':'Contatar',
        'about.title':'Sobre mim',
        'about.text':'Sou um estudante do ensino médio especializado em Programação. Sou apaixonado por desenvolvimento web e criação de soluções com Python e JavaScript.',
        'about.info':'Idade: 18 anos | Data de nascimento: 27/04/2007 | Nacionalidade: Chileno',
        'about.location':'Localização: Las Azalas 0820, Chile | Telefone: +56 9 6650 6919 | ID: 22.384.522-3',
        'about.career':'Minha carreira como desenvolvedor web',
        'about.career.text':'Desde que me lembro, sempre admirei o potencial da tecnologia e estive interessado em aprender mais sobre ela. Depois de começar meus estudos especializados em programação, tive a oportunidade de desenvolver meus primeiros projetos e fiquei inspirado pela capacidade de transformar ideias em realidade.',
        'about.first':'Meu primeiro projeto',
        'about.first.text':'Eventualmente, comecei a fazer aulas de programação e criei meu primeiro projeto usando Python. Foi um projeto de análise de dados que completei extraindo informações de um sistema escolar. Foi uma experiência que mudou minha vida. Decidi me tornar um desenvolvedor web e realizar ainda mais das minhas ideias de sonho.',
        'about.more':'Ver mais',
        'skills.title':'Habilidades',
        'skills.subtitle':'Principais habilidades que adquiri até agora',
        'skills.languages':'Linguagens',
        'skills.frontend':'Frontend',
        'skills.frameworks':'Frameworks e bibliotecas',
        'skills.databases':'Bancos de dados',
        'skills.tools':'Ferramentas',
        'skills.concepts':'Conceitos',
        'education.title':'Educação',
        'education.subtitle':'Bootcamp de codificação concluído, estudos secundários especializados',
        'experience.title':'Experiência',
        'experience.subtitle':'Experiência no desenvolvimento de projetos escolares',
        'courses.title':'Cursos',
        'courses.subtitle':'Alguns dos cursos que concluí',
        'portfolio.title':'Portfólio',
        'portfolio.subtitle':'Meus projetos recentes',
        'portfolio.empty':'Atualmente não tenho projetos publicados.',
        'portfolio.add':'Adicionar exemplo',
        'contact.title':'Contate-me',
        'contact.subtitle':'Sinta-se à vontade para entrar em contato comigo'
      },
      it: {
        'home.title': 'Ciao, sono Benjamín Santander',
        'home.subtitle': 'Sviluppatore Web • Studente di Programmazione',
        'nav.about':'Chi sono',
        'nav.skills':'Competenze',
        'nav.education':'Istruzione',
        'nav.experience':'Esperienza',
        'nav.courses':'Corsi',
        'nav.portfolio':'Portfolio',
        'nav.contact':'Contatto',
        'home.contact':'Contatta',
        'about.title':'Chi sono',
        'about.text':'Sono uno studente delle scuole superiori specializzato in programmazione. Sono appassionato di sviluppo web e creazione di soluzioni con Python e JavaScript.',
        'about.info':'Età: 18 anni | Data di nascita: 27/04/2007 | Nazionalità: Cileno',
        'about.location':'Posizione: Las Azalas 0820, Cile | Telefono: +56 9 6650 6919 | ID: 22.384.522-3',
        'about.career':'La mia carriera come sviluppatore web',
        'about.career.text':'Da quando ricordo, ho sempre ammirato il potenziale della tecnologia e sono stato interessato a saperne di più. Dopo aver iniziato i miei studi specializzati in programmazione, ho avuto l\'opportunità di sviluppare i miei primi progetti e sono stato ispirato dalla capacità di trasformare le idee in realtà.',
        'about.first':'Il mio primo progetto',
        'about.first.text':'Alla fine, ho iniziato a frequentare lezioni di programmazione e ho creato il mio primo progetto utilizzando Python. Era un progetto di analisi dei dati che ho completato estraendo informazioni da un sistema scolastico. È stata un\'esperienza che ha cambiato la mia vita. Ho deciso di diventare uno sviluppatore web e realizzare ancora più delle mie idee da sogno.',
        'about.more':'Vedi di più',
        'skills.title':'Competenze',
        'skills.subtitle':'Principali competenze acquisite finora',
        'skills.languages':'Linguaggi',
        'skills.frontend':'Frontend',
        'skills.frameworks':'Framework e librerie',
        'skills.databases':'Database',
        'skills.tools':'Strumenti',
        'skills.concepts':'Concetti',
        'education.title':'Istruzione',
        'education.subtitle':'Bootcamp di programmazione completato, studi secondari specializzati',
        'experience.title':'Esperienza',
        'experience.subtitle':'Esperienza nello sviluppo di progetti scolastici',
        'courses.title':'Corsi',
        'courses.subtitle':'Alcuni dei corsi che ho completato',
        'portfolio.title':'Portfolio',
        'portfolio.subtitle':'I miei progetti recenti',
        'portfolio.empty':'Attualmente non ho progetti pubblicati.',
        'portfolio.add':'Aggiungi esempio',
        'contact.title':'Contattami',
        'contact.subtitle':'Non esitare a contattarmi'
      }
    };

    // Proyectos de ejemplo
    const exampleProjects = [
      {
        title: "Sistema de Ventas",
        description: "Proyecto en Python + MySQL con CRUD y auditoría.",
        tech: ["Python", "MySQL", "Tkinter"]
      },
      {
        title: "Juego Cachipún",
        description: "Juego en Python con GUI usando Tkinter.",
        tech: ["Python", "Tkinter"]
      },
      {
        title: "Green Horizon",
        description: "Proyecto escolar sobre alimentación saludable y ODS.",
        tech: ["Python", "Data Analysis"]
      }
    ];

    let projectCounter = 0;
    let selectedProjectId = null;

    // Cerrar modal de bienvenida
    function closeWelcomeModal() {
      document.getElementById('welcomeModal').classList.add('hidden');
    }

    // Cambiar idioma: actualiza todos los elementos con atributo data-i18n
    function changeLanguage(lang){
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(texts[lang] && texts[lang][key]){
          el.textContent = texts[lang][key];
        }
      });
      // Guardar preferencia de idioma
      localStorage.setItem('language', lang);
      document.documentElement.lang = lang;
    }

    // Aplicar idioma guardado
    function applySavedLanguage() {
      const savedLang = localStorage.getItem('language') || 'es';
      changeLanguage(savedLang);
    }

    // Toggle detalles: ejemplo de remover/modificar elementos usando this
    function toggleDetails(btn){
      const parent = btn.closest('.col-lg-8');
      let more = parent.querySelector('.more-info');
      if(!more){
        more = document.createElement('div');
        more.className = 'more-info mt-4 p-3 bg-light rounded';
        more.innerHTML = '<h5 class="text-dark">Progreso Reciente</h5><p class="text-dark">He estado continuamente programando y aprendiendo. ¡Me gustaría aprender más y más!</p><div class="text-center mt-3"><p class="text-dark">¡Revisa mi progreso en GitHub!</p></div>';
        parent.appendChild(more);
        btn.textContent = 'Ocultar';
      } else {
        more.remove();
        btn.textContent = 'Ver más';
      }
    }

    // Función para eliminar proyecto usando this
    function deleteProject(btn){
      const projectCard = btn.closest('.project-card');
      if(projectCard){
        const projectId = projectCard.dataset.projectId;
        if(selectedProjectId === projectId) {
          selectedProjectId = null;
          document.getElementById('deleteSelectedBtn').style.display = 'none';
        }
        projectCard.style.opacity = '0';
        projectCard.style.transform = 'translateX(100px)';
        setTimeout(() => {
          projectCard.remove();
          // Verificar si no quedan proyectos
          const remainingProjects = document.querySelectorAll('.project-card');
          if(remainingProjects.length === 0){
            showEmptyPortfolio();
          }
        }, 300);
      }
    }

    // Seleccionar proyecto para eliminación
    function selectProject(projectId) {
      // Deseleccionar proyecto anterior
      const prevSelected = document.querySelector('.project-card.selected');
      if(prevSelected) {
        prevSelected.classList.remove('selected');
        prevSelected.style.borderColor = '';
      }
      
      // Seleccionar nuevo proyecto
      const newSelected = document.querySelector(`.project-card[data-project-id="${projectId}"]`);
      if(newSelected) {
        newSelected.classList.add('selected');
        newSelected.style.borderColor = '#ff6b6b';
        selectedProjectId = projectId;
        document.getElementById('deleteSelectedBtn').style.display = 'inline-block';
      }
    }

    // Eliminar proyecto seleccionado
    function deleteSelectedProject() {
      if(selectedProjectId) {
        const projectCard = document.querySelector(`.project-card[data-project-id="${selectedProjectId}"]`);
        if(projectCard) {
          deleteProject(projectCard.querySelector('.delete-btn'));
        }
      }
    }

    // Mostrar mensaje de portafolio vacío
    function showEmptyPortfolio(){
      const container = document.getElementById('portfolio-container');
      container.innerHTML = `
        <div class="portfolio-empty">
          <h3 data-i18n="portfolio.empty">Actualmente no tengo proyectos publicados.</h3>
          <button class="btn btn-add-example" onclick="addExampleProject(this)" data-i18n="portfolio.add">Agregar ejemplo</button>
        </div>
      `;
      changeLanguage(document.documentElement.lang);
    }

    // Agregar proyecto de ejemplo
    function addExampleProject(btn){
      const container = document.getElementById('portfolio-container');
      
      // Si es la primera vez, limpiar el contenedor vacío
      if(container.querySelector('.portfolio-empty')){
        container.innerHTML = '<div class="project-grid"></div>';
      }
      
      const projectGrid = container.querySelector('.project-grid');
      
      // Seleccionar proyecto de ejemplo (ciclar si hay más de 3)
      const project = exampleProjects[projectCounter % exampleProjects.length];
      const projectId = 'project-' + Date.now();
      projectCounter++;
      
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.dataset.projectId = projectId;
      projectCard.innerHTML = `
        <button class="delete-btn" onclick="deleteProject(this)" title="Eliminar proyecto">
          <i class="fas fa-trash"></i>
        </button>
        <h4 class="project-title">${project.title}</h4>
        <p class="project-desc">${project.description}</p>
        <div class="project-tech">
          ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      `;
      
      // Agregar evento de clic para selección
      projectCard.addEventListener('click', (e) => {
        if(!e.target.closest('.delete-btn')) {
          selectProject(projectId);
        }
      });
      
      projectGrid.appendChild(projectCard);
    }

    // Envío de formulario (funcionalidad mínima para evaluación sin backend)
    function sendMessage(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const feedback = document.getElementById('form-feedback');
      
      if(!name || !email || !message){
        feedback.textContent = 'Por favor completa todos los campos.';
        feedback.className = 'alert alert-warning';
        return;
      }
      
      feedback.textContent = 'Mensaje enviado. Gracias, ' + name + '! (simulado)';
      feedback.className = 'alert alert-success';
      document.getElementById('contact-form').reset();
    }

    // Scrollspy simple para marcar nav activo según scroll
    window.addEventListener('scroll', ()=>{
      const sections = document.querySelectorAll('main section');
      let current = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        const bottom = top + sec.offsetHeight;
        if(pageYOffset >= top && pageYOffset < bottom) {
          current = sec.getAttribute('id');
        }
      });
      document.querySelectorAll('.navbar .nav-link').forEach(link =>{
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if(href === '#' + current) link.classList.add('active');
      });
    });

    // Inicializaciones al cargar
    document.addEventListener('DOMContentLoaded', ()=>{
      document.getElementById('year').textContent = new Date().getFullYear();
      applySavedTheme();
      applySavedLanguage();
    });