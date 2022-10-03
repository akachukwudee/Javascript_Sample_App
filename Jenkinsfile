node{
    stage('SCM Checkout'){
        git credentialsId: 'Github-SSH', url: 'https://github.com/akachukwudee/Javascript_Sample_App.git'
    }
    stage('Build Docker Image'){
        sh 'docker build -t 401602273424.dkr.ecr.us-east-1.amazonaws.com/my-app:1.0 .'
    }
    stage('Push Docker Image ECR'){
        withAWS(credentials: 'aws-ubuntu-ecr', region: 'us-east-1'){
            sh 'aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 401602273424.dkr.ecr.us-east-1.amazonaws.com'
        }
        sh 'docker push 401602273424.dkr.ecr.us-east-1.amazonaws.com/my-app:1.0'
    }
    stage('Run docker compose DeployToAWS'){
        sshagent(['deployment-server']){
            sh 'ssh -o StrictHostKeyChecking=no ubuntu@ec2-3-86-92-161.compute-1.amazonaws.com'
            git credentialsId: 'Github-SSH', url: 'https://github.com/akachukwudee/Javascript_Sample_App.git'
            sh 'docker compose up -d'
        }

    }
}
