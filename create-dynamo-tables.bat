aws dynamodb create-table^
  --table-name characters^
  --attribute-definitions AttributeName=username,AttributeType=S^
  --key-schema AttributeName=username,KeyType=HASH^
  --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1

aws dynamodb create-table^
  --table-name quests^
  --attribute-definitions AttributeName=username,AttributeType=S AttributeName=quest_id,AttributeType=S^
  --key-schema AttributeName=username,KeyType=HASH AttributeName=quest_id,KeyType=RANGE^
  --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1
