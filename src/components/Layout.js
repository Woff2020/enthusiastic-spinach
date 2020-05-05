import React from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

import { safePrefix } from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    {/* <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title> */}
                    <title>Datomize.AI - Democratizing Real-time Machine Learning</title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Datomize is a fully managed platform providing real-time codeless machine learning. It loads your datasets, trains the best learning algorithm to your needs and deploys - all in under a minute, automatically." />
                    <meta name="keywords" content="datomize, datomize.ai, data, ml, ai, machine learning, titanic, data set, dataset, titanic dataset, experiment, experiments, model, models, prediction" />
                    <meta name="author" content="Datomize.AI" />
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />
                    <meta property="og:title" content="Datomize.AI - Democratizing Real-time Machine Learning" />
                    <meta name="og:description" content="Datomize is a fully managed platform providing real-time codeless machine learning. It loads your datasets, trains the best learning algorithm to your needs and deploys - all in under a minute, automatically." />
                    <meta property="og:type" content="datomize, datomize.ai, data, ml, ai, machine learning, titanic, data set, dataset, titanic dataset, experiment, experiments, model, models, prediction" />
                    <meta property="og:url" content="https://www.datomize.ai/" />
                    <meta property="og:image" content="https://www.datomize.ai/images/icons/datomize192.png" />
                    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i" rel="stylesheet" />
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')} />
                    <link rel="shortcut icon" href="images/icons/favicon.ico" />
                    <link rel="apple-touch-icon" href="images/icons/datomize192.png" />
                </Helmet>
                <div id="page" className={'site palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette')}>
                    <Header {...this.props} />
                    <main id="content" className="site-content">
                        {this.props.children}
                    </main>
                    <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
