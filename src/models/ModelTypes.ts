import * as Sequelize from 'sequelize';
import { UserAttributes, UserInstance } from '@src/database/User'
import { DefinitionAttributes, DefinitionInstance } from '@src/database/Definition'
import { VoteAttributes, VoteInstance } from '@src/database/Vote'

export interface Model {
  sequelize?: Sequelize.Sequelize;
  User: Sequelize.Model<UserInstance, UserAttributes>;
  Definition: Sequelize.Model<DefinitionInstance, DefinitionAttributes>;
  Vote: Sequelize.Model<VoteInstance, VoteAttributes>; 
}