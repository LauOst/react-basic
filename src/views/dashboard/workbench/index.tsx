import { Button } from 'antd'

const Workbench = () => {
  const handleClick = () => {}
  const handleClickMutation = () => {}

  return (
    <>
      <div>Workbench </div>
      <Button onClick={handleClick}>Click</Button>
      <Button onClick={handleClickMutation}>Click Mutation</Button>
    </>
  )
}

export default Workbench
