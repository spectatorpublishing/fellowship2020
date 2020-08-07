import React from "react";
import { storiesOf } from '@storybook/react';

// Test Navigation
import NavBar from '../components/Navigation/NavBar';
import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import { NavItems } from "../util/NavItems";
import { MemoryRouter } from 'react-router';

storiesOf('NavBar', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/notEmptyRoute']}>
      <div style={{background: "url(https://images.unsplash.com/photo-1476681133757-d20293a9f2de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80)"}}>
        {story()}
        <p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p>
        <p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p>
        <p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p>
        <p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p>
        <p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p>
        <p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p>
      </div>
    </MemoryRouter>
  ))
  .add('Navbar', () => <NavBar menuItems={NavItems} />)
  .add('Fixed Navbar', () => <NavBar menuItems={NavItems} fixed />)
  .add('Transparent Navbar (Only Use on Mobile)', () => <NavBar menuItems={NavItems} transparent />);
  
  storiesOf('Scrolling NavBar', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/notEmptyRoute']}>
      <div>
        <div style={{backgroundColor: "magenta", width: "100vw", height: "100vh",}}></div>
        {story()}
      </div>
    </MemoryRouter>
  ))
  .add('Scrolling Triggered Navbar with Dynamic Active Content (menuItem length must match # of children elements)', () => { 
    return (
      <ScrollingNavBar menuItems={NavItems}>
        <div style={{backgroundColor: "red", width: "100vw", height: "100vh",}}></div>
        <div style={{backgroundColor: "orange", width: "100vw", height: "100vh",}}></div>
        <div style={{backgroundColor: "yellow", width: "100vw", height: "100vh",}}></div>
        <div style={{backgroundColor: "green", width: "100vw", height: "100vh",}}></div>
        <div style={{backgroundColor: "blue", width: "100vw", height: "100vh",}}></div>
        <div style={{backgroundColor: "indigo", width: "100vw", height: "100vh",}}></div>
        <div style={{backgroundColor: "purple", width: "100vw", height: "100vh",}}></div>
      </ScrollingNavBar>
    );
  })
  .add('Scrolling Triggered Navbar ignoring Content (just fixes navbar after scrolled to)', () => { 
    return (
      <ScrollingNavBar menuItems={NavItems} noContent>
        <div style={{backgroundColor: "red", width: "100vw", height: "100vh",}}></div>
        <div style={{backgroundColor: "orange", width: "100vw", height: "100vh",}}></div>
        <div style={{backgroundColor: "yellow", width: "100vw", height: "100vh",}}></div>
      </ScrollingNavBar>
    );
  });