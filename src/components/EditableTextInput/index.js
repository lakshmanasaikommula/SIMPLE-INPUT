import {Component} from 'react'
import {
  MainContainer,
  Container,
  Heading,
  InputContainer,
  Paragraph,
  InputElement,
  Button,
  Span,
} from './styledComponent'

class EditableTextInput extends Component {
  state = {editableText: '', isClicked: false}

  onChangeEditableText = event => {
    this.setState({
      editableText: event.target.value,
    })
  }

  onClickButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {editableText, isClicked} = this.state

    return (
      <MainContainer>
        <Container>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isClicked ? (
              <Paragraph>{editableText}</Paragraph>
            ) : (
              <InputElement
                onChange={this.onChangeEditableText}
                value={editableText}
              />
            )}
            <Button type="button" onClick={this.onClickButton}>
              {isClicked ? <Span>Edit</Span> : <Span>Save</Span>}
            </Button>
          </InputContainer>
        </Container>
      </MainContainer>
    )
  }
}

export default EditableTextInput
