export enum ImageDisplay {
	landscape = 'landscape',
	square = 'square',
	portrait = 'portrait',
}

export type ImageCarouselType = {
	images: string[];
	display: ImageDisplay;
};

export type ITextArea = {
	title: string;
	description: string;
	titleColor: string;
	descriptionColor: string;
};

export type ICallToAction = {
	label: string;
	link: string;
	buttonColor: string;
	labelColor: string;
};

export interface Config {
	carousel: ImageCarouselType;
	textArea: ITextArea;
	callToAction: ICallToAction;
}
