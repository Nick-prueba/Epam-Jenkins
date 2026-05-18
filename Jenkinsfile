pipeline {
    agent any

    stages {

        stage('Get repo') {
            steps {
                git 'https://github.com/Nick-prueba/Epam-Jenkins'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('API Tests') {
            steps {
                bat 'npm run test:api'
            }
        }

        stage('UI Tests') {
            steps {
                bat 'npm run test:ui'
            }
        }
    }
}