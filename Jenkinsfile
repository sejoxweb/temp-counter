// The release stage in the pipeline will run only if the test stage in the pipeline is successful
pipeline {
    agent any
    environment {
        GH_TOKEN  = credentials('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')
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