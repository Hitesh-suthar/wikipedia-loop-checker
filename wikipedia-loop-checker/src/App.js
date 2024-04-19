import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import loaderSVG from './loader.svg';

function App() {
	const [url, setUrl] = useState('');
	const [result, setResult] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const response = await axios.post('/api/route/check-loop', { url });
			setResult(response.data);
			setLoading(false);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='container'>
			<h1 className='header'>Wikipedia Loop Checker</h1>

			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Search url... " value={url} onChange={(e) => setUrl(e.target.value)} />
				<button type="submit">Check Loop</button>
			</form>

			{loading ? <div className='loading'><img src={loaderSVG} alt="" /></div> :
				(result && (
					<div className='data'>
						<p className='count'>Number of pages visited  : {result.requestCount}</p>
						<ul className='list'>
							{result.visitedPages.map((page, index) => (
								<li className='list-items' key={index}><a className='link' href={page}>{page}</a></li>
							))}
						</ul><br />
						{!result.deadEnd && !result.loop && (
							<p className='success'> 😎 : Philosophy page reached </p>
						)}
						{result.deadEnd && (<p className='failure'> Dead End 😒: Philosophy page can't be reached </p>)}
						{(result.loop && (<p className='failure'> Loop found😒: Philosophy page can't be reached </p>))}
					</div>
				))
			}
		</div>
	);
}

export default App;
