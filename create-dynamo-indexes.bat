aws dynamodb update-table^
  --table-name characters^
  --attribute-definitions AttributeName=guild,AttributeType=S AttributeName=username,AttributeType=S^
  --global-secondary-index-updates file://gsi-guild-username.json

aws dynamodb update-table^
  --table-name quests^
  --attribute-definitions AttributeName=username,AttributeType=S AttributeName=quest_completed_at,AttributeType=S^
  --global-secondary-index-updates file://gsi-username-quest_completed_at.json
