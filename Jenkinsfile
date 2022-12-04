// The release stage in the pipeline will run only if the test stage in the pipeline is successful
pipeline {
    agent {
        docker {
            image 'node:16-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI='true'
        GH_TOKEN  = "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"
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Release') {
            steps {
                sh 'npx semantic-release'
            }
        }
    }
}