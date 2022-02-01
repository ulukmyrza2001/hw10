import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import Photos from './components/Photos'

function App() {
	const [dataJson, setDataJson] = useState([])
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		async function get() {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/photos?_limit=10',
			)
			if (response.ok) {
				const result = await response.json()
				localStorage.setItem('photos', JSON.stringify(result))
				setDataJson(result)
        setTimeout(() => {
          setLoading(false)
        },3000);
        
			}
		}
		get()
	}, [])

	console.log(dataJson)
	return (
		<div className='App'>
      {loading ? <Loading/> : <Photos data={dataJson} loading = {loading} />}
		
		</div>
	)
}

export default App
