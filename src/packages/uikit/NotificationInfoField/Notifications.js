import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Notification from './Notification';
import classes from './Notification.module.scss'


const Notifications = ({ onRequestHide,notifications })=>{
  const handleRequestHide = notification => () => onRequestHide(notification);


  return (
   <div className={classes.notificationRoot}>
              <TransitionGroup>
                {notifications.map((notification) => {
                  const key = notification.id || new Date().getTime();
                  return (
                    <CSSTransition
                      key={key}
                      timeout={0}
                      classNames="notification"
                    >
                      <Notification
                        key={key}
                        type={notification.type}
                        title={notification.title}
                        message={notification.text}
                        timeOut={notification.timeOut}
                        onClick={notification.onClick}
                        onRequestHide={handleRequestHide(notification)}
                        customClassName={notification.color}
                      />
                    </CSSTransition>
                  );
                })}
              </TransitionGroup>
            </div>
  )
}
export  default Notifications
