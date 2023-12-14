import { useTranslation } from 'react-i18next'
import { Form, Input, Row, Col, Checkbox, Button } from 'antd'
import { DEFAULT_USER } from '@/_mock/assets'
import { useState } from 'react'
import { SignInReq } from '@/api/services/userService'
import { useSignIn } from '@/store/userStore'

const LoginForm = () => {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)

  const signIn = useSignIn()
  const handleFinish = async ({ username, password }: SignInReq) => {
    setLoading(true)
    try {
      await signIn({ username, password })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className='mb-4 text-2xl font-bold xl:text-3xl'>{t('sys.login.signInFormTitle')}</div>
      <Form
        name='login'
        size='large'
        initialValues={{ remember: true, username: DEFAULT_USER.username, password: DEFAULT_USER.password }}
        onFinish={handleFinish}>
        <Form.Item name='username' rules={[{ required: true, message: t('sys.login.accountPlaceholder') }]}>
          <Input placeholder={t('sys.login.userName')} />
        </Form.Item>
        <Form.Item name='password' rules={[{ required: true, message: t('sys.login.passwordPlaceholder') }]}>
          <Input.Password placeholder={t('sys.login.password')} />
        </Form.Item>
        <Form.Item>
          <Row>
            <Col span={12}>
              <Form.Item name='remember' valuePropName='checked' noStyle>
                <Checkbox>{t('sys.login.rememberMe')}</Checkbox>
              </Form.Item>
            </Col>
            <Col span={12}>
              <button className='!underline'>{t('sys.login.forgetPassword')}</button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' className='w-full' loading={loading}>
            {t('sys.login.loginButton')}
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default LoginForm
