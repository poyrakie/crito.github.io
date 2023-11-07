import React from 'react'
import Button from '@generics/Button'
import Cassandra from '@images/cassandra.png'
import Amanda from '@images/amanda.png'
import Jack from '@images/jack.png'
import TestimonialDivs from '@homespecifics/TestimonialDivs'

const Testimonial = () => {
  return (
     <section className="testimonial-section">
        <div className="container">
            <p className="orange-p">Testimonial</p>
            <h2>What Our Clients Says</h2>
            <div className="reviews">
                <TestimonialDivs text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" img={Cassandra} alt="small circular image of a womans face" name="Cassandra Warren" title="Business Manager, Dorfus" />
                <TestimonialDivs text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" img={Amanda} alt="small circular image of a womans face" name="Amanda Tulling" title="Senior Developer, Square" />
                <TestimonialDivs text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" img={Jack} alt="small circular image of a mans face" name="Jack McDogglas" title="Key Account Manager, Gobona" />
            </div>
            <div className="center-content">
                <Button color="btn-black" text="All Reviews" url="#" />
            </div>
        </div>
    </section>
  )
}

export default Testimonial