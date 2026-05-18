pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/user/repo.git'
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