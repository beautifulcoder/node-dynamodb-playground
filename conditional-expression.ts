import { DynamoDBClient, UpdateItemCommand } from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';

const client = new DynamoDBClient();

const moreCoffee = async (username: string): Promise<void> => {
  await client.send(new UpdateItemCommand({
    TableName: 'characters',
    Key: marshall({ username }),
    UpdateExpression: 'SET inventory.Coffee = inventory.Coffee + :moreCoffee',
    ConditionExpression: 'inventory.Coffee < :maxCoffee',
    ExpressionAttributeValues: {
      ':maxCoffee': { N: '200000' },
      ':moreCoffee': { N: '10000' }
    }
  }));
};

void moreCoffee('beautifulcoder');
