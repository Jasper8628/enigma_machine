import boto3


def handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('messages')
    response = table.scan()
    items = response['Items']
    print(items)
    return {
        'message': 'Hello from your new Amplify Python lambda!',
        'items': items
    }
