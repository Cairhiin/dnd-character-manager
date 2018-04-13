export default {
  charactersList: (response) => {
    return {
      type: 'CHARACTERS_LIST_ADD',
      payload: { response: response }
    }
  }
}
