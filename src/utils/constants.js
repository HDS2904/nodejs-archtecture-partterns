/** @enum {string} */
const STATUS_AVALIBLE = {
  active: 'active',
  inactive: 'inactive',
  deleted: 'deleted',

  /** @return { Array<string> }  */
  listToString() {
    return [ this.active, this.deleted, this.inactive ]
  }
};

/** @enum {string} */
const USER_ROLE = {
  user: 'USER',
  admin: 'ADMIN',
  moderator: 'MODERATOR',

  /** @return { Array<string> }  */
  listToString() {
    return [ this.user, this.admin, this.moderator ]
  }
};

module.exports = {
  STATUS_AVALIBLE,
  USER_ROLE
}
