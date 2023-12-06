import { Col, Row, Card } from 'antd'
import ChartArea from './view/chart-area'
import ChartLine from './view/chart-line'
import ChartColumnSingle from './view/chart-column-single'
const ChartPage = () => {
  return (
    <Row gutter={[16, 16]} justify='center'>
      <Col span={23} lg={12}>
        <Card title='Area'>
          <ChartArea />
        </Card>
      </Col>
      <Col span={23} lg={12}>
        <Card title='Line'>
          <ChartLine />
        </Card>
      </Col>

      <Col span={23} lg={12}>
        <Card title='Column Single'>
          <ChartColumnSingle />
        </Card>
      </Col>
    </Row>
  )
}

export default ChartPage
