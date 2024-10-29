// components/payment/PaymentCard.tsx
import React from 'react'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'

export const PaymentCard = ({ paymentInfo }: { paymentInfo: any }) => {
  const { data: session } = useSession()
  
  const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY!,
    tx_ref: paymentInfo.payment_id,
    amount: paymentInfo.amount,
    currency: paymentInfo.currency,
    payment_options: 'card,banktransfer',
    customer: {
      email: session?.user.email!,
      name: `${session?.user.f_name} ${session?.user.l_name}`,
      phone_number: session?.user.phone!,
    },
    customizations: {
      title: 'Membership Payment',
      description: paymentInfo.title,
      logo: 'https://your-logo-url.png',
    },
    callback: async (response: any) => {
      try {
        const res = await fetch('/api/payment/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            transaction_id: response.transaction_id,
            tx_ref: response.tx_ref,
          }),
        })
        
        const data = await res.json()
        
        if (data.status === 'success') {
          toast.success('Payment verified successfully')
          window.location.reload()
        } else {
          toast.error('Payment verification failed')
        }
      } catch (error) {
        toast.error('An error occurred')
      }
      closePaymentModal()
    },
  }

  const handleFlutterPayment = useFlutterwave(config)

  return (
    <Card>
      <CardHeader>
        <CardTitle>{paymentInfo.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Amount:</span>
            <span>{paymentInfo.amount} {paymentInfo.currency}</span>
          </div>
          <Button 
            onClick={() => handleFlutterPayment()}
            className="w-full"
          >
            Make Payment
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}