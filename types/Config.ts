export enum ImageDisplay {
	landscape = 'landscape',
	square = 'square',
	portrait = 'portrait',
}

export type ImageCarouselType = {
	images: string[];
	display: string;
};

export type TextAreaType = {
	title: string;
	description: string;
	titleColor: string;
	descriptionColor: string;
};

export type CallToActionType = {
	label: string;
	link: string;
	buttonColor: string;
	labelColor: string;
};

export interface Config {
	carousel: ImageCarouselType;
	textArea: TextAreaType;
	callToAction: CallToActionType;
}
