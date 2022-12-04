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
                sh 'npx semantic-release' 
            }
        }
    }
}