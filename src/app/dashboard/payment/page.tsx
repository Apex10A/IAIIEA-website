// app/dashboard/payment/page.tsx
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { PaymentCard } from './PaymentCard'

export default async function PaymentPage() {
  const session = await auth()
  if (!session) redirect('/login')

  try {
    // Fetch pending payments from your API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pending_payments`, {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    const pending_payments = data.pending_payments || []  // Provide default empty array

    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Complete Your Payment</h1>
        {pending_payments.length === 0 ? (
          <p>No pending payments found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {pending_payments.map((payment: any) => (
              <PaymentCard key={payment.payment_id} paymentInfo={payment} />
            ))}
          </div>
        )}
      </div>
    )
  } catch (error) {
    console.error('Error fetching payments:', error)
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Complete Your Payment</h1>
        <p className="text-red-500">Error loading payments. Please try again later.</p>
      </div>
    )
  }
}