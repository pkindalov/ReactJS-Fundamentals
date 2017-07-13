import React, { Component } from 'react'
import FormHelpers from '../common/forms/FormHelpers'
import CreatePetForm from './CreatePetForm'
import petActions from '../../actions/PetActions'
import petStore from '../../stores/PetStore'
import toastr from 'toastr'

class CreatePetPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      pet: {
        name: 'Pesho',
        age: 2,
        type: 'Cat',
        image: 'https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg',
        breed: 'Street'
      },
      error: ' '
    }

    this.handlePetCreation = this.handlePetCreation.bind(this)

    petStore.on(
     petStore.eventTypes.PET_CREATED,
     this.handlePetCreation

   )
  }

  componentWillUnmount () {
    petStore.removeListener(
     petStore.eventTypes.PET_CREATED,
     this.handlePetCreation
   )
  }

  handlePetChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'pet')
  }

  handlePetForm (event) {
    event.preventDefault()

    // validate
    petActions.create(this.state.pet)
  }

  handlePetCreation (data) {
    if (!data.success) {
      let firstError = FormHelpers.getFirstError(data)

      this.setState({
        error: firstError
      })
    } else {
      toastr.success(data.message)
      this.props.history.push(`/pets/details/${data.pet.id}`)
    }
  }

  render () {
    return (
      <div>
        <h1>Add your pet</h1>
        <CreatePetForm
          pet={this.state.pet}
          error={this.state.error}
          onChange={this.handlePetChange.bind(this)}
          onSave={this.handlePetForm.bind(this)}
        />
      </div>
    )
  }
}

export default CreatePetPage
