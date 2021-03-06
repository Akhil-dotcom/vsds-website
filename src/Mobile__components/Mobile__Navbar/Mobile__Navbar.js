import React, { useState } from 'react';
import './Mobile__Navbar.scss'
import Menubar from '../../assets/menu.svg'
import { Button, Divider, IconButton } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';
import MobileLogo from '../../assets/mainlogo.svg'
function Mobile__Navbar(props) {
    const [drawerState, setDrawerState] = useState(false);

    let toggle = (val) => {
        setDrawerState(!val);
        props.handler(val);
    }

    const list = () => (
        <div
            className="drawer"
            onKeyDown={()=>setDrawerState(false)}
        >
            <div className="drawer__logo">
                <div className="image"><img src={MobileLogo} alt='' /></div>
                <div className="logo__name">Vishnu Cars</div>
            </div>
            <div className="drawer__content">
                <Link to="/" className="group" >
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="511pt" viewBox="0 1 511 511.999" width="511pt"><path d="m498.699219 222.695312c-.015625-.011718-.027344-.027343-.039063-.039062l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.808594-33.328126-13.808594-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.144532.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.441406 13.234375 31.273437 13.746093.484375.046876.96875.070313 1.457031.070313h8.320313v153.695313c0 30.417968 24.75 55.164062 55.167969 55.164062h81.710937c8.285157 0 15-6.71875 15-15v-120.5c0-13.878906 11.292969-25.167969 25.171875-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.28125 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.164062v-153.695313h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.8125 18.359375-18.367187 18.367187-48.253906.027344-66.632813zm-21.242188 45.421876c-3.238281 3.238281-7.542969 5.023437-12.117187 5.023437h-22.71875c-8.285156 0-15 6.714844-15 15v168.695313c0 13.875-11.289063 25.164062-25.167969 25.164062h-66.710937v-105.5c0-30.417969-24.746094-55.167969-55.167969-55.167969h-48.195313c-30.421875 0-55.171875 24.75-55.171875 55.167969v105.5h-66.710937c-13.875 0-25.167969-11.289062-25.167969-25.164062v-168.695313c0-8.285156-6.714844-15-15-15h-22.328125c-.234375-.015625-.464844-.027344-.703125-.03125-4.46875-.078125-8.660156-1.851563-11.800781-4.996094-6.679688-6.679687-6.679688-17.550781 0-24.234375.003906 0 .003906-.003906.007812-.007812l.011719-.011719 208.847656-208.839844c3.234375-3.238281 7.535157-5.019531 12.113281-5.019531 4.574219 0 8.875 1.78125 12.113282 5.019531l208.800781 208.796875c.03125.03125.066406.0625.097656.09375 6.644531 6.691406 6.632813 17.539063-.03125 24.207032zm0 0"/></svg>
                    <Button className="btn">Home</Button>
                </Link>
                <Link to="/locations" className="group" >
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512"><g><path d="m256 245.254c46.28 0 83.932-37.647 83.932-83.921s-37.652-83.92-83.932-83.92-83.932 37.646-83.932 83.92 37.652 83.921 83.932 83.921zm0-137.845c29.738 0 53.932 24.191 53.932 53.924 0 29.734-24.193 53.925-53.932 53.925s-53.932-24.191-53.932-53.925c0-29.733 24.194-53.924 53.932-53.924z"/><path d="m164.612 312.131c22.735 30.777 13.601 18.808 79.086 112.303 5.952 8.531 18.609 8.571 24.595.013 65.781-93.939 56.73-82.041 79.095-112.317 22.655-30.672 46.083-62.388 58.921-99.554 18.581-53.801 10.549-107.034-22.614-149.894-.001 0-.001-.001-.002-.001-30.378-39.249-78.114-62.681-127.693-62.681s-97.315 23.432-127.694 62.683c-33.163 42.86-41.195 96.094-22.613 149.895 12.836 37.165 36.264 68.881 58.919 99.553zm-12.58-231.092c24.738-31.961 63.605-51.043 103.968-51.043s79.23 19.082 103.968 51.043l-.002-.001c26.767 34.592 33.153 77.83 17.985 121.748-11.339 32.828-33.38 62.667-54.695 91.524-16.596 22.467-11.629 15.595-67.256 95.333-55.569-79.658-50.665-72.873-67.256-95.333-21.315-28.857-43.356-58.697-54.695-91.524-15.168-43.919-8.782-87.156 17.983-121.747z"/><path d="m176.932 377.167c-4.424-7.002-13.688-9.095-20.692-4.67l-42.65 26.937c-9.304 5.876-9.313 19.478 0 25.36l134.4 84.888c4.893 3.091 11.129 3.09 16.021 0l134.4-84.888c9.305-5.876 9.313-19.478 0-25.36l-42.65-26.937c-7.006-4.424-16.269-2.332-20.692 4.67-4.425 7.003-2.333 16.266 4.671 20.69l22.574 14.257-106.314 67.148-106.313-67.148 22.574-14.257c7.004-4.423 9.095-13.686 4.671-20.69z"/></g></svg>
                    <Button className="btn" >Locate Nearest Point</Button>
                </Link>
                <Link className="group" onClick={()=>toggle(true)} >
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="682.66669pt" viewBox="-21 -21 682.66669 682.66669" width="682.66669pt"><path d="m322.820312 387.933594 279.949219-307.273438 36.957031 33.671875-314.339843 345.023438-171.363281-162.902344 34.453124-36.238281zm297.492188-178.867188-38.988281 42.929688c5.660156 21.734375 8.675781 44.523437 8.675781 68.003906 0 148.875-121.125 270-270 270s-270-121.125-270-270 121.125-270 270-270c68.96875 0 131.96875 26.007812 179.746094 68.710938l33.707031-37.113282c-58.761719-52.738281-133.886719-81.597656-213.453125-81.597656-85.472656 0-165.835938 33.285156-226.273438 93.726562-60.441406 60.4375-93.726562 140.800782-93.726562 226.273438s33.285156 165.835938 93.726562 226.273438c60.4375 60.441406 140.800782 93.726562 226.273438 93.726562s165.835938-33.285156 226.273438-93.726562c60.441406-60.4375 93.726562-140.800782 93.726562-226.273438 0-38.46875-6.761719-75.890625-19.6875-110.933594zm0 0"/></svg>
                    <Button className="btn">Book Lesson</Button>
                </Link>
                <Link className="group" to="/Blog">
                    <svg className='icon' xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 512.002 512.002" height="512" viewBox="0 0 512.002 512.002" width="512"><g><path d="m482.002 46.001h-452.002c-16.542 0-30 13.458-30 30v360.001c0 16.542 13.458 30 30 30h452.002c16.542 0 30-13.458 30-30v-360.002c0-16.542-13.458-29.999-30-29.999zm-452.002 20h452.002c5.514 0 10 4.486 10 10v40.003h-472.002v-40.004c0-5.513 4.486-9.999 10-9.999zm452.002 380h-452.002c-5.514 0-10-4.486-10-10v-299.998h472.001v299.998c.001 5.514-4.485 10-9.999 10z"/><path d="m467.005 101.002c5.523 0 10-4.477 10-10s-4.477-10-10-10h-.007c-5.523 0-9.997 4.477-9.997 10s4.481 10 10.004 10z"/><path d="m432.009 101.002c5.523 0 10-4.477 10-10s-4.477-10-10-10h-.007c-5.523 0-9.997 4.477-9.997 10s4.481 10 10.004 10z"/><path d="m397.013 101.002c5.523 0 10-4.477 10-10s-4.477-10-10-10h-.007c-5.523 0-9.997 4.477-9.997 10s4.481 10 10.004 10z"/><path d="m416.813 190.448-146.084 146.084c-1.098 1.098-1.925 2.436-2.416 3.909l-15.8 47.399c-2.554 7.661 4.978 15.205 12.649 12.649l47.399-15.801c1.473-.491 2.811-1.318 3.909-2.416l146.084-146.083c12.611-12.611 12.611-33.13 0-45.741-12.611-12.61-33.129-12.609-45.741 0zm-94.774 157.971-17.457-17.456 94.022-94.021 17.456 17.456zm-44.227 26.771 8.729-26.186 3.899-3.899 17.457 17.456-3.899 3.899zm170.6-153.143-18.209 18.209-17.456-17.456 18.209-18.208c4.813-4.812 12.645-4.812 17.457 0 2.314 2.313 3.588 5.413 3.588 8.728s-1.275 6.413-3.589 8.727z"/><path d="m50.001 201.003h284.003c5.523 0 10-4.477 10-10s-4.477-10-10-10h-284.003c-5.523 0-10 4.477-10 10s4.478 10 10 10z"/><path d="m314.003 231.003c0-5.523-4.477-10-10-10h-104.995c-5.523 0-10 4.477-10 10s4.477 10 10 10h104.996c5.522 0 9.999-4.477 9.999-10z"/><path d="m284.002 271.003c0-5.523-4.477-10-10-10h-179.004c-5.523 0-10 4.477-10 10s4.477 10 10 10h179.004c5.523 0 10-4.477 10-10z"/><path d="m50.001 301.003c-5.523 0-10 4.477-10 10s4.477 10 10 10h89.005c5.523 0 10-4.477 10-10s-4.477-10-10-10z"/><path d="m212.003 341.003h-162.002c-5.523 0-10 4.477-10 10s4.477 10 10 10h162.002c5.523 0 10-4.477 10-10s-4.477-10-10-10z"/><path d="m182.002 381.003h-132.001c-5.523 0-10 4.477-10 10s4.477 10 10 10h132.001c5.523 0 10-4.477 10-10s-4.477-10-10-10z"/><path d="m50.001 241.003h89.005c5.523 0 10-4.477 10-10s-4.477-10-10-10h-89.005c-5.523 0-10 4.477-10 10s4.478 10 10 10z"/><path d="m50.001 281.003c5.523 0 10-4.477 10-10s-4.477-10-10-10h-.007c-5.523 0-9.996 4.477-9.996 10s4.481 10 10.003 10z"/></g></svg>
                    <Button className="btn">Blog</Button>
                </Link>
                
            </div>
            <div className="drawer__sub">
                <Divider className='divider' />
                <div className='media'>
                    <Button className="media__btn"  onClick={()=>window.open("https://www.instagram.com/vishnucars_maruti/")} ><InstagramIcon className="media__icon" />Instagram</Button>
                </div>
                <div className='media'>
                    <Button className="media__btn" ><MailIcon className="media__icon" /><a href="mailto:managermdsktp@vishnucars.in">Mail Us</a></Button>
                </div>
                <div className='media'>
                    <Button className="media__btn"><CallIcon className="media__icon" /><a href='tel:+917339333708'>Contact Us</a></Button>
                </div>
            </div>
        </div>
    );
    return (
        <div className="mobile__navbar">
            <div className="logo">
                <img src={MobileLogo} alt='' />
            </div>
            <IconButton className="icon__btn" onClick={()=>setDrawerState(true)}><img src={Menubar} alt='' /></IconButton>
            <SwipeableDrawer
                anchor='right'
                open={drawerState}
                onClose={()=>setDrawerState(false)}
                onOpen={()=>setDrawerState(true)}
            >
                {list()}
            </SwipeableDrawer>
        </div>
    )
}

export default Mobile__Navbar
