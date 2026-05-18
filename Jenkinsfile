pipeline {
    agent any

    stages {

        stage('Get repo') {
            steps {
                checkout scm
            }
        }

        stage('Create credentials file') {
            steps {
                withCredentials([
                    string(credentialsId: 'API_CREDENTIALS', variable: 'API_CREDENTIALS')
                ]) {
                    bat """
                        bat "echo export const credentials = '%API_CREDENTIALS%'; > src\\api\\services\\credentials.js"
                    """
                }
                bat 'type src\\api\\services\\credentials.js'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'node --version'
                bat 'npm install 2>&1'
            }
        }

        // stage('Install Playwright Browsers') {
        //     steps {
        //         bat 'npx playwright install'
        //     }
        // }

        stage('API Tests') {
            steps {
                //bat 'npm run test:api'
                bat '''
                    set FORCE_COLOR=0
                    set CI=true
                    npm run test:api
                '''
            }
        }

        stage('UI Tests') {
            steps {
                bat 'npm run test:ui'
            }
        }
    }
}