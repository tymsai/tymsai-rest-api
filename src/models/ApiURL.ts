export default class ApiURL {
  public static ADMIN_SEED = '/admin/seed';

  public static COMMENT = '/comment';
  public static COMMENTS = '/comments';

  public static DEBUG = '/debug';

  public static DEFINITION_NEW = '/definition/new';

  public static DEFINITIONS = '/definitions'; 
  public static DEFINITIONS_$DEFINITIONID = '/definitions/:definitionId';

  public static SEARCH = '/search'

  public static SESSION_NEW = '/session/new';
  public static SESSION = '/session';

  public static USER_NEW = '/user/new';
  
  public static USERS = '/users';
  public static USERS_$USERID = '/users/:userId';

  public static VOTE_UP = '/vote/up';
  public static VOTE_DOWN = '/vote/down';
};

export const API = {
  DEFAULT: '/',
  V1: '/api/v1',
};
