pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'lab3', url: 'https://github.com/milanasolyanka/nodejs-server.git'
            }
        }

        stage('Build services') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Start services') {
            steps {
                sh 'docker compose up -d'
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