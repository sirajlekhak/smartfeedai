import React, {useState, useEffect} from 'react'
import './App.css';
import FeedItemComponent from './components/FeedItemComponent';

function App() {

  const[status, setStatus] = useState(0);

  useEffect(() => {
    fetch('/status').then(res => res.json()).then(data => {
      setStatus(data.status);
    }, []);
  })

  return (
    <div className="App">
      <header className="App-header">
        <p className='heading'>Smart<span style={{color:'#54DA9A'}}>Feed</span>.ai</p>
        <p className='subtitle'>The Future of Reading Online with Ai</p>
      </header>

      <div className='search-bar'> 
        <input type="text" placeholder="Enter a URL.."/>
        <button>Generate Feed</button>
      </div>

      <FeedItemComponent 
        title="Simplify infrastructure management with Napptive"
        url="https://blog.wemakedevs.org/simplify-infrastructure-management-with-napptive"
        gist="The platform automates many of the tasks required for deployment to Kubernetes clusters, ensuring seamless deployment. Additionally, Napptive provides greater scalability and flexibility, allowing for optimal performance and resource usage. Efficient resource management is also achieved through the platform's streamlined processes. Napptive stands out by offering a unique selling proposition that prioritizes the developer experience. Infrastructure management in a production environment can be a daunting task that requires significant effort and expertise. Any amount is appreciated!"/>

    </div>
  );
}

export default App;
