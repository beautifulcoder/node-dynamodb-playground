import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';

import type { Character } from './models/character';

const client = new DynamoDBClient();

const addCharacter = async (character: Character): Promise<void> => {
  await client.send(new PutItemCommand({
    TableName: 'characters',
    Item: marshall(character)
  }));
};

void addCharacter({
  username: 'beautifulcoder',
  class: 'Mage',
  guild: 'Hacker',
  inventory: {
    'Mechanical Keyboard': 1,
    'Kaihl Switches': 100,
    Coffee: 100000
  },
  total_play_time: 3600
});
