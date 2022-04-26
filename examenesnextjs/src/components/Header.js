import Head from "next/head";
import {Component} from 'react'

export default class Header extends Component{
    render(){
        return(
            <Head>
                <title>{this.props.title}</title>
                <link href= "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
            </Head>
        )
    }
}