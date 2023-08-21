const navigation = require( '../navigation/navigation' );
const about_our_story = require( './about_our_story' );
const about_our_team = require( './about_our_team' );
const about_faq = require( './about_faq' );

module.exports = {
	en: [
		{
			label: navigation.about.about_list.ourStory.en.label,
			link: navigation.about.about_list.ourStory.en.link,
			title: about_our_story.base.en.title,
			icon: about_our_story.base.en.icon,
			long_description: about_our_story.base.en.long_description,
		},
		{
			label: navigation.about.about_list.ourTeam.en.label,
			link: navigation.about.about_list.ourTeam.en.link,
			title: about_our_team.base.en.title,
			icon: about_our_team.base.en.icon,
			long_description: about_our_team.base.en.long_description,
		},
		{
			label: navigation.about.about_list.faq.en.label,
			link: navigation.about.about_list.faq.en.link,
			title: about_faq.base.en.title,
			icon: about_faq.base.en.icon,
			long_description: about_faq.base.en.long_description,
		},
	],
	es: [
		{
			label: navigation.about.about_list.ourStory.es.label,
			link: navigation.about.about_list.ourStory.es.link,
			title: about_our_story.base.es.title,
			icon: about_our_story.base.es.icon,
			long_description: about_our_story.base.es.long_description,
		},
		{
			label: navigation.about.about_list.ourTeam.es.label,
			link: navigation.about.about_list.ourTeam.es.link,
			title: about_our_team.base.es.title,
			icon: about_our_team.base.es.icon,
			long_description: about_our_team.base.es.long_description,
		},
		{
			label: navigation.about.about_list.faq.es.label,
			link: navigation.about.about_list.faq.es.link,
			title: about_faq.base.es.title,
			icon: about_faq.base.es.icon,
			long_description: about_faq.base.es.long_description,
		},
	],
};
