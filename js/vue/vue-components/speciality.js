const tl = gsap.timeline({
	defaults: { duration: 0.3, ease: 'Power3.easeOut' },
})
Vue.component('speciality', {
	data() {
		return {
			fullImg: [],
			list: [],
			iterator: 0,
			maxImg: 9,
			isFullRightImg: false,
			fullRightImg: '',
		}
	},

	template: `
		<section class="main__speciality">
					<div class="speciality speciality_blue">
						<div class="container">
							<div class="speciality__wrapper">
								<div class="speciality__left">
									<h3 class="speciality__title title title_medium">
										Areas of Expertise
									</h3>
									<ul  class="speciality__list">
										<li  v-for="item in list" class="speciality__item speciality__item_yellow" @mouseover="fullRightImgShow(item.img)" @mouseleave="isFullRightImg = false">
											<a href=""
												><svg
													width="30"
													height="30"
													xmlns="http://www.w3.org/2000/svg"
												>
													<g>
														<rect
															fill="none"
															id="canvas_background"
															y="-1"
															x="-1"
														/>
													</g>
													<g>
														<circle
															stroke="#101f42"
															stroke-width="2"
															id="circle_1"
															fill="none"
															r="14"
															cy="15.0005"
															cx="15"
														/>
														<circle
															id="circle_2"
															stroke-width="7"
															fill="#101F42"
															r="8"
															cy="15.0004"
															cx="15.0004"
														/>
													</g>
												</svg>
												{{item.title}}</a
											>
										</li>
									</ul>
								</div>
								<div class="speciality__right">
									<div class="speciality__full-img" :class="{'open':isFullRightImg}">
										<img :src="'img/'+fullRightImg" alt="" />
									</div>
									<div v-for="item in fullImg.slice(0,maxImg)" class="speciality__img">
										<img :src="'img/'+item" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
  `,
	created() {
		setTimeout(() => {
			this.fullImg = [
				'speciality-1.jpeg',
				'speciality-2.jpeg',
				'speciality-3.jpeg',
				'speciality-4.jpeg',
				'speciality-5.jpeg',
				'speciality-6.jpeg',
				'speciality-7.jpeg',
				'speciality-8.jpeg',
				'speciality-9.jpeg',
				'speciality-10.jpeg',
				'speciality-11.jpeg',
				'speciality-12.jpeg',
			]
			this.list = [
				{
					title: 'travel and tourism',
					img: 'speciality-1.jpeg',
				},
				{
					title: 'Legal',
					img: 'speciality-2.jpeg',
				},
				{
					title: 'environment',
					img: 'speciality-3.jpeg',
				},
				{
					title: 'chemistry',
					img: 'speciality-4.jpeg',
				},
				{
					title: 'architecture',
					img: 'speciality-5.jpeg',
				},
				{
					title: 'culture',
					img: 'speciality-6.jpeg',
				},
				{
					title: 'fmcg',
					img: 'speciality-7.jpeg',
				},
				{
					title: 'bank and finance',
					img: 'speciality-8.jpeg',
				},
				{
					title: 'Technical',
					img: 'speciality-9.jpeg',
				},
				{
					title: 'Healthcare',
					img: 'speciality-10.jpeg',
				},
			]
		}, 1000)

		setInterval(() => {
			const persons = document.querySelectorAll('.speciality__img img')
			tl.staggerTo([...persons], 0.1, { y: 20, opacity: 0 }, 0.1)
				.call(
					() => {
						let renderImg = this.fullImg

						renderImg = this.fullImg.slice(-1).reverse()
						renderImg.push(...this.fullImg.slice(0, this.fullImg.length - 1))

						this.fullImg = renderImg
					},
					'',
					'>'
				)
				.staggerTo([...persons], 0.1, { y: 0, opacity: 1 }, 0.1, '>')
		}, 5000)
	},
	computed: {},
	methods: {
		fullRightImgShow(img) {
			this.fullRightImg = img
			this.isFullRightImg = true
		},
	},
})
