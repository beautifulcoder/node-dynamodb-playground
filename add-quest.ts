import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';
import { ulid } from 'ulid';

import type { Quest } from './models/quest';

const client = new DynamoDBClient();

const addQuest = async (quest: Quest): Promise<void> => {
  await client.send(new PutItemCommand({
    TableName: 'quests',
    Item: marshall(quest)
  }));
};

const now = new Date();
const twoWeeksFromNow = new Date(Date.now() + 12096e5);
const minuteFromNow = new Date(Date.now() + 60000);

void addQuest({
  username: 'beautifulcoder',
  quest_id: ulid(now.getTime()),
  quest_name: 'Sole Survivor',
  quest_started_at: now.toISOString(),
  quest_completed_at: twoWeeksFromNow.toISOString(),
  checkpoints: [1, 2, 3, 4, 5],
  gold: 1000
});

void addQuest({
  username: 'beautifulcoder',
  quest_id: ulid(minuteFromNow.getTime()),
  quest_name: 'A Lost Cause',
  quest_started_at: now.toISOString(),
  checkpoints: [6, 7, 8, 9, 10],
  gold: 10000
});
