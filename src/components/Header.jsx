import React from 'react'
import { useState } from 'react'

const Header = () => {
	const [price, setPrice] = useState(false)

	const toglePrice = () => {
		setPrice(!price)
	}
	return (
		<div
			className="w-full h-[600px] bg-cover bg-center"
			style={{
				backgroundImage:
					'url("https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
			}}
		>
			<div className="flex ">
				<div className="bg-gradient-to-r from-zinc-800 rounded-bl-[100px] w-1/2 ">
					<div className="mt-8 ml-10">
						<div className="flex justify-between">
							<ul className="flex gap-5">
								<li className="text-white hover:text-white hover:cursor-pointer transition duration-200">
									Home
								</li>
								<li
									onClick={toglePrice}
									className="text-white hover:text-white hover:cursor-pointer transition duration-200"
								>
									Price
									<div
										className={`${
											price ? 'block' : 'hidden'
										} flex gap-5 absolute m-5 left-0 w-[60%] rounded-bl-[70%] rounded-br-[100px] pt-5 px-10 h-96 bg-white text-zinc-900`}
									>
										<div className="p-2 rounded space-y-5 ">
											<h1 className="text-lg font-bold text-orange-500">
												Cardio
											</h1>
											<p className="text-zinc-500">
												Aqui na Arena Fitness, a melhor
												versão de si mesmo. Venha fazer
												parte da nossa família
											</p>
										</div>
										<div className="p-2 rounded space-y-5">
											<h1 className="text-lg font-bold text-orange-500">
												Musculação
											</h1>
											<p className="text-zinc-500">
												Aqui na Arena Fitness, a melhor
												versão de si mesmo. Venha fazer
												parte da nossa família
											</p>
										</div>
										<div className="p-2 rounded space-y-5">
											<h1 className="text-lg font-bold text-orange-500">
												Cardio e Aurobica
											</h1>
											<p className="text-zinc-500">
												Aqui na Arena Fitness, a melhor
												versão de si mesmo. Venha fazer
												parte da nossa família
											</p>
										</div>
										<div className="p-2 rounded space-y-5">
											<h1 className="text-lg font-bold text-orange-500">
												Musculação e Yoga
											</h1>
											<p className="text-zinc-500">
												Aqui na Arena Fitness, a melhor
												versão de si mesmo. Venha fazer
												parte da nossa família
											</p>
										</div>
									</div>
								</li>
								<li className="text-white hover:text-white hover:cursor-pointer transition duration-200">
									Plan
								</li>
								<li className="text-white hover:text-white hover:cursor-pointer transition duration-200">
									Contact
								</li>
								<li className="text-white hover:text-white hover:cursor-pointer transition duration-200">
									About
								</li>
								<li className="text-white hover:text-white hover:cursor-pointer transition duration-200">
									FaQ
								</li>
							</ul>
							<h1 className="text-orange-500 absolute top-8 right-10 text-xl font-bold">
								ARENAFITNESS
							</h1>
						</div>
						<div className="mt-32">
							<h1 className="text-white text-5xl font-bold">
								Arena Fitness, Elevando Seus Limites
							</h1>
							<p className="text-white pt-5">
								Bem-vindo à Arena Fitness, onde a paixão pelo
								condicionamento físico encontra um novo
								significado. Em nosso ginasio, buscamos
								transcender os limites convencionais, oferecendo
								uma experiência de treino incomparável que não
								só molda corpos, mas também transforma vidas.
							</p>
							<button className="text-white mb-10 bg-orange-500 py-2 px-5 rounded-bl-3xl mt-5">
								Começar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
