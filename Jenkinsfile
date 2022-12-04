pipeline {
    agent {
        docker {
            image 'node:latest'
            args '-p 3000:3000'
        }
    }
    
    stages {
        stage('Test') {
            steps {
                sh '''
                # Configure your test steps here (checkout, npm install, tests etc)
                npm install
                '''
            }
        }
        stage('Release') {
            steps {
                sh '''
                echo GH_TOKEN
                # Run optional required steps before releasing
                npx semantic-release --debug
                '''
            }
        }
    }
}