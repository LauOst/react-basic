import { Col, Row, Space } from 'antd'
import BannerCard from './banner-card'
import { Applications, Conversion } from './conversion_applications'
import NewInvoice from '@/views/dashboard/workbench/new-invoice.tsx'

const Workbench = () => {
  return (
    <>
      <Row gutter={[16, 16]} justify='center'>
        <Col span={24} md={16}>
          <BannerCard />
        </Col>
        <Col span={24} md={8}>
          <Space direction='vertical' size='middle' className='h-full w-full'>
            <Conversion />
            <Applications />
          </Space>
        </Col>
      </Row>
      <Row gutter={[16, 16]} className='mt-4' justify='center'>
        <Col span={23} md={12} lg={16}>
          <NewInvoice />
        </Col>
      </Row>
    </>
  )
}

export default Workbench
