import React from 'react';
import Layout from '@theme/Layout';
import ShowcasePageList from '@site/src/components/ShowcaseItems';

export default function Showcase() {
    return (
        <Layout
            title={"Showcase"}
            description="Description will go into a meta tag in <head />">
            <header className='hero text--center'>
                <div className="container">
                    <h1 className="hero__title">Showcase</h1>
                    <p className="hero__subtitle">dApps using CRA Template: dApp</p>
                </div>
            </header>
            <main>
                <ShowcasePageList />
            </main>
        </Layout>
    );
}
