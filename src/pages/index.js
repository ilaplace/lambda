import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {initAuth} from '../service/auth'

initAuth()
class IndexPage extends React.Component{
  state = { loading: false, msg: null}
  handleClick = e =>{
    e.preventDefault()
    this.setState({loading: true})
    fetch('/.netlify/functions/hello-world')
    .then(res => res.json())
    //.then(json => this.setState({loading: false, msg: json.msg}))
    .then(console.log);
    
  }
  render(){

    const { loading, msg} = this.state
    return (
      <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <button onClick={this.handleClick}>
          Call Lambda Func
        </button>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
    )
  }
}


export default IndexPage
