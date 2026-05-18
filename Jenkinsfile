pipeline {
    agent any

    environment {
        PROJECT_DIR = 'src/config'
    }

    stages {

        stage('Get repo') {
            steps {
                checkout scm
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