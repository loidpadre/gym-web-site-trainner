import { useState } from 'react'

const About = () => {
	const [showText, setShowText] = useState(false)

	const show = () => {
		setShowText(!showText)
	}
	const Noshow = () => {
		setShowText(false)
	}
	return (
		<div className="text-white flex m-36 gap-32 justify-between items-center">
			<div className="w-1/2">
				<h1 className="text-5xl mb-10 text-orange-500 font-bold">
					Por quê nós?
				</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Eum voluptatum iste odit nesciunt mollitia corrupti vitae,
					recusandae dolore soluta eaque quo excepturi doloribus esse
					sequi voluptatem in blanditiis consequatur dolor illum, vero
					rem omnis. Deserunt id, facilis aspernatur vero velit
					voluptatibus voluptas similique in ea laboriosam eius illum
					fugit minus labore ullam magnam incidunt expedita assumenda
					maxime aliquid perferendis! Aspernatur laborum nihil veniam
					accusantium nisi doloremque explicabo porro eum, optio
					recusandae magni quaerat inventore, beatae placeat vitae,
					repellat provident at voluptatem natus quo sit culpa hic
					consectetur harum. Officiis voluptatibus sequi, ipsam
					repellat obcaecati cupiditate quia aut repudiandae aliquid
					accusantium?
				</p>
				<button className="bg-orange-500 py-2 mt-10 px-5 rounded hover:bg-white hover:text-zinc-900">
					Contactar
				</button>
			</div>
			<div
				onMouseEnter={show}
				onMouseLeave={Noshow}
				className="w-1/2 rounded-bl-[30%] rounded-tr-[50%] h-80  bg-cover bg-center"
				style={{
					backgroundImage:
						'url("https://images.unsplash.com/photo-1577221084712-45b0445d2b00?q=80&w=1598&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
				}}
			>
				<div
					className={`${
						showText ? 'block' : 'hidden'
					} w-full h-full p-10 bg-gradient-to-r from-zinc-900 cursor-pointer transition duration-300 ease-out hover:ease-in`}
				>
					<h1 className="text-orange-500 text-xl font-semibold">
						Treina com Mestres
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Est, quasi!
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
