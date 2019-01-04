# FizzBuzz for AWS Lambda

This repo is a quick example of returning data from a js module via an api call hosted on AWS Lambda.

## Deploys
1. Make an AWS user that has permissions to upload to the AWS Lambda function you've made.

1. You will need to export the amazon api key and the secret key from the command line like this:
	```
	export AWS_ACCESS_KEY_ID=FIND_THIS_IN_1PASS
	export AWS_SECRET_ACCESS_KEY=FIND_THIS_IN_1PASS_TOO
	```

1. The deploy script requires an AWS region as an environment variable
	```
	export region="us-east-1"
	```

1. from the root directory, deploy the code with `deploy.sh`.  The deploy script takes argument of a folder name. That folder name needs to match the name of the AWS Lambda function in the AWS console.
