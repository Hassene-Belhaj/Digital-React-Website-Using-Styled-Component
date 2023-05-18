import React from 'react'
import { 
    Container,
     PricingContainer, 
     PricingElement, 
     PricingItem, 
     PricingItemIcon,
     PricingItemIcon2, 
     PricingItemIcon3, 
     PricingItemSpan, 
     PricingTitle, 
     PricingTitleItem, 
     Span1} from './Pricing.Style'
import { Button } from '../NavBar/NavBar.style'

const Pricing = () => {
  return (
<Container>
  <PricingTitle>
    Our Service
  </PricingTitle>
  <PricingContainer>

    <PricingElement>
        <PricingItem>
            <PricingItemIcon size={80}></PricingItemIcon>
            <PricingTitleItem>
                Starter Pack
            </PricingTitleItem>
               <Span1> $99.99</Span1>
               <span> per month</span>  
            <PricingItemSpan>
               <span> 100 New Users</span>
               <span> 10 000 Budgets</span>
               <span> Retargeting analytics</span>
            </PricingItemSpan>     
             <Button width={'60%'} margin={'auto'}>Choose Plan</Button>
        </PricingItem>
    </PricingElement>

    <PricingElement>
        <PricingItem>
            <PricingItemIcon2 size={80}></PricingItemIcon2>
            <PricingTitleItem>
                Gold Rush
            </PricingTitleItem>
               <Span1> $299.99</Span1>
               <span> per month</span>  
            <PricingItemSpan>
               <span> 1000 New Users</span>
               <span> $50,000 Budgets</span>
               <span> Lead Gen analytics</span>
            </PricingItemSpan>     
             <Button width={'60%'} margin={'auto'}>Choose Plan</Button>
        </PricingItem>
    </PricingElement>

    <PricingElement>
        <PricingItem>
            <PricingItemIcon3 size={80}></PricingItemIcon3>
            <PricingTitleItem>
                Diamonds Kings
            </PricingTitleItem>
               <Span1> $999.99</Span1>
               <span> per month</span>  
            <PricingItemSpan>
               <span> Unlimited Users</span>
               <span> Unlimited Budget</span>
               <span> 24/7 Support</span>
            </PricingItemSpan>     
             <Button width={'60%'} margin={'auto'}>Choose Plan</Button>
        </PricingItem>
    </PricingElement>
   
  </PricingContainer>
</Container>  )
}

export default Pricing