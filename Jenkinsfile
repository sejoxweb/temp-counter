pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
    environment {
        GH_TOKEN  = credentials('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')
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('test') { 
            steps {
                sh 'npx semantic-release' 
            }
        }
    }
}