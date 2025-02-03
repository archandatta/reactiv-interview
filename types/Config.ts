export interface ImageCarouselType {
	images: string[];
	display: string;
}

interface TextArea {
	title: string;
	description: string;
	titleColor: string;
	descriptionColor: string;
}

interface CallToAction {
	label: string;
	link: string;
	buttonColor: string;
	labelColor: string;
}

export interface Config {
	carousel: ImageCarouselType;
	textArea: TextArea;
	callToAction: CallToAction;
}
