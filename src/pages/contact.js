import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { FaSpinner } from 'react-icons/fa'

import {
  breakpoints,
  spacing,
  fonts,
  colors,
  button,
  input,
} from '../utils/styles'
import { BackToProductsLink, Heading } from '../components/shared/typography'

const Container = styled.div`
  padding: ${spacing.lg}px ${spacing.sm}px;
  max-width: ${breakpoints.tablet}px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: ${spacing['2xl']}px;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: 550px;
    margin: 0;

    margin-bottom: ${spacing['2xl']}px;
  }
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const FormLabel = styled.label`
  color: ${colors.brandPrimary};
  font-family: ${fonts.body};
  font-size: 1.2rem;
`

const FormButton = styled.button`
  ${button.default};
  ${button.big};
  ${button.orange};
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormInput = styled.input`
  ${input.default};
  margin-bottom: ${spacing.md}px;
`

const FormTextArea = styled.textarea`
  ${input.default};
  margin-bottom: ${spacing.sm}px;
`

const Errors = styled.div`
  color: red;
  width: 100%;
  border: 1px dotted red;
  padding: ${spacing.xs}px;
`

const SuccessMessage = styled.p`
  color: ${colors.brandSecondaryLight};
  font-size: 1.5rem;
  margin: 1rem 0;
`

const spin = keyframes`
  0% {
            transform: rotate(0deg);
  }
  100% {
            transform: rotate(359deg);
  }
`

const Loading = styled(FaSpinner)`
  animation: ${spin} 1.5s infinite linear;
`

const isValidEmail = email => {
  const emailRegex = new RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  )
  return email.match(emailRegex) ? true : false
}

const sendEmail = email => {
  return fetch('/.netlify/functions/email', {
    method: 'POST',
    body: JSON.stringify(email),
  }).then(response => response.json())
}

export default () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [subject, setSubject] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [errors, setErrors] = React.useState(null)
  const [success, setSuccess] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const clearFields = () => {
    setSubject('')
    setMessage('')
    setLoading(false)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setErrors(null)
    let errors = []

    if (name.length < 1) {
      errors.push('Name is required.')
    }

    if (!isValidEmail(email)) {
      errors.push('Please provide a valid email address.')
    }

    if (subject.length < 1) {
      errors.push('Subject is required.')
    }

    if (message.length < 1) {
      errors.push('Message is required.')
    }

    if (errors.length > 0) {
      setErrors(errors)
      return
    }

    setLoading(true)
    const payload = {from: `'${name}' <${email}>`, subject, text: message}
    sendEmail(payload).then(() => {
      setSuccess(true)
      clearFields()
    })
  }

  return (
    <Container>
      <BackToProductsLink to="/">
        ← &nbsp; Back to Product Listings
      </BackToProductsLink>
      <Heading>Contact Us</Heading>
      <ContactForm onSubmit={handleSubmit}>
        {success && (
          <SuccessMessage>
            Message sent! <br />
            We will get back to you as soon as possible.
          </SuccessMessage>
        )}
        {errors && (
          <Errors>
            {errors.map((error, index) => (
              <li key={`error_${index}`}>{error}</li>
            ))}
          </Errors>
        )}
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <FormLabel htmlFor="subject">Subject</FormLabel>
        <FormInput
          type="text"
          name="subject"
          value={subject}
          onChange={e => setSubject(e.target.value)}
        />

        <FormLabel htmlFor="message">Message</FormLabel>
        <FormTextArea
          name="message"
          rows="3"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />

        <FormButton type="submit">
          {loading ? <Loading /> : 'Submit'}
        </FormButton>
      </ContactForm>
    </Container>
  )
}
