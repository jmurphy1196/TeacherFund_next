import React, { Component } from 'react'
import PageWrapper from '../components/pageWrapper'
import DonateTicketForm from '../components/donateTicketForm'
import { Box } from '@chakra-ui/react'
import { Elements, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY)

const InjectedDonateForm = () => (
  <ElementsConsumer>
    {({ elements, stripe }) => (
      <DonateTicketForm elements={elements} stripe={stripe} />
    )}
  </ElementsConsumer>
)

class Tickets extends Component {
  render () {
    return (
      <PageWrapper title='Ticket Donation – The Teacher Fund' noShowBanner>
        <React.Fragment>
          <div className='flex flex-column bg-trans-gray justify-between ph3 pv4 pv5-ns pa4-ns'>
            <div className='flex flex-column tf-lato tc mv-auto'>
              <h1 className='tf-dark-gray f2 f1-l tf-oswald fl'>
                    Purchase tickets to the fall 2022 event today!
              </h1>
              <p className='tf-lato-lite f3-m pa1 w-75-m w-50-l m-auto lh-5 lh-copy mv2'>
                    With 100 percent of your ticket donation funding public school teachers in need, you can
                    give knowing that your entire gift will help equip classrooms and help students.
              </p>
              <Box width='30%' margin='auto' height='1px' bg='black' />
              <p className='tf-lato-lite f3-m pa1 w-75-m w-50-l m-auto lh-5 lh-copy mv2'>
                    The fundraiser will be held in Seattle with live music, free food, free alcohol, speakers, and more.
              </p>
              <p className='tf-lato-lite f3-m pa1 w-75-m w-50-l m-auto lh-5 lh-copy mv2'>
                    WHERE: Ballard Cathedral.
              </p>
              <p className='tf-lato-lite f3-m pa1 w-75-m w-50-l m-auto lh-5 lh-copy mv2'>
                    WHEN: September 15th, from 5:30pm-9pm.
              </p>
              <Box width='30%' margin='auto' height='1px' bg='black' />
              <p className='tf-lato-lite f3-m pa1 w-75-m w-50-l m-auto lh-5 lh-copy mv2'>
                    Each of the ticket options
                    below will grant entry and are a 501c3 tax deductable donation.
              </p>
            </div>
            <div className='flex flex-column w-100 w-70-m w-30-l m-auto'>
              <Elements stripe={stripePromise}>
                <InjectedDonateForm />
              </Elements>
            </div>
          </div>
        </React.Fragment>
      </PageWrapper>
    )
  }
}

export default Tickets
