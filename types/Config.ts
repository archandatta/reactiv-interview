export interface ImageCarouselType {
	images: string[];
	display: string;
}

export interface ITextArea {
	title: string;
	description: string;
	titleColor: string;
	descriptionColor: string;
}

export interface ICallToAction {
	label: string;
	link: string;
	buttonColor: string;
	labelColor: string;
}

export interface Config {
	carousel: ImageCarouselType;
	textArea: ITextArea;
	callToAction: ICallToAction;
}
