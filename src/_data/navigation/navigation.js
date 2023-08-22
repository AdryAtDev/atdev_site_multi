const service_list = {
	nearshore: {
		en: {
			label: 'Nearshore Staff Augmentation',
			link: '/pages/en/services/nearshore/',
		},
		es: {
			label: 'Dotación de Personal',
			link: '/pages/es/services/nearshore/',
		},
	},
	recruiting: {
		en: {
			label: 'Recruiting',
			link: '/pages/en/services/recruiting/',
		},
		es: {
			label: 'Reclutamiento',
			link: '/pages/es/services/recruiting/',
		},
	},
	app_development: {
		en: {
			label: 'Custom Software Development',
			link: '/pages/en/services/app-development',
		},
		es: {
			label: 'Desarrollo de Software Personalizado',
			link: '/pages/es/services/app-development',
		},
	},
};

const about_list = {
	ourStory: {
		en: {
			label: 'Our Story',
			link: '/pages/en/about/our-story/',
		},
		es: {
			label: 'Nuestra Historia',
			link: '/pages/es/about/our-story/',
		},
	},
	ourTeam: {
		en: {
			label: 'Our Team',
			link: '/pages/en/about/our-team/',
		},
		es: {
			label: 'Nuestro Equipo',
			link: '/pages/es/about/our-team/',
		},
	},
	faq: {
		en: {
			label: 'Frequently Asked Questions',
			link: '/pages/en/about/faq',
		},
		es: {
			label: 'Preguntas más frecuentes',
			link: '/pages/es/about/faq',
		},
	},
};

const translated_links = {
	en: {
		home: '/pages/en/',
		services: '/pages/en/services',
		careers: '/pages/en/careers',
		about: '/pages/en/about',
		contact: '/pages/en/contact',
	},
	es: {
		home: '/pages/es/',
		services: '/pages/es/services',
		careers: '/pages/es/careers',
		about: '/pages/es/about',
		contact: '/pages/es/contact',
	},
};

module.exports = {
	home: {
		label: {
			en: 'Home',
			es: 'Inicio',
		},
		link: {
			en: '/pages/en/',
			es: '/pages/es/',
		},
		translated_link: {
			en: translated_links.en.home,
			es: translated_links.es.home,
		},
	},
	services: {
		label: {
			en: 'Services',
			es: 'Servicios',
		},
		link: {
			en: '/pages/en/services',
			es: '/pages/es/services',
		},
		translated_link: {
			en: translated_links.en.services,
			es: translated_links.es.services,
		},
		service_list,
	},
	careers: {
		label: {
			en: 'Careers',
			es: 'Carreras',
		},
		link: {
			en: '/pages/en/careers',
			es: '/pages/es/careers',
		},
		translated_link: {
			en: translated_links.en.careers,
			es: translated_links.es.careers,
		},
	},
	about: {
		label: {
			en: 'About',
			es: 'Nosotros',
		},
		link: {
			en: '/pages/en/about',
			es: '/pages/es/about',
		},
		translated_link: {
			en: translated_links.en.about,
			es: translated_links.es.about,
		},
		about_list,
	},
	contact: {
		label: {
			en: 'Contact',
			es: 'Contactos',
		},
		link: {
			en: '/pages/en/contact',
			es: '/pages/es/contact',
		},
		translated_link: {
			en: translated_links.en.contact,
			es: translated_links.es.contact,
		},
	},
};
