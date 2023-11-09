import { useFormik } from 'formik'
import React from 'react'

const UselessJunk = () => {
    const form = useFormik( {
        initialValues: {
            search: ''
        }
    })


  return (
    <div className="useless-junk">
            <div className="input-div">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input 
                type="text" 
                name="search" 
                value={form.values.search}
                onChange={form.handleChange}
                placeholder="Type to search..." />
            </div>

            <div className="useless-junk-first-box">
              <div>
                <h4>Recent Posts</h4>
                <div className="h4-border-bit"></div>
                <h5>How To Blow Through Capital At An Incredible Rate</h5>
                <p>Jan 14, 2020</p>
                <h5>Design Studios That Everyone Should Know About?</h5>
                <p>Jan 14, 2020</p>
                <h5>How did we get 1M+ visitors in 30 days without anything!</h5>
                <p>Jan 14, 2020</p>
                <h5>Figma On Figma: How We Built Our Website Design System</h5>
                <p className="border-less">Jan 14, 2020</p>
              </div>
            </div>
            <div className="useless-junk-second-box">
                <div>
                  <h4>Categories</h4>
                  <div className="h4-border-bit"></div>
                  <div className="flex-text">
                    <h5>
                      Technology -
                    </h5>
                    <p>
                      20 Posts
                    </p>
                  </div>
                  <div className="flex-text">
                    <h5>
                      Freelancing -
                    </h5>
                    <p>
                      07 Posts
                    </p>
                  </div>
                  <div className="flex-text">
                    <h5>
                      Writing -
                    </h5>
                    <p>
                      16 Posts
                    </p>
                  </div>
                  <div className="flex-text">
                    <h5>
                      Marketing -
                    </h5>
                    <p>
                      11 Posts
                    </p>
                  </div>
                  <div className="flex-text">
                    <h5>
                      Business -
                    </h5>
                    <p>
                      35 Posts
                    </p>
                  </div>
                  <div className="flex-text">
                    <h5>
                      Education -
                    </h5>
                    <p>
                      14 Posts
                    </p>
                  </div>
                </div>
            </div>
    </div>
  )
}

export default UselessJunk