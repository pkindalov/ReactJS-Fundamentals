class FormHandlers {
  static handleFormChange (event, statefield) {
    const target = event.target
    const name = target.name
    const value = target.value

    const state = this.state[statefield]
    state[name] = value

    this.setState({ [statefield]: state })
  }
}

export default FormHandlers
