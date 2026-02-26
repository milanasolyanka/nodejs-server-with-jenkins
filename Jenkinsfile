pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', 
                  branches: [[name: '*/master']], 
                  userRemoteConfigs: [[url: 'https://github.com/milanasolyanka/nodejs-server-with-jenkins.git']]])
            }
        }

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
}