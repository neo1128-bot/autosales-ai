import CustomerForm from '../components/CustomerForm'
import Head from 'next/head'

export default function CustomerFormPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Head>
        <title>客戶需求表單 - AutoSales.AI</title>
        <meta name="description" content="填寫您的需求，我們將為您提供最適合的解決方案" />
      </Head>
      <CustomerForm />
    </div>
  )
}
