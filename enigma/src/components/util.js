import { DynamoDB } from 'aws-sdk';
const dynamodb = new DynamoDB();
export const appendList = (event) => {
  let item = {
    'name': event.name,
    'code': event.code,
    'message': event.message,
    'time': event.time
  }
  var params = {
    "TableName": 'messages-dev',
    "Key": {
      ID: {
        S: "time"
      }
    },
    "UpdateExpression": "SET #attrName = list_append(#attrName, :attrValue)",
    "ExpressionAttributeNames": {
      "#attrName": "collection"
    },
    "ExpressionAttributeValues": {
      ":attrValue": [item]
    }
  };
  dynamodb.update(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
}