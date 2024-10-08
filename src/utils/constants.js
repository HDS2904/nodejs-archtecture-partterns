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


module.exports = {
  STATUS_AVALIBLE
}
