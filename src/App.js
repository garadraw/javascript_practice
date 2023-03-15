const Hello = (props) =>
{
	console.log('Reached the Hello Component')

	console.log(props)
	return (
	  <div>
		<p>Hello {props.name}, you are {props.age} years old</p>

	  </div>
	)
}

const App = () =>
{
	console.log('Reached the App Component')

	// const name = 'Peter'
	// const age = 10

	return (
	<>
		<h1>Greetings</h1>
		<Hello name='George' age={13 + 54} />,
        {/* <Hello name={name} age={age} /> */}
		<Footer />
	</>
	)
}

const Footer = () => 
{
	return (
		<div>
			greeting app created by <a href='https://github.com/garadraw'>garadraw</a>
		</div>
	)
}

// const App = () => 
// {	
// 	const now = new Date()
// 	const a = 10
// 	const b = 20
// 	console.log('Reached the App variable')
// 	console.log(now, a+b)
	
// 	return (
// 	<div>
// 	  <p>Hello world it is {now.toString()}</p>
// 	  <p>{a} plus {b} is {a+b}</p>
// 	  <p>E pur si muove</p>
// 	</div>
//   )
// }

// const App = () => {
// 	const now = new Date()
// 	const a = 10
// 	const b = 20
// 	return React.createElement(
// 	  'div',
// 	  null,
// 	  React.createElement(
// 		'p', null, 'Hello world, it is ', now.toString()
// 	  ),
// 	  React.createElement(
// 		'p', null, a, ' plus ', b, ' is ', a + b
// 	  )
// 	)
//   }

export default App