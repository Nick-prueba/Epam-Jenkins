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
        
        stage('Create credentials file') {
            steps {
                withCredentials([
                    string(credentialsId: 'API_USER', variable: 'API_USER'),
                    string(credentialsId: 'API_PASS', variable: 'API_PASS')
                ]) {
                    bat """
                        echo export const credentials = { user: "%API_USER%", password: "%API_PASS%" }; > src\\api\\services\\credentials.js
                    """
                }
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