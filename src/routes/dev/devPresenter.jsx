import React from 'react';
import DevMain from './components/DevMain';
import DevProfile from './components/DevProfile';
import DevNavigator from './components/DevNavigator';
import DevSkill from './components/DevSkill';
import DevProjects from './components/DevProjects';
import DevContact from './components/DevContact';
import {Element} from 'react-scroll'
import './dev.css'

function DevPresenter() {
  return (
    <div className="dev">
      <DevNavigator/>
        <Element name="main"><DevMain/></Element>
        <Element name="profile"><DevProfile/></Element>
        <Element name="skill"><DevSkill/></Element>
        <Element name="projects"><DevProjects/></Element>
        <Element name="contact"><DevContact/></Element>
    </div>
  );
}

export default DevPresenter;
