import { Component } from '@angular/core';
import Razorpay from 'razorpay';

@Component({
  selector: 'app-payment',
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  // Razorpay options
  options: any = {
    key: '123456789', // Replace with your Razorpay Key ID
    amount: 50, // Amount in paise (50000 = ₹500)
    currency: 'INR',
    name: 'Your Company Name',
    description: 'Test Transaction',
    image: 'https://your-logo-url.com/logo.png', // Replace with your logo URL
    order_id: '', // Order ID created in the backend (Optional for default Checkout)
    handler: (response: any) => {
      console.log('Payment successful:', response);
      // You can send response.razorpay_payment_id to your server for verification
    },
    prefill: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      contact: '9999999999',
    },
    notes: {
      address: 'Your Address',
    },
    theme: {
      color: '#F37254',
    },
  };

  constructor() {}

  payWithRazorpay() {
    const razorpay:any = new Razorpay(this.options);

    // Attach events to handle payment success/failure
    razorpay.on('payment.failed', (response: any) => {
      console.error('Payment failed:', response.error);
    });

    // Open the Razorpay Checkout UI
    razorpay.open();
  }
}
