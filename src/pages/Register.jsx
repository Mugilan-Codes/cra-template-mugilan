import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('email:', email)
    console.log('password:', password)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          {/* FloatingLabel controlId='floatingInputGrid' label='Email address */}
          <FloatingLabel label='Email address'>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicSelect'>
          <FloatingLabel controlId='floatingSelect' label='Works with selects'>
            <Form.Select aria-label='Floating label select example'>
              <option>Open this select menu</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </Form.Select>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formState'>
          <Form.Label>State</Form.Label>
          <Form.Control
            as='select'
            name='state'
            // defaultValue={this.props.inputValues.state}
            // onChange={this.props.handleChange}
          >
            <option value='AL'>Alabama</option>
            <option value='AK'>Alaska</option>
            <option value='AZ'>Arizona</option>
          </Form.Control>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default RegisterPage
