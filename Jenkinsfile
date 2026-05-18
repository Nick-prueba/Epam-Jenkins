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

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('API Tests') {
            steps {
                //bat 'npm run test:api'
                bat 'npx playwright test --config=./src/configs/playwright.config.js --project=api --reporter=list'
            }
        }

        stage('UI Tests') {
            steps {
                bat 'npm run test:ui'
            }
        }
    }
}