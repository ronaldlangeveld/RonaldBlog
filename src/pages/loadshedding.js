import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/navbar';
import axios from 'axios';
import ogCard from '../assets/loadshedding.png';
import 'bulma/css/bulma.css';

class loadshedding extends Component {

    state = {
        fucked: false,
        status: 0
    }

    componentDidMount() {

        console.log('getting status');

        axios.get('https://bigapi.co.za/api/LoadSheddings/status?access_token=xUO0RTEkOvlIn3Xw7H9WsBFIwQqAdk3htHAcTZMP3Kc0dumTwe1fodFwMhGpBL8S')
        .then(res => {
    
            const now = res.data.statuses[0].status;
            console.log(now);
            if(now === 'Stage1'){
                this.setState({fucked: true, status: 1})
                return now;
            } if(now === 'Stage2'){
                
                this.setState({fucked: true,  status:2})
                return now;
            } if(now === 'Stage3'){
                this.setState({fucked: true,  status:3})
                return now;
            } if(now === 'Stage4'){
                this.setState({fucked: true,  status:4})
                return now;
            } if(now === 'Stage5'){
                this.setState({fucked: true,  status:5})
                return now;
            } if(now === 'Stage6'){
                this.setState({fucked: true,  status:6})
                return now;
            } if(now === 'Stage7'){
                this.setState({fucked: true, status:7})
                return now;
            } if(now === 'Stage8'){
                this.setState({fucked: true, status:8})
                return now;
    
            } else {

                this.setState({fucked: false, status:0})

                return now;
            }
            
        
        }).catch(err => {
            console.log('error');
            return err;
        });

    };
    
  render() {


    const status = this.state.status;
    const fucked = this.state.fucked;
    const allClasses = "hero is-fullheight"
    let stageClass;
    if(status === 0){
        stageClass = allClasses + ' is-success'
    } if(status === 1){
        stageClass = allClasses + ' is-info'
    }
    if(status === 2){
        stageClass = allClasses + ' is-warning'
    } if(status === 3){
        stageClass = allClasses + ' is-danger'
    }
    if(status === 4){
        stageClass = allClasses + ' is-danger'

    } 
    

    return (
      <div>
                              <Helmet
                        title="Loadshedding Status"
                        meta={[
                            { charSet: 'utf-8' },
                            { httpEquiv: 'Content-Language', content: 'en-us' },
                            { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
                            { httpEquiv: 'cleartype', content: 'on' },
                            {
                                name: 'viewport',
                                content: 'width=device-width,initial-scale=1'
                            },
                            { name: 'description', content: "The current national status for Loadshedding" },
                            { name: 'google', value: 'notranslate' },
                            { name: 'HandheldFriendly', content: 'true' },
                            { name: 'apple-mobile-web-app-title', content: "Loadshedding Status" },
                            { name: 'apple-mobile-web-app-capable', content: 'yes' },
                            {
                                name: 'apple-mobile-web-app-status-bar-style',
                                content: 'white'
                            },
                            { name: 'msapplication-TileColor', content: '#da532c' },
                            { name: 'theme-color', content: '#ffffff' },

                            { name: 'twitter:card', content: 'summary_large_image' },
                            { name: 'twitter:site', content: '@ronaldlangeveld' },
                            { name: 'twitter:creator', content: '@ronaldlangeveldl' },
                            { name: 'twitter:title', content: "Loadshedding Status" },
                            { name: 'twitter:description', content: "The current national status for Loadshedding" },
                            { name: 'twitter:image:src', content: ogCard },
                            { name: 'twitter:url', content: "https://www.ronaldlangeveld.com/loadshedding" },
                            { property: 'og:title', content: "Loadshedding Status" },
                            { property: 'og:image', content: "https://www.ronaldlangeveld.com/loadshedding" + ogCard },
                            { property: 'og:image:width', content: 1200 },
                            { property: 'og:image:height', content: 628 },
                            { property: 'og:image:secure_url', content: "https://www.ronaldlangeveld.com/loadshedding" + ogCard },
                            { property: 'og:url', content: "https://www.ronaldlangeveld.com/loadshedding" },
                            { property: 'og:description', content: "The current national status for Loadshedding" },
                            { property: 'og:image:width', content: 1200 },
                            { property: 'og:image:height', content: 628 },
                            { property: 'og:image:alt', content: "Loadshedding Status" },
                            { property: 'og:site_name', content: "Loadshedding Status" },
                            { property: 'og:type', content: 'website' }
                        ]}
                    >
                        <html lang="en" />
                    </Helmet>
        <Navbar />
        {fucked ? (

<section className={stageClass}>
<div className="hero-body">
  <div className="container">
  <h2 className="title is-1 has-text-centered">
  Bad News 😭
                  <br/>
                 Loadshedding in progress
                </h2>
    <h1 style={hugeText} className="title has-text-centered">
      {this.state.status}
    </h1>
    <h2 className="is-size-5 has-text-centered"><i>Not actually <strong>Stage {this.state.status}</strong>? Please let me know so I can fix this</i></h2>
                <p className="is-size-5 has-text-centered">Contact me <a style={underline} href="https://twitter.com/ronaldlangeveld" target="_blank" rel="noopener noreferrer">@ronaldlangeveld</a> or <a style={underline} href="mailto:hi@ronaldlangeveld.com?subject=Hi, lets develop something awesome." rel="noopener noreferrer">hi@ronaldlangeveld.com</a></p>
<br />
<br />
                <h2 className="subtitle is-5 has-text-centered"><i>Need push notifications?</i> <br /> Download <a style={underline} href="https://sepush.co.za/">EskomSePush</a></h2>

  </div>
</div>
</section>

        ) : (

            <section className="hero is-fullheight is-success">
            <div className="hero-body">
              <div className="container">
              <h1 className="title is-1 has-text-centered">
                  Good News 😄
                  <br/>
                  There's no loadshedding right now!


                </h1>

                <br/>
                <br/>

                <h2 className="is-size-5 has-text-centered"><i>Does the info seem wrong? Please let me know</i></h2>
                <p className="is-size-5 has-text-centered">Contact me <a style={underline} href="https://twitter.com/ronaldlangeveld" target="_blank" rel="noopener noreferrer">@ronaldlangeveld</a> or <a style={underline} href="mailto:hi@ronaldlangeveld.com?subject=Hi, lets develop something awesome." rel="noopener noreferrer">hi@ronaldlangeveld.com</a></p>
<br />
<br />
                <h2 className="subtitle is-5 has-text-centered"><i>Need push notifications?</i> <br /> Download <a style={underline} href="https://sepush.co.za/">EskomSePush</a></h2>


              </div>
            </div>
          </section>

        )
    
    }

      </div>
    )
  }
}


const hugeText = {
    fontSize: "25em"
}
const underline = {
    textDecoration: "underline",
  
  };

  const margintop = {
      marginTop: "5px"
  }
export default loadshedding;