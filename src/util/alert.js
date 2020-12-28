  import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import { Zoom } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  toast.configure({
    autoClose: 5000
  })
  export default function alert(type, message , options) {
    var notify
    switch (type) {
      case 'info':
       notify = () => toast.info(message,options);
      break;

      case 'success':
       notify = () => toast.success(message,options);
      break;

      case 'warn':
       notify = () => toast.warn(message,options);
      break;

      case 'error':
       notify = () => toast.error(message,options);
      break;

      case 'dark':
       notify = () => toast.dark(message,options);
      break;

      default:
        notify = () => toast.info(message,options);
      break;
    }

    //chamar metodo de toast antes de retornar o codigo jsx
    notify()

    return (
      <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer
          transition={Zoom}
         />
      </div>
    );
  }