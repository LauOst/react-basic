import { Table, Typography } from 'antd'
import Card from '@/components/card'
import Scrollbar from '@/components/scrollbar'
import ProTag from '@/styles/antd/components/tag.tsx'

export default function NewInvoice() {
  const columns = [
    {
      title: 'InvoiceId',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (_status: any) => {
        const status = _status as string
        let color = 'success'
        if (status === 'Progress') color = 'gold'
        if (status === 'Out of Date') color = 'red'
        return <ProTag color={color}>{status}</ProTag>
      },
    },
  ]

  const dataSource = [
    {
      key: '1',
      id: 'INV-1990',
      category: 'Android',
      price: '$83.74',
      status: 'Paid',
    },
    {
      key: '2',
      id: 'INV-1991',
      category: 'Mac',
      price: '$97.14',
      status: 'Out of Date',
    },
    {
      key: '3',
      id: 'INV-1992',
      category: 'Windows',
      price: '$68.71',
      status: 'Progress',
    },
    {
      key: '4',
      id: 'INV-1993',
      category: 'Android',
      price: '$85.21',
      status: 'Paid',
    },
    {
      key: '5',
      id: 'INV-1994',
      category: 'Mac',
      price: '$53.17',
      status: 'Paid',
    },
  ]

  return (
    <Card className='flex-col'>
      <header className='self-start'>
        <Typography.Title level={5}>New Invoice</Typography.Title>
      </header>
      <main className='w-full'>
        <Scrollbar>
          <Table columns={columns} dataSource={dataSource} />
        </Scrollbar>
      </main>
    </Card>
  )
}
