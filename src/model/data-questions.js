var QUIZZ_OBJ = [
    { 
        "question": "What is the full form of VCS?",
        "choice": ["(a) Voice Chat System", "(b) Voice Calling System", "(c) None", "(d)Version Control System"],
        "correct": {position: 3, item: 'd', desc: 'Version Control System'}
   },
   { 
        "question": "Which of the following command line environment is used for interacting with Git ?",
        "choice": ["(a) Git Lab", "(b) Git Boot", "(c) GitHub", "(d)  Git Bash"],
        "correct": {position: 3, item: 'd', desc: 'Git Bash'}
   },
//     { 
//         "question": "The files that can be committed are always present in git",
//         "choice": ["(a) working directory", "(b) Anywhere, there is no barrier", "(c) unstaged area", "(d) staging area"],  //quizObj[2].choice[0],quizObj[2].choice[1]
//         "correct": {position: 3, item: 'd', desc: 'staging area'}
//    },
    { 
        "question": "Which of these Git client commands creates a copy of the repository and a working directory in the clients workspace?",
        "choice": ["(a) clone", "(b) update", "(c) checkout", "(d) None of the above"],  //quizObj[2].choice[0],quizObj[2].choice[1]
        "correct": {position: 0, item: 'a', desc: 'clone'}
   },
    { 
        "question": "Which of the following adds all new files to local repository?",
        "choice": ["(a) git add -A", "(b) git add -u", "(c) git add .", "(d) None"],  //quizObj[2].choice[0],quizObj[2].choice[1]
        "correct": {position: 2, item: 'c', desc: 'git add .'}
   },
//     { 
//         "question": "Which command creates an empty Git repository in the specified directory?",
//         "choice": ["(a) git log", "(b) git init", "(c) git init --bare", "(d) git reset"],  //quizObj[2].choice[0],quizObj[2].choice[1]
//         "correct": {position: 1, item: 'b', desc: 'git init'}
//    },
//     { 
//         "question": "Which of the following is true about Centralized version control system?",
//         "choice": ["(a)  It is victim to a single point of failure", "(b) Both A and C", "(c) It relies on the central server", "(d) It does not rely on the central server"],  //quizObj[2].choice[0],quizObj[2].choice[1]
//         "correct": {position: 1, item: 'b', desc: 'Both A and C'}
//    },
//    { 
//         "question": "The Development Environment which host on the cloud called",
//         "choice": ["(a) Vs CodeSpace", "(b) GitHub CodeSpace", "(c) Git CodeSpace", "(d) None"], 
//         "correct": {position: 1, item: 'b', desc: 'GitHub CodeSpace'}
//    }, 
//    { 
//         "question": "What are the advantages of using GIT?",
//         "choice": ["(a) Tracking", "(b) Collaboration", "(c)  Versioning", "(d)   All of the above"],
//         "correct": {position: 3, item: 'd', desc: 'All of the above'}
//    },
//    { 
//         "question": "Is this quiz helpful for you?",
//         "choice": ["(a) No", "(b) Choose Option C XD", "(c) Yes", "(d) XD"],  //quizObj[2].choice[0],quizObj[2].choice[1]
//         "correct": {position: 2, item: 'c' , desc: 'Yes'} 
//    },
   { 
        "question": "Git can be used for which project?",
        "choice": ["(a) All of the above", "(b) Java enterprise project", "(c) .Net project", "(d) File version management"],  //quizObj[2].choice[0],quizObj[2].choice[1]
        "correct": {position: 0, item: 'a', desc: 'All of the above'}
   },
   { 
        "question": "What is the full form of GDSC?",
        "choice": ["(a) Google Developer Students Club", "(b) Google Developer Society Clubs", "(c) Github Developer Students Club", "(d) GIT Developer Students Club"],  //quizObj[2].choice[0],quizObj[2].choice[1]
        "correct": {position: 0, item: 'a', desc: 'Google Developer Students Club'}
   },
   { 
        "question": " What is the opposite of a GIT clone?",
        "choice": ["(a) GIT push", "(b) GIT status", "(c)GIT add", "(d) GIT upload"],  //quizObj[2].choice[0],quizObj[2].choice[1]
        "correct": {position: 0, item: 'a', desc: 'GIT push'}
   },
   { 
        "question": "Which of the following commands is used in switching between branches?",
        "choice": ["(a)GIT branch", "(b) GIT switch", "(c) GIT checkout", "(d) GIT merge"],  //quizObj[2].choice[0],quizObj[2].choice[1]
        "correct": {position: 2, item: 'c', desc: 'GIT checkout'}
   },
//    { 
//         "question": "Who is attributed with inventing GIT?",
//         "choice": ["(a) Linus Torvalds", "(b) Koska Kawaguchi", "(c) Junio C. Hamano", "(d) James Gosling"],  //quizObj[2].choice[0],quizObj[2].choice[1]
//         "correct": {position: 0, item: 'a', desc: 'Linus Torvalds'}
//    },
//    { 
//         "question": "Which of these terms best describes GitHub?",
//         "choice": ["(a) Distributed Version Control System ", "(b) Integrated Development Environment", "(c) Web-Based Repository Hosting Service", "(d) Issue Tracking System"], 
//         "correct": {position: 2, item: 'c', desc: 'Web-Based Repository Hosting Service'}
//    },
   { 
        "question": "What command do you run to view the commit history of your repository?",
        "choice": ["(a) GIT past", "(b) GIT history", "(c) GIT commit -h", "(d) GIT log"], 
        "correct": {position: 3, item: 'd', desc: 'GIT log'}
   },
   { 
        "question": "How do you check the state of your local git repository since your last commit?",
        "choice": ["(a) GIT diff", "(b) GIT commit", "(c) GIT status", "(d) GIT check"], 
        "correct": {position: 2, item: 'c', desc: 'GIT status'}
   },
//    { 
//         "question": "What's a shortcut to staging all the changes you have?",
//         "choice": ["(a) GIT stage -a", "(b) GIT commit add", "(c) GIT add", "(d) GIT commit"], 
//         "correct": {position: 2, item: 'c', desc: 'GIT add'}
//    },
   { 
        "question": "How do you supply a commit message to a commit?",
        "choice": ["(a) GIT message -m I am coding!", "(b) GIT commit -m I am coding!  ", "(c) GIT add -m I am coding!", "(d) GIT push -m I am coding!"], 
        "correct": {position: 1, item: 'b', desc: 'GIT commit -m I am coding!'}
   },
   { 
        "question": "What's the git command that downloads your repository from GitHub to your computer?",
        "choice": ["(a) GIT clone", "(b) GIT fork", "(c) GIT commit", "(d) GIT push"], 
        "correct": {position: 0, item: 'a', desc: 'GIT clone'}
   },
//    { 
//         "question": "Which is the correct usage of the push command? ",
//         "choice": ["(a) Both correct", "(b) GIT push <remote> <branch>", "(c) GIT push <branch> <remote>", "(d) None of them"], 
//         "correct": {position: 1, item: 'b', desc: 'GIT push <remote> <branch>'}
//    },
   { 
        "question": "Which is the correct order to submit your changes from the working directory all the way to the remote repository?",
        "choice": ["(a) GIT add, git push, git commit", "(b) GIT push, git add, git commit", "(c) GIT commit, git add, git push", "(d) GIT add, git commit, git push"], 
        "correct": {position: 3, item: 'd', desc: 'GIT add, git commit, git push'}
   },
//    { 
//         "question": "Which of the following commands show changes between commits?",
//         "choice": ["(a)  GIT commit", "(b) GIT reset", "(c)  GIT show", "(d) GIT diff"], 
//         "correct": {position: 3, item: 'd', desc: 'GIT diff'}
//    },
//    { 
//         "question": "Which of the following commands join two or more development histories together?",
//         "choice": ["(a) GIT push", "(b) GIT join", "(c) GIT branch", "(d) GIT merge"], 
//         "correct": {position: 3, item: 'd', desc: 'GIT merge'}
//    },
   { 
        "question": "Which of the following commands is used in switching between branches?",
        "choice": ["(a) GIT switch", "(b) GIT merge", "(c) GIT checkout", "(d)GIT branch"], 
        "correct": {position: 2, item: 'c', desc: 'GIT checkout'}
   },
//    { 
//         "question": "Which of the following commands is used to reset the current HEAD to the specified state?",
//         "choice": ["(a) GIT checkout", "(b) GIT diff", "(c) GIT restore", "(d) GIT reset"], 
//         "correct": {position: 3, item: 'd', desc: 'GIT reset'}
//    },
//    { 
//         "question": "What is the full form of GDSC? ",
//         "choice": ["(a) Google Developer Software Club", "(b) Google Developer Song Club", "(c) Game Developer Student Club", "(d) Google Developer Student Club"], 
//         "correct": {position: 3, item: 'd', desc: 'Google Developer Student Club'}
//    },
   { 
        "question": " What is the full form of HTML?",
        "choice": ["(a)  Hyper Text Markup Language", "(b) Hello Text Markup Language", "(c) High Technology Markup Language", "(d) None"], 
        "correct": {position: 0, item: 'a', desc: 'Hyper Text Markup Language'}
   }, 
   { 
        "question": "What is the full form of CSS?",
        "choice": ["(a) Computer Science Student", "(b) None", "(c)Copy Style Sheets", "(d) Cascading Style Sheets"], 
        "correct": {position: 3, item: 'd', desc: ' Cascading Style Sheets'}
   },
   { 
        "question": "What is the full form of JS?",
        "choice": ["(a) XD", "(b) None", "(c) Java SDE", "(d) Java Script"], 
        "correct": {position: 3, item: 'd', desc: 'Java Sript'}
   },
//    { 
//         "question": "What is full form of DBMS ",
//         "choice": ["(a) DATABASE XD", "(b) None", "(c) XD", "(d) DATABASE MANAGEMENT SYSTEM"], 
//         "correct": {position: 3, item: 'd', desc: 'DATABASE MANAGEMENT SYSTEM'}
//    },
   { 
        "question": "Who is the Cordinator of Frontend in GDSC IIITA?",
        "choice": ["(a) Rushil Patra", "(b) Pranav Sahu", "(c) Priyal Saxena", "(d) MD. Moshin Raza"], 
        "correct": {position: 2, item: 'c', desc: 'Priyal Saxena'}
   },
   { 
        "question": "Who is the Cordinator of Backend in GDSC IIITA?",
        "choice": ["(a) Rushil Patra", "(b) Pranav Sahu", "(c) Priyal Saxena", "(d) MD. Moshin Raza"], 
        "correct": {position: 3, item: 'd', desc: 'MD. Moshin Raza'}
   },
   { 
        "question": "Who is the Cordinator of Design Wing in GDSC IIITA?",
        "choice": ["(a) Shruti Koshta", "(b) Rushil Patra", "(c) Priyal Saxena", "(d) MD. Moshin Raza"], 
        "correct": {position: 0, item: 'a', desc: 'Shruti Koshta'}
   }
   
];

export default {QUIZZ_OBJ};