/* =========================================
   QUIZSPHERE
   ONLINE QUIZ APPLICATION
   JAVASCRIPT SOURCE CODE
========================================= */


/* =========================================
   1. QUIZ CATEGORIES
========================================= */

const categories = [

    {
        name: "Web Development",
        emoji: "🌐",
        desc: "HTML, CSS, JavaScript & web concepts"
    },

    {
        name: "Python",
        emoji: "🐍",
        desc: "Python programming fundamentals"
    },

    {
        name: "Java",
        emoji: "☕",
        desc: "Java language and OOP concepts"
    },

    {
        name: "Database",
        emoji: "🗄️",
        desc: "SQL, DBMS and data management"
    },

    {
        name: "Data Structures",
        emoji: "🧩",
        desc: "Arrays, stacks, queues & algorithms"
    },

    {
        name: "Cyber Security",
        emoji: "🔐",
        desc: "Security, threats and protection"
    },

    {
        name: "Computer Networks",
        emoji: "🌍",
        desc: "Networking, protocols and devices"
    },

    {
        name: "General Knowledge",
        emoji: "🌎",
        desc: "Technology and general awareness"
    }

];


/* =========================================
   2. QUESTION DATABASE
========================================= */

const bank = {

    "Web Development": [

        [
            "Which HTML tag creates a hyperlink?",
            ["<link>", "<a>", "<href>", "<url>"],
            1
        ],

        [
            "Which CSS property changes text color?",
            ["font-style", "text-color", "color", "foreground"],
            2
        ],

        [
            "Which language adds interactivity to web pages?",
            ["HTML", "CSS", "JavaScript", "SQL"],
            2
        ],

        [
            "What does CSS stand for?",
            [
                "Creative Style Sheets",
                "Cascading Style Sheets",
                "Computer Style Syntax",
                "Colorful Style Sheets"
            ],
            1
        ],

        [
            "Which symbol selects an id in CSS?",
            [".", "#", "@", "*"],
            1
        ],

        [
            "Which method sends form data in the URL?",
            ["POST", "SEND", "GET", "PUSH"],
            2
        ],

        [
            "Which HTML element is used for the largest heading?",
            ["<h6>", "<head>", "<h1>", "<title>"],
            2
        ],

        [
            "Which JavaScript keyword declares a constant?",
            ["let", "var", "const", "static"],
            2
        ],

        [
            "What is responsive design?",
            [
                "A faster server",
                "Layout adapting to screen size",
                "A database method",
                "A browser"
            ],
            1
        ],

        [
            "Which is a valid image tag?",
            ["<img>", "<image>", "<pic>", "<src>"],
            0
        ],

        [
            "DOM stands for?",
            [
                "Document Object Model",
                "Data Object Method",
                "Digital Ordinance Model",
                "Document Oriented Mode"
            ],
            0
        ],

        [
            "Which CSS unit is relative to root font size?",
            ["px", "em", "rem", "pt"],
            2
        ]

    ],


    /* =====================================
       PYTHON
    ====================================== */

    "Python": [

        [
            "Which symbol starts a Python comment?",
            ["//", "#", "<!--", "/*"],
            1
        ],

        [
            "Which is a Python list?",
            ["(1,2)", "{1,2}", "[1,2]", "<1,2>"],
            2
        ],

        [
            "Which function displays output?",
            ["print()", "echo()", "show()", "display()"],
            0
        ],

        [
            "Which keyword defines a function?",
            ["function", "def", "fun", "define"],
            1
        ],

        [
            "Python files commonly use which extension?",
            [".java", ".py", ".pt", ".python"],
            1
        ],

        [
            "Which type is immutable?",
            ["list", "dictionary", "set", "tuple"],
            3
        ],

        [
            "What does len() return?",
            [
                "Value type",
                "Number of items",
                "Memory size",
                "Index"
            ],
            1
        ],

        [
            "Which operator is exponentiation?",
            ["^", "**", "//", "%%"],
            1
        ],

        [
            "Which statement handles exceptions?",
            [
                "try/except",
                "check/catch",
                "error/handle",
                "test/fix"
            ],
            0
        ],

        [
            "Which is a Boolean value?",
            ["True", "TRUE()", "Yes", "1.0"],
            0
        ],

        [
            "range(5) produces values from?",
            ["1 to 5", "0 to 4", "0 to 5", "5 to 10"],
            1
        ],

        [
            "Which collection stores key-value pairs?",
            ["list", "tuple", "dictionary", "set"],
            2
        ]

    ],


    /* =====================================
       JAVA
    ====================================== */

    "Java": [

        [
            "Which keyword creates an object?",
            ["new", "create", "make", "object"],
            0
        ],

        [
            "Java is primarily a?",
            [
                "Procedural language",
                "Object-oriented language",
                "Markup language",
                "Query language"
            ],
            1
        ],

        [
            "Which method is program entry point?",
            ["start()", "main()", "run()", "init()"],
            1
        ],

        [
            "Which keyword inherits a class?",
            ["inherits", "extends", "implements", "super"],
            1
        ],

        [
            "Which type stores true/false?",
            ["bool", "boolean", "bit", "logical"],
            1
        ],

        [
            "Which symbol ends a Java statement?",
            [".", ":", ";", "!"],
            2
        ],

        [
            "JVM stands for?",
            [
                "Java Virtual Machine",
                "Java Variable Method",
                "Joint Virtual Memory",
                "Java Verified Machine"
            ],
            0
        ],

        [
            "Which is not an OOP principle?",
            [
                "Encapsulation",
                "Inheritance",
                "Polymorphism",
                "Compilation"
            ],
            3
        ],

        [
            "Which keyword prevents inheritance?",
            ["static", "final", "private", "stop"],
            1
        ],

        [
            "A constructor has the same name as?",
            ["Package", "Class", "Method", "Object"],
            1
        ],

        [
            "Which collection allows duplicates?",
            ["Set", "List", "Map only", "None"],
            1
        ],

        [
            "Which keyword refers to current object?",
            ["this", "self", "current", "me"],
            0
        ]

    ],


    /* =====================================
       DATABASE
    ====================================== */

    "Database": [

        [
            "SQL stands for?",
            [
                "Structured Query Language",
                "Simple Query Logic",
                "System Query Language",
                "Structured Question List"
            ],
            0
        ],

        [
            "Which command retrieves data?",
            ["GET", "SELECT", "FETCH", "OPEN"],
            1
        ],

        [
            "Which key uniquely identifies a row?",
            [
                "Foreign key",
                "Primary key",
                "Candidate only",
                "Index key"
            ],
            1
        ],

        [
            "Which command adds a row?",
            ["INSERT", "ADD", "PUT", "CREATE"],
            0
        ],

        [
            "Which command modifies existing data?",
            ["CHANGE", "UPDATE", "MODIFY", "ALTER ROW"],
            1
        ],

        [
            "Which command removes a table?",
            ["DELETE", "DROP", "REMOVE", "CLEAR"],
            1
        ],

        [
            "A foreign key references a?",
            [
                "Primary key",
                "Random field",
                "View",
                "Trigger"
            ],
            0
        ],

        [
            "Which clause filters rows?",
            [
                "ORDER BY",
                "WHERE",
                "GROUP BY",
                "FILTER"
            ],
            1
        ],

        [
            "Which function counts rows?",
            ["SUM()", "COUNT()", "TOTAL()", "ROWS()"],
            1
        ],

        [
            "DBMS manages?",
            [
                "Images only",
                "Databases",
                "Browsers",
                "Networks only"
            ],
            1
        ],

        [
            "Normalization reduces?",
            [
                "Security",
                "Redundancy",
                "Speed",
                "Queries"
            ],
            1
        ],

        [
            "Which is a relational database?",
            ["MySQL", "HTML", "Python", "Linux"],
            0
        ]

    ],


    /* =====================================
       DATA STRUCTURES
    ====================================== */

    "Data Structures": [

        [
            "Which structure follows LIFO?",
            ["Queue", "Stack", "Tree", "Graph"],
            1
        ],

        [
            "Which follows FIFO?",
            ["Stack", "Queue", "Heap", "Tree"],
            1
        ],

        [
            "Binary search requires data to be?",
            [
                "Random",
                "Sorted",
                "Encrypted",
                "Duplicated"
            ],
            1
        ],

        [
            "Which structure uses nodes and links?",
            [
                "Linked list",
                "Array only",
                "Matrix",
                "String"
            ],
            0
        ],

        [
            "Which is a non-linear structure?",
            ["Array", "Stack", "Tree", "Queue"],
            2
        ],

        [
            "A graph contains?",
            [
                "Only nodes",
                "Vertices and edges",
                "Only edges",
                "Rows"
            ],
            1
        ],

        [
            "Which sorting algorithm repeatedly swaps adjacent elements?",
            [
                "Merge sort",
                "Bubble sort",
                "Binary sort",
                "Radix"
            ],
            1
        ],

        [
            "Array elements are commonly accessed by?",
            [
                "Index",
                "Pointer only",
                "Key only",
                "Hash"
            ],
            0
        ],

        [
            "A queue insertion occurs at?",
            ["Front", "Rear", "Middle", "Top"],
            1
        ],

        [
            "Stack deletion is called?",
            ["Pop", "Push", "Insert", "Enqueue"],
            0
        ],

        [
            "Queue deletion is called?",
            ["Pop", "Push", "Dequeue", "RemoveTop"],
            2
        ],

        [
            "Worst-case binary search is?",
            ["O(n)", "O(log n)", "O(1)", "O(n²)"],
            1
        ]

    ],


    /* =====================================
       CYBER SECURITY
    ====================================== */

    "Cyber Security": [

        [
            "What is phishing?",
            [
                "A backup method",
                "Fraudulent attempt to obtain information",
                "A firewall",
                "Encryption"
            ],
            1
        ],

        [
            "Which protects a network from unauthorized traffic?",
            [
                "Compiler",
                "Firewall",
                "Debugger",
                "Router only"
            ],
            1
        ],

        [
            "Strong passwords should be?",
            [
                "Short",
                "Unique and complex",
                "Same everywhere",
                "Public"
            ],
            1
        ],

        [
            "What does MFA add?",
            [
                "Multiple authentication factors",
                "More files",
                "Faster Wi-Fi",
                "A database"
            ],
            0
        ],

        [
            "Malware means?",
            [
                "Malicious software",
                "Mail software",
                "Management layer",
                "Manual ware"
            ],
            0
        ],

        [
            "Which is used to encrypt web traffic?",
            ["HTTPS", "HTTP", "FTP", "SMTP"],
            0
        ],

        [
            "A virus is a type of?",
            ["Malware", "Hardware", "Database", "Protocol"],
            0
        ],

        [
            "What is ransomware?",
            [
                "Data-encrypting/extortion malware",
                "Antivirus",
                "Router",
                "Password manager"
            ],
            0
        ],

        [
            "2FA means?",
            [
                "Two-factor authentication",
                "Two-file access",
                "Fast authentication",
                "File firewall access"
            ],
            0
        ],

        [
            "Which is safer on public Wi-Fi?",
            [
                "HTTPS sites",
                "Unknown downloads",
                "Sharing passwords",
                "Disabling security"
            ],
            0
        ],

        [
            "A vulnerability is?",
            [
                "A weakness",
                "A backup",
                "A password",
                "A certificate"
            ],
            0
        ],

        [
            "Social engineering targets?",
            [
                "Human behavior",
                "CPU only",
                "Cables",
                "Databases only"
            ],
            0
        ]

    ],


    /* =====================================
       COMPUTER NETWORKS
    ====================================== */

    "Computer Networks": [

        [
            "LAN stands for?",
            [
                "Local Area Network",
                "Large Access Node",
                "Long Area Network",
                "Local Admin Network"
            ],
            0
        ],

        [
            "Which device forwards packets between networks?",
            ["Switch", "Router", "Hub", "Repeater"],
            1
        ],

        [
            "IP identifies a?",
            [
                "Network interface/device address",
                "File",
                "Password",
                "Website design"
            ],
            0
        ],

        [
            "DNS converts domain names to?",
            [
                "IP addresses",
                "Passwords",
                "MAC only",
                "Files"
            ],
            0
        ],

        [
            "HTTP commonly uses port?",
            ["21", "25", "80", "110"],
            2
        ],

        [
            "HTTPS commonly uses port?",
            ["443", "53", "22", "8080"],
            0
        ],

        [
            "Which protocol sends email?",
            ["SMTP", "FTP", "HTTP", "DNS"],
            0
        ],

        [
            "Wi-Fi is a?",
            [
                "Wireless networking technology",
                "Database",
                "Programming language",
                "Cable"
            ],
            0
        ],

        [
            "MAC address is associated with?",
            [
                "Network interface",
                "Web page",
                "SQL table",
                "CPU instruction"
            ],
            0
        ],

        [
            "Which topology connects all devices to a central switch?",
            ["Star", "Ring", "Bus", "Mesh only"],
            0
        ],

        [
            "FTP is used for?",
            [
                "File transfer",
                "Email",
                "Name resolution",
                "Video editing"
            ],
            0
        ],

        [
            "TCP is known for?",
            [
                "Reliable delivery",
                "No connection",
                "Graphics",
                "Encryption only"
            ],
            0
        ]

    ],


    /* =====================================
       GENERAL KNOWLEDGE
    ====================================== */

    "General Knowledge": [

        [
            "Which planet is known as the Red Planet?",
            ["Earth", "Mars", "Jupiter", "Venus"],
            1
        ],

        [
            "CPU stands for?",
            [
                "Central Processing Unit",
                "Computer Power Utility",
                "Core Program Unit",
                "Central Print Unit"
            ],
            0
        ],

        [
            "RAM is generally?",
            [
                "Volatile memory",
                "Permanent storage",
                "A protocol",
                "A processor"
            ],
            0
        ],

        [
            "Which is an operating system?",
            ["Linux", "HTML", "SQL", "Python"],
            0
        ],

        [
            "1 byte equals?",
            ["4 bits", "8 bits", "16 bits", "32 bits"],
            1
        ],

        [
            "WWW stands for?",
            [
                "World Wide Web",
                "Web World Wide",
                "Wide Web Window",
                "World Web Wire"
            ],
            0
        ],

        [
            "Which company developed Android initially?",
            [
                "Google",
                "Android Inc.",
                "IBM",
                "Microsoft"
            ],
            1
        ],

        [
            "Which is cloud storage?",
            [
                "Online data storage",
                "CPU cache",
                "Keyboard",
                "Monitor"
            ],
            0
        ],

        [
            "AI stands for?",
            [
                "Artificial Intelligence",
                "Automatic Internet",
                "Advanced Input",
                "Applied Interface"
            ],
            0
        ],

        [
            "Which is a search engine?",
            ["Google", "Python", "Linux", "Oracle"],
            0
        ],

        [
            "Binary uses which digits?",
            [
                "0 and 1",
                "1 and 2",
                "0 to 9",
                "2 and 3"
            ],
            0
        ],

        [
            "Which device displays visual output?",
            [
                "Monitor",
                "Keyboard",
                "Microphone",
                "Router"
            ],
            0
        ]

    ]

};


/* =========================================
   3. APPLICATION VARIABLES
========================================= */

let user =
    JSON.parse(
        localStorage.getItem("qs_user")
    ) || {
        name: "Student",
        reg: "",
        email: ""