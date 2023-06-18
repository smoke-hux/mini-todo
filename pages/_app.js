import '../styles/globals.css'
//some import

import { ToDoListProvider } from '@/context/ToDolistApp'
const MyApp = ({ Component, pageProps }) => {
  return (
    <ToDoListProvider>
      <div>
        <Component {...pageProps} />// this will allow us to communicate with the contract
      </div>
    </ToDoListProvider>// here
  )
}

export default MyApp
