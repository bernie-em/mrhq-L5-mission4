import './App.css';
// import logo from './turnerscars_logo.png';
  
function App() {
  return (
    <div className='App'>
      
      {/* <div className='logo'>
        <img src={logo} className='logo' /> 
      </div>   */}

      <div className='search-bar'>
        <iframe style={{width:'100%', height:'1000px'}} src='https://ui.customsearch.ai/hosted-page?customconfig=44bae69b-5bf1-40e2-a4ac-b4380cb578e8&version=latest&market=en-US&q=' />
      </div>
          
    </div>
  )
};

export default App;