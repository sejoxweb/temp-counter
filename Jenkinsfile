pipeline {
    agent {
        docker {
            image 'node:latest'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Delivery') { 
            steps {
                sh 'GH_TOKEN=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 npx semantic-release' 
            }
        }
    }
}