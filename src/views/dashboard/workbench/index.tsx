import { Button } from 'antd'
import userService, { SignInReq } from '@/api/services/userService'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

const Workbench = () => {
  const [flag, setFlag] = useState(false)
  const data: SignInReq = {
    username: 'admin',
    password: '123456',
  }
  const handleClick = () => {
    setFlag(!flag)
    // console.log('click', userService.signin(data))
    //
    // const signInMutation = useMutation(userService.signin)
    // console.log(signInMutation.mutateAsync(data))
  }

  const handleClickMutation = () => {
    const signInMutation = useMutation({
      mutationFn: userService.signin,
    })
    console.log(signInMutation.mutateAsync(data))
  }

  return (
    <>
      <div>Workbench {flag ? 'true' : 'false'} </div>
      <Button onClick={handleClick}>Click</Button>
      <Button onClick={handleClickMutation}>Click Mutation</Button>
    </>
  )
}

export default Workbench
