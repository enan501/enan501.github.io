import React from 'react';
import DevMain from './components/devMain';
import DevProfile from './components/devProfile';
import DevNavigator from './components/devNavigator';
import DevSkill from './components/devSkill';
import DevProjects from './components/devProjects';
import DevContact from './components/devContact';
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
