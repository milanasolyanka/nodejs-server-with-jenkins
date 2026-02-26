pipeline {
    agent any

    stages {

        stage('Build services') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Start services') {
            steps {
                sh 'docker-compose up -d'
            }
        }

        stage('Check running containers') {
            steps {
                sh 'docker ps'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
    }
}