import  { Component } from 'react';
import Faq from 'react-faq-component';

const data = {
  title: "Frequently Asked Questions",
  rows: [
    {
      title: "What are the most important things I should know about riding a bike?",
      content: "Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider."
    },
    {
      title: "How can I tell if my helmet is old and I need a new one?",
      content: "Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. "
    },
    {
      title: "Click to open this one and close others",
      content: "Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider."
    },
   ]
}

export default class App extends Component {
  render() {
    return (
      <div className='m-10 border-2 p-4'>
        <Faq data={data}/>
      </div>
    )
  }
}