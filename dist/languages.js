
            $('#selectLanguageDropdown').localizationTool({
                'defaultLanguage' : 'en_GB', /* (optional) although must be defined if you don't want en_GB */
                'showFlag': true,            /* (optional) show/hide the flag */
                'showCountry': false,         /* (optional) show/hide the country name */
                'showLanguage': true,        /* (optional) show/hide the country language */
                'languages' : {              /* (optional) define **ADDITIONAL** custom languages */
                    'italian' : {
                        'country': 'Italy',
                        'language' : 'Italian',
                        'countryTranslated': 'Italia',
                        'languageTranslated': 'Italiano',
                        'flag' : {
                            'url' : 'http://upload.wikimedia.org/wikipedia/commons/f/fb/Farm-Fresh_italy.png', /* url of flag image */
                            'class' : 'italian-flag' /* (optional) class to assign to the flag (e.g., for css styling) */
                        }
                    },
                    'german' : {
                        'country' : 'Germany',
                        'language' : 'German',
                        'languageTranslated' : 'Deutsch',
                        'flag': {
                            'url' : 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Germanyflag.png'
                        }
                    },
                    'barletta-dialect' : {
                        'country': 'Barletta',
                        'language' : 'Barlettano',
                        'countryTranslated': 'Barlett',
                        'languageTranslated': "Barlett'n",
                        'flag': {
                            'url' : 'http://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_Barletta.png'
                        }
                    }
                },
                /*
                 * Translate your strings below
                 */
                'strings' : {
                    /*
                     * You can specify the text string to translate directly...
                     */
                    'Home' : {
                        'italian' : 'Casa',
                        'german' : 'Zuhause',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'About Us': {
                        'italian' : 'Riguardo a noi',
                        'german' : 'Über uns',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Download': {
                        'italian' : 'Scaricare',
                        'german' : 'Herunterladen',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Join Us': {
                        'italian' : 'Unisciti a noi',
                        'german' : 'Begleiten Sie uns',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Partners': {
                        'italian' : 'Partner',
                        'german' : 'Partner',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'News': {
                        'italian' : 'notizia',
                        'german' : 'Nachrichten',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Histroy': {
                        'italian' : 'Storia',
                        'german' : 'Geschichte',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Redefining social networks,': {
                        'italian' : 'Ridefinizione dei social network',
                        'german' : 'Soziale Netzwerke neu definieren',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'starting with the Community!': {
                        'italian' : 'iniziando dalla comunità!',
                        'german' : 'Angefangen bei der Community!',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Download Wallet': {
                        'italian' : 'Scarica Wallet',
                        'german' : 'Brieftasche herunterladen',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'ABOUT Domocoin': {
                        'italian' : 'DI DOMOCOIN',
                        'german' : 'ÜBER Domocoin',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Community-oriented cryptocurrency': {
                        'italian' : 'Criptovaluta orientata alla comunità',
                        'german' : 'Community-orientierte Kryptowährung',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Domocoin is a cryptocurrency based on a modified PivX code. It´s main purpose is the proof of ownership to access the DOMO community.': {
                        'italian' : 'Domocoin è una criptovaluta basata su un codice PivX modificato. Lo scopo principale è la prova della proprietà per accedere alla community DOMO.',
                        'german' : 'Domocoin ist eine Kryptowährung, die auf einem modifizierten PivX-Code basiert. Sein Hauptzweck ist der Nachweis des Eigentums, um auf die DOMO-Community zugreifen zu können.',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Only people ': {
                        'italian' : 'Solo le persone ',
                        'german' : 'Nur Personen, ',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Owing atleast 1 Domocoin ': {
                        'italian' : 'di Owing atleast 1 Domocoin ',
                        'german' : 'denen mindestens 1 Domocoin zusteht, ',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'will be able to login to the network': {
                        'italian' : 'potranno accedere alla rete',
                        'german' : 'können sich am Netzwerk anmelden',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'By providing DOMO exclusive features and channels, we created an environment and userbase for our prototype, a open-source browser for social networks.': {
                        'italian' : 'Fornendo funzionalità e canali esclusivi DOMO, abbiamo creato un ambiente e una base utente per il nostro prototipo, un browser open source per i social network.',
                        'german' : 'Durch die Bereitstellung exklusiver Funktionen und Kanäle von DOMO haben wir eine Umgebung und eine Benutzerbasis für unseren Prototyp geschaffen, einen Open-Source-Browser für soziale Netzwerke.',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Domocoin is completely self-funded. No Premine, No Presale, No ICO. Join the team and earn Domocoins for your contributions!': {
                        'italian' : 'Domocoin è completamente autofinanziato. No Premine, No Presale, No ICO. Unisciti al team e guadagna Domocoins per i tuoi contributi!',
                        'german' : 'Domocoin ist vollständig eigenfinanziert. Keine Premine, kein Vorverkauf, keine ICO. Tritt dem Team bei und verdiene Domocoins für deine Beiträge!',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'THE DOMO NETWORK': {
                        'italian' : 'LA RETE DOMO',
                        'german' : 'DAS DOMO-NETZWERK',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Most social networks these days have nearly the same features, but different layouts. While many open source social networks without central power offer similar functions, there is unfortunately no rush. Everyone has their friends on a different social network, privacy and data protection seem to play a secondary role.': {
                        'italian' : 'La maggior parte dei social network in questi giorni ha quasi le stesse caratteristiche, ma layout diversi. Mentre molti social network open source senza centrale offrono funzioni simili, purtroppo non cè fretta. Ognuno ha i propri amici su un diverso social network, la privacy e la protezione dei dati sembrano giocare un ruolo secondario.',
                        'german' : 'Die meisten sozialen Netzwerke haben heutzutage fast die gleichen Funktionen, aber unterschiedliche Layouts. Während viele Open-Source-Netzwerke ohne zentrale Stromversorgung ähnliche Funktionen bieten, gibt es leider keine Eile. Jeder hat seine Freunde in einem anderen sozialen Netzwerk, Privatsphäre und Datenschutz scheinen eine untergeordnete Rolle zu spielen.',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Instead of developing a new social network that would most likely hardly be used, our solution integrates the existing social networks into a framework that offers much more security, functionality and communication through a controllable environment.': {
                        'italian' : 'Invece di sviluppare un nuovo social network che molto probabilmente non verrà utilizzato, la nostra soluzione integra i social network esistenti in un framework che offre molta più sicurezza, funzionalità e comunicazione attraverso un ambiente controllabile.',
                        'german' : 'Anstatt ein neues soziales Netzwerk aufzubauen, das höchstwahrscheinlich kaum genutzt wird, integriert unsere Lösung die vorhandenen sozialen Netzwerke in ein Framework, das weitaus mehr Sicherheit, Funktionalität und Kommunikation in einer kontrollierbaren Umgebung bietet.',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'We will integrate all social networks into a special kind of browser with the blockchain as backbone technology!': {
                        'italian' : 'Integreremo tutti i social network in un tipo speciale di browser con la blockchain come tecnologia backbone!',
                        'german' : 'Wir integrieren alle sozialen Netzwerke in einen speziellen Browser mit der Blockchain als Backbone-Technologie!',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'WHITEPAPER': {
                        'italian' : 'CARTA BIANCA',
                        'german' : 'WEISSES PAPIER',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'ENTER': {
                        'italian' : 'ACCEDERE',
                        'german' : 'EINGEBEN',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'THE PROTOTYPE': {
                        'italian' : 'IL PROTOTIPO',
                        'german' : 'DER PROTOTYP',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Coming Soon!': {
                        'italian' : 'Prossimamente!',
                        'german' : 'Demnächst!',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'DOMO LINKS': {
                        'italian' : 'LINK DOMO',
                        'german' : 'DOMO-LINKS',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Wallets, Sourcecode, Explorer. Everything you need to get started!': {
                        'italian' : 'Portafogli, Sourcecode, Explorer. Tutto il necessario per iniziare!',
                        'german' : 'Brieftaschen, Sourcecode, Explorer. Alles was Sie brauchen, um loszulegen!',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'WINDOWS': {
                        'italian' : 'FINESTRE',
                        'german' : 'WINDOWS',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'WALLET': {
                        'italian' : 'PORTAFOGLIO',
                        'german' : 'BRIEFTASCHE',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'BLOCK': {
                        'italian' : 'BLOCCARE',
                        'german' : 'BLOCK',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'EXPLORER': {
                        'italian' : 'ESPLORATORE',
                        'german' : 'FORSCHER',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'PAPER': {
                        'italian' : 'CARTA',
                        'german' : 'PAPIER',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                     'MASTERNODE': {
                        'italian' : 'MASTERNODE',
                        'german' : 'MASTERNODE',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'SETUP': {
                        'italian' : 'IMPOSTARE',
                        'german' : 'KONFIGURATION',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'LINUX': {
                        'italian' : 'LINUX',
                        'german' : 'LINUX',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'SOURCE': {
                        'italian' : 'FONTE',
                        'german' : 'QUELLE',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'CODE': {
                        'italian' : 'CODICE',
                        'german' : 'CODE',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'MAC': {
                        'italian' : 'MAC',
                        'german' : 'MAC',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'THE DOMO COMMUNITY': {
                        'italian' : 'LA COMUNITÀ DOMO',
                        'german' : 'DIE DOMO-GEMEINSCHAFT',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Join DOMO on one of many social networks...': {
                        'italian' : 'Unisciti a DOMO su uno dei tanti social network ...',
                        'german' : 'Treten Sie DOMO in einem der vielen sozialen Netzwerke bei ...',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'TWITTER': {
                        'italian' : 'TWITTER',
                        'german' : 'TWITTER',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'DISCORD': {
                        'italian' : 'DISCORD',
                        'german' : 'DISCORD',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'TELEGRAM': {
                        'italian' : 'TELEGRAM',
                        'german' : 'TELEGRAM',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Registration to the DOMO network coming soon': {
                        'italian' : 'Registrazione alla rete DOMO in arrivo',
                        'german' : 'Registrierung für das DOMO-Netzwerk in Kürze',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Exchanges, Trackers and other Domocoin listed Services': {
                        'italian' : 'Scambi, inseguitori e altri servizi elencati Domocoin',
                        'german' : 'Börsen, Tracker und andere von Domocoin gelistete Dienste',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'THE DOMO NEWS': {
                        'italian' : 'LE NOVITÀ DI DOMO',
                        'german' : 'DIE DOMO NEWS',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Tweets by @domocoin': {
                        'italian' : 'Tweet di @domocoin',
                        'german' : 'Tweets von @domocoin',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'How we became, who we are.': {
                        'italian' : 'Come siamo diventati, chi siamo.',
                        'german' : 'Wie wir wurden, wer wir sind.',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Domocoin - Release': {
                        'italian' : 'Domocoin - Release',
                        'german' : 'Domocoin - Freigabe',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Domocoin New Algorithm': {
                        'italian' : 'Domocoin New Algorithm',
                        'german' : 'Domocoin Neuer Algorithmus',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'New Blockchain More Changes!': {
                        'italian' : 'New Blockchain Altre modifiche!',
                        'german' : 'Neue Blockchain Weitere Änderungen!',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'DOMO Community-Merge': {
                        'italian' : 'Unione comunitaria DOMO',
                        'german' : 'DOMO Community-Zusammenführung',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Community First': {
                        'italian' : 'Community First',
                        'german' : 'Community zuerst',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'By rewarding contributions in Domocoins, the Community becomes the main source for development tasks. Also, contributors get the chance to join the DOMO team and be hired for specific job listings.': {
                        'italian' : 'Premiando i contributi in Domocoins, la Comunità diventa la fonte principale per le attività di sviluppo. Inoltre, i contributori hanno la possibilità di unirsi al team DOMO e di essere assunti per specifici annunci di lavoro.',
                        'german' : 'Durch die Belohnung von Beiträgen in Domocoins wird die Community zur Hauptquelle für Entwicklungsaufgaben. Mitwirkende erhalten außerdem die Möglichkeit, dem DOMO-Team beizutreten und für bestimmte Stellenangebote eingestellt zu werden.',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Below you can find currently outstanding development tasks. In order to realize those features, workforce needs to be paid. Send us a donation or apply for the job to make the features reality!': {
                        'italian' : 'Di seguito è possibile trovare attività di sviluppo attualmente in sospeso. Per realizzare queste caratteristiche, la forza lavoro deve essere pagata. Inviaci una donazione o fai domanda per il lavoro per rendere le caratteristiche realtà!',
                        'german' : 'Nachfolgend finden Sie aktuell ausstehende Entwicklungsaufgaben. Um diese Funktionen zu realisieren, muss die Belegschaft bezahlt werden. Schicken Sie uns eine Spende oder bewerben Sie sich, damit die Funktionen Wirklichkeit werden!',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Mobile Wallets': {
                        'italian' : 'Portafogli mobili',
                        'german' : 'Mobile Geldbörsen',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Blockchain Governance': {
                        'italian' : 'Governance Blockchain',
                        'german' : 'Blockchain-Governance',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'General development fund': {
                        'italian' : 'Fondo generale di sviluppo',
                        'german' : 'Allgemeiner Entwicklungsfonds',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Note: Tweets are visible on big screens only': {
                        'italian': 'Nota: i tweet sono visibili solo sui grandi schermi',
                        'german': 'Hinweis: Tweets sind nur auf großen Bildschirmen sichtbar',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    '© 2019 DOMO Coin. All Rights Reserved. domocoin.com': {
                        'italian': '© 2019 Moneta DOMO. Tutti i diritti riservati. domocoin.com',
                        'german': '© 2019 DOMO-Münze Alle Rechte vorbehalten. domocoin.com',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    },
                    'Faqs': {
                        'italian': 'Faqs',
                        'german': 'Faqs',
                        'barletta-dialect' : 'Accumminz a yuse` jquery.localizationTool.js',
                    }

                }
            });
