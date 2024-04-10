import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';
import { ulid } from 'ulid';

import type { CharacterItem, InventoryItem, QuestItem } from './models/game';

const client = new DynamoDBClient();

const addCharacter = async (character: CharacterItem): Promise<void> => {
  await client.send(new PutItemCommand({
    TableName: 'game',
    Item: marshall(character)
  }));
};

const addInventory = async (inventory: InventoryItem): Promise<void> => {
  await client.send(new PutItemCommand({
    TableName: 'game',
    Item: marshall(inventory)
  }));
};

const addQuest = async (quest: QuestItem): Promise<void> => {
  await client.send(new PutItemCommand({
    TableName: 'game',
    Item: marshall(quest)
  }));
};

void addCharacter({
  partition_key: 'USER#beautifulcoder',
  sort_key: 'CHARACTER',
  type: 'Character',
  class: 'Mage',
  guild: 'Hacker',
  total_play_time: 3600
});

void addInventory({
  partition_key: 'USER#beautifulcoder',
  sort_key: 'INVENTORY',
  type: 'Inventory',
  inventory: {
    'Mechanical Keyboard': 1,
    'Kaihl Switches': 100,
    Coffee: 100000
  }
});

const now = new Date();
const twoWeeksFromNow = new Date(Date.now() + 12096e5);
const minuteFromNow = new Date(Date.now() + 60000);

void addQuest({
  partition_key: 'USER#beautifulcoder',
  sort_key: `QUEST#${ulid(now.getTime())}`,
  type: 'Quest',
  quest_name: 'Sole Survivor',
  quest_started_at: now.toISOString(),
  quest_completed_at: twoWeeksFromNow.toISOString(),
  checkpoints: [1, 2, 3, 4, 5],
  gold: 1000
});

void addQuest({
  partition_key: 'USER#beautifulcoder',
  sort_key: `QUEST#${ulid(minuteFromNow.getTime())}`,
  type: 'Quest',
  quest_name: 'A Lost Cause',
  quest_started_at: now.toISOString(),
  checkpoints: [6, 7, 8, 9, 10],
  gold: 10000
});
