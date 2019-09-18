class UserStore {
  constructor({ transport }) {
    this.transport = transport;
  }

  getSites = () => {
    this.transport.DiveSites.getSites
      .then(response => console.log(response))
  }
}

export default UserStore;
