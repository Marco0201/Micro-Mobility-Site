import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SignupElements'

const SignUp = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Micro</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign up and make an account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required />
              <FormButton type='submit'>Continue</FormButton>
              {/* <Text>Forgot password</Text> */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignUp