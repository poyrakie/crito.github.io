import { useFormik } from 'formik'
import React from 'react'
import RecentPosts from './RecentPosts'
import Categories from './Categories'

const UselessJunk = () => {
    const form = useFormik( {
        initialValues: {
            search: ''
        }
    })


  return (
    <div className="useless-junk">
            <div className="input-div">
              <i className="fa-solid fa-magnifying-glass"></i>
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
                <RecentPosts title="How To Blow Through Capital At An Incredible Rate" date="Jan 14, 2020" />
                <RecentPosts title="Design Studios That Everyone Should Know About?" date="Jan 14, 2020" />
                <RecentPosts title="How did we get 1M+ visitors in 30 days without anything!" date="Jan 14, 2020" />
                <h5>Figma On Figma: How We Built Our Website Design System</h5>
                <p className="border-less">Jan 14, 2020</p>
              </div>
            </div>
            <div className="useless-junk-second-box">
                <div>
                  <h4>Categories</h4>
                  <div className="h4-border-bit"></div>
                  <Categories category="Technology" posts="20" />
                  <Categories category="Freelancing" posts="07" />
                  <Categories category="Writing" posts="16" />
                  <Categories category="Marketing" posts="11" />
                  <Categories category="Business" posts="35" />
                  <Categories category="Education" posts="14" />
                </div>
            </div>
    </div>
  )
}

export default UselessJunk