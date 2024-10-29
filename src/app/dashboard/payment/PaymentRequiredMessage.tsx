import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const PaymentRequiredMessage = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Payment Required</h2>
        <p className="text-gray-600 text-center max-w-md">
          Please proceed to make payment to access this page and other exclusive content.
        </p>
        <Button asChild>
          <Link href="/dashboard/payment">
            Proceed to Payment
          </Link>
        </Button>
      </div>
    )
  }